/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CountriesQueryVariables = {};
export type CountriesQueryResponse = {
    readonly countries: {
        readonly " $fragmentRefs": FragmentRefs<"Countries_edges">;
    } | null;
};
export type CountriesQuery = {
    readonly response: CountriesQueryResponse;
    readonly variables: CountriesQueryVariables;
};



/*
query CountriesQuery {
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
    }
  }
}
*/

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "CountriesQuery",
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
    "name": "CountriesQuery",
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
    "cacheID": "3e910a5233e2bb133971cbcd7f08a005",
    "id": null,
    "metadata": {},
    "name": "CountriesQuery",
    "operationKind": "query",
    "text": "query CountriesQuery {\n  countries {\n    ...Countries_edges\n  }\n}\n\nfragment Countries_edges on CountryNodeConnection {\n  edges {\n    node {\n      id\n      name\n      code\n    }\n  }\n}\n"
  }
};
(node as any).hash = '8d87bcc372db9d2cca43462969fec1b8';
export default node;
