/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type MedalMedal = "BRONZE" | "GOLD" | "SILVER" | "%future added value";
export type Medals_edges = {
    readonly edges: ReadonlyArray<{
        readonly node: {
            readonly id: string;
            readonly medal: MedalMedal;
        } | null;
    } | null>;
    readonly " $refType": "Medals_edges";
};
export type Medals_edges$data = Medals_edges;
export type Medals_edges$key = {
    readonly " $data"?: Medals_edges$data;
    readonly " $fragmentRefs": FragmentRefs<"Medals_edges">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Medals_edges",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "MedalNodeEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "MedalNode",
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
              "name": "medal",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "MedalNodeConnection",
  "abstractKey": null
};
(node as any).hash = 'ce7c0b608b3e4afd0c8878715fba4b42';
export default node;
