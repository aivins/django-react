/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Sports_edges = {
    readonly edges: ReadonlyArray<{
        readonly node: {
            readonly id: string;
            readonly name: string;
        } | null;
    } | null>;
    readonly " $refType": "Sports_edges";
};
export type Sports_edges$data = Sports_edges;
export type Sports_edges$key = {
    readonly " $data"?: Sports_edges$data;
    readonly " $fragmentRefs": FragmentRefs<"Sports_edges">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Sports_edges",
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
  "type": "SportNodeConnection",
  "abstractKey": null
};
(node as any).hash = '8b9e3e456e5f6e2ce05ec73c7b1a1971';
export default node;
