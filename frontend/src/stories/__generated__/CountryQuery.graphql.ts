/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CountryQueryVariables = {};
export type CountryQueryResponse = {
    readonly country: {
        readonly " $fragmentRefs": FragmentRefs<"Country_node">;
    } | null;
};
export type CountryQuery = {
    readonly response: CountryQueryResponse;
    readonly variables: CountryQueryVariables;
};



/*
query CountryQuery {
  country(id: "Q291bnRyeU5vZGU6MQ==") {
    ...Country_node
    id
  }
}

fragment Country_node on CountryNode {
  name
  code
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "Q291bnRyeU5vZGU6MQ=="
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "CountryQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "CountryNode",
        "kind": "LinkedField",
        "name": "country",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Country_node"
          }
        ],
        "storageKey": "country(id:\"Q291bnRyeU5vZGU6MQ==\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "CountryQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "CountryNode",
        "kind": "LinkedField",
        "name": "country",
        "plural": false,
        "selections": [
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
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": "country(id:\"Q291bnRyeU5vZGU6MQ==\")"
      }
    ]
  },
  "params": {
    "cacheID": "aea7d6bb1111615551b4c7dbc085237a",
    "id": null,
    "metadata": {},
    "name": "CountryQuery",
    "operationKind": "query",
    "text": "query CountryQuery {\n  country(id: \"Q291bnRyeU5vZGU6MQ==\") {\n    ...Country_node\n    id\n  }\n}\n\nfragment Country_node on CountryNode {\n  name\n  code\n}\n"
  }
};
})();
(node as any).hash = 'bad154e148bfe59dfb080ce68b0e5161';
export default node;
