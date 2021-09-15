/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Country_node = {
    readonly name: string;
    readonly code: string;
    readonly " $refType": "Country_node";
};
export type Country_node$data = Country_node;
export type Country_node$key = {
    readonly " $data"?: Country_node$data;
    readonly " $fragmentRefs": FragmentRefs<"Country_node">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Country_node",
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
    }
  ],
  "type": "CountryNode",
  "abstractKey": null
};
(node as any).hash = '8cfbb7cc726931ede109a73a0acb6a2d';
export default node;
