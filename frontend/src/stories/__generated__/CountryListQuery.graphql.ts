/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CountryListQueryVariables = {};
export type CountryListQueryResponse = {
    readonly countries: {
        readonly " $fragmentRefs": FragmentRefs<"Countries_edges">;
    } | null;
};
export type CountryListQuery = {
    readonly response: CountryListQueryResponse;
    readonly variables: CountryListQueryVariables;
};



/*
query CountryListQuery {
  countries {
    ...Countries_edges
  }
}

fragment Countries_edges on CountryNodeConnection {
  edges {
    node {
      id
      name
      code
      ...Country_node
    }
  }
}

fragment Country_node on CountryNode {
  name
  code
}
*/

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "CountryListQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "CountryNodeConnection",
        "kind": "LinkedField",
        "name": "countries",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Countries_edges"
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
    "name": "CountryListQuery",
    "selections": [
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
    ]
  },
  "params": {
    "cacheID": "dce042971b072769863b99259955cf61",
    "id": null,
    "metadata": {},
    "name": "CountryListQuery",
    "operationKind": "query",
    "text": "query CountryListQuery {\n  countries {\n    ...Countries_edges\n  }\n}\n\nfragment Countries_edges on CountryNodeConnection {\n  edges {\n    node {\n      id\n      name\n      code\n      ...Country_node\n    }\n  }\n}\n\nfragment Country_node on CountryNode {\n  name\n  code\n}\n"
  }
};
(node as any).hash = 'bcd0c8a2d722443a8f1a1c6e771cd452';
export default node;
