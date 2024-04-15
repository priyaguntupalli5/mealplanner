import {
  Button,
  Checkbox,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from "@mui/material";
import { graphql } from "babel-plugin-relay/macro";
import { useLazyLoadQuery } from "react-relay";
import { useParams } from "react-router";
import { ShoppingListQuery } from "./__generated__/ShoppingListQuery.graphql";
import { Print } from "@mui/icons-material";

const shoppingListQuery = graphql`
  query ShoppingListQuery($rowId: BigInt!) {
    mealPlan(rowId: $rowId) {
      nameEn
      descriptionEn
      person {
        fullName
      }
      mealPlanEntries {
        nodes {
          meal {
            id
            nameEn
            ingredients {
              nodes {
                id
                name
                quantity
                unit
                productKeyword
                substituteIngredient {
                  name
                }
                matchedProducts {
                  nodes {
                    id
                    nameEn
                    price
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const ShoppingList = () => {
  const params = useParams();
  const node = useLazyLoadQuery<ShoppingListQuery>(
    shoppingListQuery, 
    { rowId: params.id },
    { fetchPolicy: "store-or-network" }
  );
  const mealPlan = node.mealPlan;

  interface Meal {
    id: string;
    name: string;
    matchedProducts: Product[]
  }

  interface Product {
    id: string;
    productName: string;
    price: any;
  }

  interface MealIngredient {
    mealsById: Meal[];
    quantity: any[];
    unit: string[];
    substituteIngredient: string;
  }
  
  const mealsByIngredient: Map<string, MealIngredient> = new Map<string, MealIngredient>();
  const mealCounts = new Map<string, number>();

  mealPlan?.mealPlanEntries.nodes.forEach((mealPlanEntry) => {
    const mealId = mealPlanEntry.meal?.id;
    const mealName = mealPlanEntry.meal?.nameEn;

    if (mealId) {
      if (mealCounts.has(mealId)) {
          mealCounts.set(mealId, mealCounts.get(mealId)! + 1);
      } else {
          mealCounts.set(mealId, 1);
        }
    }
    if (mealPlanEntry.meal?.ingredients) {
      mealPlanEntry.meal.ingredients.nodes.forEach((ingredient) => {
        let ingredientName = ingredient.name.toLowerCase();
        const productKeyword = ingredient.productKeyword.toLowerCase();
        const quantity = ingredient.quantity;
        const unit = ingredient.unit;
        const subIngredient = ingredient.substituteIngredient?.name.toLowerCase() || "";
        const matchedProducts = ingredient.matchedProducts.nodes.map(product => ({
          id: product.id,
          productName: product.nameEn, 
          price: product.price
        }));

        if (mealId && mealName) {
          if (ingredientName !== productKeyword){
            ingredientName = `${ingredientName} | ${productKeyword}`;
          }

          if (mealsByIngredient.has(ingredientName)) {
            const existingIngredientDetails = mealsByIngredient.get(ingredientName)!;
            const mealExists = existingIngredientDetails.mealsById.some(meal => meal.id === mealId);

            if (!mealExists) {
              existingIngredientDetails.mealsById.push({ id: mealId, name: mealName, matchedProducts: matchedProducts});
              existingIngredientDetails.quantity.push(quantity);
              existingIngredientDetails.unit.push(unit);
              
            }
            existingIngredientDetails.substituteIngredient = subIngredient;
            mealsByIngredient.set(ingredientName, existingIngredientDetails);
          } else {
            mealsByIngredient.set(ingredientName, {
              mealsById: [{ id: mealId, name: mealName, matchedProducts: matchedProducts }],
              quantity: [quantity],
              unit: [unit],
              substituteIngredient: subIngredient
            });
          }
        }
      });
    }
  });
  return (
    <>
      {Array.from(mealsByIngredient.entries()).length === 0 ? (
          <h3 style={{ textAlign: "center" }}>There are no meals added to this mealplan </h3>
      ) : (
        <Grid container spacing="5" sx={{ padding: "2rem" }}>
          <Grid xs={12}>
            <Typography variant="subtitle1" sx={{ mr: 5 }}>
              {mealPlan?.person && `Prepared for ${mealPlan.person.fullName}`}
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="h4">
              Shopping List - {mealPlan?.nameEn} &nbsp;
              <Button
                onClick={() => {
                  window.print();
                }}
              >
                <Print></Print>
              </Button>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" style={{ marginBottom: '1em' }}>
              <div style={{ fontStyle: 'italic' }}>
                <strong>Disclaimer:</strong> 
                The suggested products are intended to be used as reference for informational purposes only. This is not a recommendation of where to buy. Clients need to research and verify which is suitable to their needs independently. Prices are indicative as per the data procured in March 2024. The prices may vary subject to the time of purchase, store, and mode of purchase.
              </div>
            </Typography>
          </Grid>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell style={{ color: "#000" }}>Ingredient</TableCell>
                  <TableCell style={{ color: "#000" }}>Meal - Quantity/Unit</TableCell>
                  <TableCell style={{ color: "#000" }}>Suggested Product</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Array.from(mealsByIngredient.entries()).map(([ingredientName, ingredientDetails]) => (
                  <TableRow key={ingredientName}>
                    <TableCell>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Checkbox />
                        <div>
                          {ingredientName}
                          {ingredientDetails.substituteIngredient !== "" &&
                            <div style={{ fontStyle: 'italic' }}>
                              Substitutes: {ingredientDetails.substituteIngredient}
                            </div>
                          }
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      {ingredientDetails.quantity.map((mealQuantities, index) => (
                        <div key={index}>
                          <li>
                            {ingredientDetails.mealsById[index].name} - {mealQuantities} {ingredientDetails.unit[index]} 
                            {mealCounts.get(ingredientDetails.mealsById[index].id)! > 1 && ` x${mealCounts.get(ingredientDetails.mealsById[index].id)}`}
                          </li>
                        </div>
                      ))}
                    </TableCell>
                    <TableCell>
                      {ingredientDetails.mealsById.map((meal, index) => (
                        meal.matchedProducts.length > 0 ? (
                            ingredientDetails.mealsById.length === 1 ? (
                              meal.matchedProducts.slice(0, 3).map((product, productIndex) => (
                              <li key={productIndex}>
                                {product.productName} - ${product.price}
                              </li>
                            ))
                          ) : (
                            <li key={index}>
                              {meal.matchedProducts[0].productName} - ${meal.matchedProducts[0].price}
                            </li>
                          )
                        ) : null
                      ))}
                      {ingredientDetails.mealsById.every(meal => meal.matchedProducts.length === 0) && 'N/A'}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      )}
    </>
  );
};