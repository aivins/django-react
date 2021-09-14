/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type CountriesQueryVariables = {};
export type CountriesQueryResponse = {
    readonly countries: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly name: string;
                readonly code: string;
            } | null;
        } | null>;
    } | null;
};
export type CountriesQuery = {
    readonly response: CountriesQueryResponse;
    readonly variables: CountriesQueryVariables;
};



/*
query CountriesQuery {
  countries {
    edges {
      node {
        id
        name
        code
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "CountryNodeConnection",
    "kind": "LinkedField",
    "name": "countries",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "CountryNodeEdge",
        "kind": "LinkedField",
        "name": "edges",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "CountryNode",
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "name",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "code",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "CountriesQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "CountriesQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "52c780765de61e6d2407355081d66cca",
    "id": null,
    "metadata": {},
    "name": "CountriesQuery",
    "operationKind": "query",
    "text": "query CountriesQuery {\n  countries {\n    edges {\n      node {\n        id\n        name\n        code\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '20b0179cdf12cf89069da8759f346739';
export default node;
