/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type AthleteGender = "M" | "W" | "%future added value";
export type Athletes_edges = {
    readonly edges: ReadonlyArray<{
        readonly node: {
            readonly id: string;
            readonly name: string;
            readonly gender: AthleteGender;
            readonly country: {
                readonly name: string;
                readonly code: string;
            };
        } | null;
    } | null>;
    readonly " $refType": "Athletes_edges";
};
export type Athletes_edges$data = Athletes_edges;
export type Athletes_edges$key = {
    readonly " $data"?: Athletes_edges$data;
    readonly " $fragmentRefs": FragmentRefs<"Athletes_edges">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Athletes_edges",
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
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "id",
              "storageKey": null
            },
            (v0/*: any*/),
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
                (v0/*: any*/),
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
  ],
  "type": "AthleteNodeConnection",
  "abstractKey": null
};
})();
(node as any).hash = '3702cb8ddbf9cbbf7ac71849fc6411b0';
export default node;
