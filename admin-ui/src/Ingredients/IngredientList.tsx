import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import {
    Datagrid,
    List,
    NumberField,
    ReferenceField,
    TextField,
    useDataProvider,
    useRecordContext,
} from "react-admin";
import { Link, useParams } from "react-router-dom";

export const IngredientList = () => {
  const { id } = useParams();
  const [mealName, setMealName] = useState(null);
  const dataProvider = useDataProvider();

  useEffect(() => {
    const fetchMealName = async () => {
      try {
        const { data } = await dataProvider.getOne('meals', { id: id });
        setMealName(data.nameEn);
      } catch (error) {
        console.error('Error fetching meal name:', error);
      }
    };

    if (id) {
      fetchMealName();
    }
  }, [dataProvider, id]);

  return (
    <>
      {id && <CreateIngredientButton id={id} />}
      <List resource="ingredients" filter={{ mealId: id }} title={`Ingredients of ${mealName}`}>
        <Datagrid>
          <NumberField source="code" label="Ingredient code" />
          <TextField source="name" label="Ingredient name" />
          <TextField label="Quantity" source="quantity" />
          <TextField label="Unit" source="unit" />
          <TextField label="Product keyword" source="productKeyword" />
          <ReferenceField
            source="substituteIngredientId"
            label="Primary ingredient"
            reference="ingredients"
          >
            <TextField source="name" />
          </ReferenceField>
          <TextField label="Substitute reason" source="substituteReason" />
          <EditIngredientButton />
          <MatchIngredientButton />
        </Datagrid>
      </List>
    </>
  );
};

const CreateIngredientButton = ({ id }: { id: string }) => {
  return (
    <Button component={Link} to={`/meals/${id}/ingredients/create`}>
      Create
    </Button>
  );
};

const EditIngredientButton = () => {
  const ingredient = useRecordContext();
  return (
    <Button
      component={Link}
      to={`/meals/${ingredient.mealId}/ingredients/${ingredient.id}`}
    >
      Edit
    </Button>
  );
};

const MatchIngredientButton = () => {
  const ingredient = useRecordContext();
  return (
    <Button
      component={Link}
      to={`/meals/${ingredient.mealId}/ingredients/${ingredient.id}/match`}
    >
      Match
    </Button>
  );
}