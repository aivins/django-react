/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Countries_edges = {
    readonly edges: ReadonlyArray<{
        readonly node: {
            readonly id: string;
            readonly name: string;
            readonly code: string;
        } | null;
    } | null>;
    readonly " $refType": "Countries_edges";
};
export type Countries_edges$data = Countries_edges;
export type Countries_edges$key = {
    readonly " $data"?: Countries_edges$data;
    readonly " $fragmentRefs": FragmentRefs<"Countries_edges">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Countries_edges",
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
  "type": "CountryNodeConnection",
  "abstractKey": null
};
(node as any).hash = '621d89796138c74fba5a680407bca49d';
export default node;
