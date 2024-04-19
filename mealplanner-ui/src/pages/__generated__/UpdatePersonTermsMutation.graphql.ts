/**
 * @generated SignedSource<<cb537bc2c2d9604a70f1ba3eac1f9ec2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type UpdatePersonTermsMutation$variables = {
  personTerms: boolean;
};
export type UpdatePersonTermsMutation$data = {
  readonly updatePersonTerms: {
    readonly preflight: boolean;
  } | null;
};
export type UpdatePersonTermsMutation = {
  variables: UpdatePersonTermsMutation$variables;
  response: UpdatePersonTermsMutation$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "personTerms"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "personTerms",
            "variableName": "personTerms"
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "UpdatePersonTermsPayload",
    "kind": "LinkedField",
    "name": "updatePersonTerms",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "preflight",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UpdatePersonTermsMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdatePersonTermsMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "7fbb056155bdd449258ed59e9f4f5c5c",
    "id": null,
    "metadata": {},
    "name": "UpdatePersonTermsMutation",
    "operationKind": "mutation",
    "text": "mutation UpdatePersonTermsMutation(\n  $personTerms: Boolean!\n) {\n  updatePersonTerms(input: {personTerms: $personTerms}) {\n    preflight\n  }\n}\n"
  }
};
})();

(node as any).hash = "0d7fbe3ee7ba18e4920c6e1f5b1994f7";

export default node;
