/**
 * @generated SignedSource<<d484e30961a0ec060f8b9cb5d4363220>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type CategoryT = "BREAKFAST" | "LUNCH" | "DINNER" | "SNACK" | "%future added value";
export type MealQuery$variables = {
  mealId: any;
};
export type MealQuery$data = {
  readonly meal: {
    readonly rowId: any;
    readonly code: any | null;
    readonly nameEn: string;
    readonly nameFr: string | null;
    readonly tags: ReadonlyArray<string | null> | null;
    readonly descriptionEn: string | null;
    readonly descriptionFr: string | null;
    readonly categories: ReadonlyArray<CategoryT | null> | null;
    readonly photoUrl: string | null;
    readonly videoUrl: string | null;
    readonly method: string | null;
    readonly totalCost: any | null;
    readonly servingCost: any | null;
    readonly tips: string | null;
    readonly servingsSize: any | null;
    readonly servingsSizeUnit: string | null;
    readonly prepTime: any | null;
    readonly cookTime: any | null;
    readonly portions: any | null;
    readonly nutritionRating: number | null;
    readonly nutrition: {
      readonly calcium: any | null;
      readonly calories: any | null;
      readonly carbohydrate: any | null;
      readonly carbohydratePercent: any | null;
      readonly carbohydrateUnit: string | null;
      readonly cholesterol: any | null;
      readonly cholesterolPercent: any | null;
      readonly cholesterolUnit: string | null;
      readonly dietaryFiber: any | null;
      readonly dietaryFiberPercent: any | null;
      readonly dietaryFiberUnit: string | null;
      readonly iron: any | null;
      readonly nutritionableId: any;
      readonly nutritionableType: string;
      readonly potassium: any | null;
      readonly protein: any | null;
      readonly proteinPercent: any | null;
      readonly proteinUnit: string | null;
      readonly saturatedFat: any | null;
      readonly saturatedFatPercent: any | null;
      readonly saturatedFatUnit: string | null;
      readonly servingSize: any | null;
      readonly servingSizeText: string | null;
      readonly servingSizeUnit: string | null;
      readonly servingsPerContainer: any | null;
      readonly sodium: any | null;
      readonly sodiumPercent: any | null;
      readonly sodiumUnit: string | null;
      readonly totalFatPercent: any | null;
      readonly totalFat: any | null;
      readonly totalFatUnit: string | null;
      readonly totalSugar: any | null;
      readonly totalSugarPercent: any | null;
      readonly totalSugarUnit: string | null;
      readonly transFat: any | null;
      readonly transFatPercent: any | null;
      readonly transFatUnit: string | null;
      readonly vitA: any | null;
      readonly vitB12: any | null;
      readonly vitB6: any | null;
      readonly vitC: any | null;
      readonly vitD: any | null;
      readonly vitE: any | null;
      readonly vitK: any | null;
    } | null;
  } | null;
};
export type MealQuery = {
  variables: MealQuery$variables;
  response: MealQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "mealId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "rowId",
    "variableName": "mealId"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "rowId",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "code",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "nameEn",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "nameFr",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "tags",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "descriptionEn",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "descriptionFr",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "categories",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "photoUrl",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "videoUrl",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "method",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalCost",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "servingCost",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "tips",
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "servingsSize",
  "storageKey": null
},
v17 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "servingsSizeUnit",
  "storageKey": null
},
v18 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "prepTime",
  "storageKey": null
},
v19 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cookTime",
  "storageKey": null
},
v20 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "portions",
  "storageKey": null
},
v21 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "nutritionRating",
  "storageKey": null
},
v22 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "calcium",
  "storageKey": null
},
v23 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "calories",
  "storageKey": null
},
v24 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "carbohydrate",
  "storageKey": null
},
v25 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "carbohydratePercent",
  "storageKey": null
},
v26 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "carbohydrateUnit",
  "storageKey": null
},
v27 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cholesterol",
  "storageKey": null
},
v28 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cholesterolPercent",
  "storageKey": null
},
v29 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cholesterolUnit",
  "storageKey": null
},
v30 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "dietaryFiber",
  "storageKey": null
},
v31 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "dietaryFiberPercent",
  "storageKey": null
},
v32 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "dietaryFiberUnit",
  "storageKey": null
},
v33 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "iron",
  "storageKey": null
},
v34 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "nutritionableId",
  "storageKey": null
},
v35 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "nutritionableType",
  "storageKey": null
},
v36 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "potassium",
  "storageKey": null
},
v37 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "protein",
  "storageKey": null
},
v38 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "proteinPercent",
  "storageKey": null
},
v39 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "proteinUnit",
  "storageKey": null
},
v40 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "saturatedFat",
  "storageKey": null
},
v41 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "saturatedFatPercent",
  "storageKey": null
},
v42 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "saturatedFatUnit",
  "storageKey": null
},
v43 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "servingSize",
  "storageKey": null
},
v44 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "servingSizeText",
  "storageKey": null
},
v45 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "servingSizeUnit",
  "storageKey": null
},
v46 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "servingsPerContainer",
  "storageKey": null
},
v47 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "sodium",
  "storageKey": null
},
v48 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "sodiumPercent",
  "storageKey": null
},
v49 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "sodiumUnit",
  "storageKey": null
},
v50 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalFatPercent",
  "storageKey": null
},
v51 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalFat",
  "storageKey": null
},
v52 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalFatUnit",
  "storageKey": null
},
v53 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalSugar",
  "storageKey": null
},
v54 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalSugarPercent",
  "storageKey": null
},
v55 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalSugarUnit",
  "storageKey": null
},
v56 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "transFat",
  "storageKey": null
},
v57 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "transFatPercent",
  "storageKey": null
},
v58 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "transFatUnit",
  "storageKey": null
},
v59 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "vitA",
  "storageKey": null
},
v60 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "vitB12",
  "storageKey": null
},
v61 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "vitB6",
  "storageKey": null
},
v62 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "vitC",
  "storageKey": null
},
v63 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "vitD",
  "storageKey": null
},
v64 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "vitE",
  "storageKey": null
},
v65 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "vitK",
  "storageKey": null
},
v66 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "MealQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Meal",
        "kind": "LinkedField",
        "name": "meal",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
          (v9/*: any*/),
          (v10/*: any*/),
          (v11/*: any*/),
          (v12/*: any*/),
          (v13/*: any*/),
          (v14/*: any*/),
          (v15/*: any*/),
          (v16/*: any*/),
          (v17/*: any*/),
          (v18/*: any*/),
          (v19/*: any*/),
          (v20/*: any*/),
          (v21/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Nutrition",
            "kind": "LinkedField",
            "name": "nutrition",
            "plural": false,
            "selections": [
              (v22/*: any*/),
              (v23/*: any*/),
              (v24/*: any*/),
              (v25/*: any*/),
              (v26/*: any*/),
              (v27/*: any*/),
              (v28/*: any*/),
              (v29/*: any*/),
              (v30/*: any*/),
              (v31/*: any*/),
              (v32/*: any*/),
              (v33/*: any*/),
              (v34/*: any*/),
              (v35/*: any*/),
              (v36/*: any*/),
              (v37/*: any*/),
              (v38/*: any*/),
              (v39/*: any*/),
              (v40/*: any*/),
              (v41/*: any*/),
              (v42/*: any*/),
              (v43/*: any*/),
              (v44/*: any*/),
              (v45/*: any*/),
              (v46/*: any*/),
              (v47/*: any*/),
              (v48/*: any*/),
              (v49/*: any*/),
              (v50/*: any*/),
              (v51/*: any*/),
              (v52/*: any*/),
              (v53/*: any*/),
              (v54/*: any*/),
              (v55/*: any*/),
              (v56/*: any*/),
              (v57/*: any*/),
              (v58/*: any*/),
              (v59/*: any*/),
              (v60/*: any*/),
              (v61/*: any*/),
              (v62/*: any*/),
              (v63/*: any*/),
              (v64/*: any*/),
              (v65/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "MealQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Meal",
        "kind": "LinkedField",
        "name": "meal",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
          (v9/*: any*/),
          (v10/*: any*/),
          (v11/*: any*/),
          (v12/*: any*/),
          (v13/*: any*/),
          (v14/*: any*/),
          (v15/*: any*/),
          (v16/*: any*/),
          (v17/*: any*/),
          (v18/*: any*/),
          (v19/*: any*/),
          (v20/*: any*/),
          (v21/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Nutrition",
            "kind": "LinkedField",
            "name": "nutrition",
            "plural": false,
            "selections": [
              (v22/*: any*/),
              (v23/*: any*/),
              (v24/*: any*/),
              (v25/*: any*/),
              (v26/*: any*/),
              (v27/*: any*/),
              (v28/*: any*/),
              (v29/*: any*/),
              (v30/*: any*/),
              (v31/*: any*/),
              (v32/*: any*/),
              (v33/*: any*/),
              (v34/*: any*/),
              (v35/*: any*/),
              (v36/*: any*/),
              (v37/*: any*/),
              (v38/*: any*/),
              (v39/*: any*/),
              (v40/*: any*/),
              (v41/*: any*/),
              (v42/*: any*/),
              (v43/*: any*/),
              (v44/*: any*/),
              (v45/*: any*/),
              (v46/*: any*/),
              (v47/*: any*/),
              (v48/*: any*/),
              (v49/*: any*/),
              (v50/*: any*/),
              (v51/*: any*/),
              (v52/*: any*/),
              (v53/*: any*/),
              (v54/*: any*/),
              (v55/*: any*/),
              (v56/*: any*/),
              (v57/*: any*/),
              (v58/*: any*/),
              (v59/*: any*/),
              (v60/*: any*/),
              (v61/*: any*/),
              (v62/*: any*/),
              (v63/*: any*/),
              (v64/*: any*/),
              (v65/*: any*/),
              (v66/*: any*/)
            ],
            "storageKey": null
          },
          (v66/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "607c7ec811c977c2c9114035766a23f1",
    "id": null,
    "metadata": {},
    "name": "MealQuery",
    "operationKind": "query",
    "text": "query MealQuery(\n  $mealId: BigInt!\n) {\n  meal(rowId: $mealId) {\n    rowId\n    code\n    nameEn\n    nameFr\n    tags\n    descriptionEn\n    descriptionFr\n    categories\n    photoUrl\n    videoUrl\n    method\n    totalCost\n    servingCost\n    tips\n    servingsSize\n    servingsSizeUnit\n    prepTime\n    cookTime\n    portions\n    nutritionRating\n    nutrition {\n      calcium\n      calories\n      carbohydrate\n      carbohydratePercent\n      carbohydrateUnit\n      cholesterol\n      cholesterolPercent\n      cholesterolUnit\n      dietaryFiber\n      dietaryFiberPercent\n      dietaryFiberUnit\n      iron\n      nutritionableId\n      nutritionableType\n      potassium\n      protein\n      proteinPercent\n      proteinUnit\n      saturatedFat\n      saturatedFatPercent\n      saturatedFatUnit\n      servingSize\n      servingSizeText\n      servingSizeUnit\n      servingsPerContainer\n      sodium\n      sodiumPercent\n      sodiumUnit\n      totalFatPercent\n      totalFat\n      totalFatUnit\n      totalSugar\n      totalSugarPercent\n      totalSugarUnit\n      transFat\n      transFatPercent\n      transFatUnit\n      vitA\n      vitB12\n      vitB6\n      vitC\n      vitD\n      vitE\n      vitK\n      id\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "13a8fcd23e9e92271bb45141568e3c5e";

export default node;
