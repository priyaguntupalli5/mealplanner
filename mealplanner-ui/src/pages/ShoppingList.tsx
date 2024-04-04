import {
  Button,
  Checkbox,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper
} from "@mui/material";
import { graphql } from "babel-plugin-relay/macro";
import { useLazyLoadQuery } from "react-relay";
import { useParams } from "react-router";
import { ShoppingListQuery } from "./__generated__/ShoppingListQuery.graphql";
import { Print } from "@mui/icons-material";
import moment from "moment";

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
                matchedProducts {
                  nodes {
                    id
                    nameEn
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
  //return <div>Under construction 🚧</div>
  const params = useParams();
  // console.log("trying ShoppingList");
  const node = useLazyLoadQuery<ShoppingListQuery>(
    shoppingListQuery, 
    { rowId: params.id },
    { fetchPolicy: "store-or-network" }
  );
  const mealPlan = node.mealPlan;
  
  const mealEntryLookUp: { [key: string]: { count: number; mealPrint: boolean } } = {};
  {mealPlan?.mealPlanEntries.nodes.forEach((mealEntry) => {
    const mealId = mealEntry.meal?.id;
    if (mealId) {
      mealEntryLookUp[mealId] = mealEntryLookUp[mealId] ? 
                                { count: mealEntryLookUp[mealId].count + 1, mealPrint: false } : 
                                { count: 1, mealPrint: false };
    }
  })};
  // let totalPrice = 0;
  // if (mealPlan == null || mealPlan == undefined) {
  //   return <p>Meal plan is not found.</p>;
  // }

  // mealPlan.shoppingList.nodes.forEach((item) => {
  //   totalPrice += Number(item.product?.price);
  // });

  return (
    <>
      <Grid container spacing="5" sx={{ padding: "2rem" }}>
        <Grid xs={12}>
          <Typography variant="caption" sx={{ mr: 5 }}>
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
          <Typography variant="caption">{mealPlan?.descriptionEn}</Typography>
        </Grid>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{ color: "#000" }}>Ingredient</TableCell>
                <TableCell style={{ color: "#000" }}>Associated Meal</TableCell>
                <TableCell style={{ color: "#000" }}>Quantity/Unit</TableCell>
                <TableCell style={{ color: "#000" }}>Suggested Product</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {mealPlan?.mealPlanEntries.nodes.map((mealEntry) => {
                const mealId = mealEntry.meal?.id;
                if(mealId && !mealEntryLookUp[mealId].mealPrint) {
                  mealEntryLookUp[mealId].mealPrint = true;
                return mealEntry.meal?.ingredients.nodes.map((ingredient) => {
                  // const mealsUsingIngredient = mealPlan.mealPlanEntries.nodes.filter(
                  //   (entry) =>
                  //     entry.meal?.ingredients.nodes.some(
                  //       (ing) => ing.id === ingredient.id
                  //     )
                  // );
                  //const mealCount = mealsUsingIngredient.length;
                  return (
                    <TableRow key={ingredient.id}>
                      <TableCell>
                        <Checkbox/>
                        {ingredient.name.toLowerCase() === ingredient.productKeyword.toLowerCase()
                          ? ingredient.name
                          : `${ingredient.name} | ${ingredient.productKeyword}`}
                      </TableCell>
                      <TableCell>
                        {/* {mealsUsingIngredient.map((entry, index) => ( */}
                          <div>
                            {mealEntry.meal?.nameEn}
                            {mealEntryLookUp[mealId].count > 1 && ` x${mealEntryLookUp[mealId].count}`}
                          </div>
                        {/* ))} */}
                      </TableCell>
                      <TableCell>
                        {ingredient.quantity + ' ' + ingredient.unit}
                      </TableCell>
                      <TableCell>
                        {ingredient.matchedProducts.nodes.map((product, index) => (
                          <div key={index}>{product.nameEn}</div>
                        ))}
                      </TableCell>
                    </TableRow>
                  )
                })
                
              }
            
            })}
            </TableBody>
          </Table>
        </TableContainer>

      </Grid>
    </>
  );
};