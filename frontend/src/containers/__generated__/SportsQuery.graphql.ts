/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type SportsQueryVariables = {};
export type SportsQueryResponse = {
    readonly sports: {
        readonly " $fragmentRefs": FragmentRefs<"Sports_edges">;
    } | null;
};
export type SportsQuery = {
    readonly response: SportsQueryResponse;
    readonly variables: SportsQueryVariables;
};



/*
query SportsQuery {
  sports {
    ...Sports_edges
  }
}

fragment Sports_edges on SportNodeConnection {
  edges {
    node {
      id
      name
    }
  }
}
*/

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "SportsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "SportNodeConnection",
        "kind": "LinkedField",
        "name": "sports",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Sports_edges"
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
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "SportsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "SportNodeConnection",
        "kind": "LinkedField",
        "name": "sports",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "SportNodeEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "SportNode",
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
    ]
  },
  "params": {
    "cacheID": "cb9d9dcf1141f5a330b7a0ffb04e15f0",
    "id": null,
    "metadata": {},
    "name": "SportsQuery",
    "operationKind": "query",
    "text": "query SportsQuery {\n  sports {\n    ...Sports_edges\n  }\n}\n\nfragment Sports_edges on SportNodeConnection {\n  edges {\n    node {\n      id\n      name\n    }\n  }\n}\n"
  }
};
(node as any).hash = '8bedabec75d956c819f1f3aa1a9b3009';
export default node;
