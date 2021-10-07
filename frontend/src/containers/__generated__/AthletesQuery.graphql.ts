/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type AthletesQueryVariables = {};
export type AthletesQueryResponse = {
    readonly athletes: {
        readonly " $fragmentRefs": FragmentRefs<"Athletes_edges">;
    } | null;
};
export type AthletesQuery = {
    readonly response: AthletesQueryResponse;
    readonly variables: AthletesQueryVariables;
};



/*
query AthletesQuery {
  athletes {
    ...Athletes_edges
  }
}

fragment Athletes_edges on AthleteNodeConnection {
  edges {
    node {
      id
      name
      gender
      country {
        name
        code
        id
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AthletesQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "AthleteNodeConnection",
        "kind": "LinkedField",
        "name": "athletes",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Athletes_edges"
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
    "name": "AthletesQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "AthleteNodeConnection",
        "kind": "LinkedField",
        "name": "athletes",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "AthleteNodeEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "AthleteNode",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v0/*: any*/),
                  (v1/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "gender",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "CountryNode",
                    "kind": "LinkedField",
                    "name": "country",
                    "plural": false,
                    "selections": [
                      (v1/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "code",
                        "storageKey": null
                      },
                      (v0/*: any*/)
                    ],
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
    "cacheID": "780ee8d807446e0df2212e52e4c5fa03",
    "id": null,
    "metadata": {},
    "name": "AthletesQuery",
    "operationKind": "query",
    "text": "query AthletesQuery {\n  athletes {\n    ...Athletes_edges\n  }\n}\n\nfragment Athletes_edges on AthleteNodeConnection {\n  edges {\n    node {\n      id\n      name\n      gender\n      country {\n        name\n        code\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'd19dea5332ac59e119adb04d84b8fafa';
export default node;
