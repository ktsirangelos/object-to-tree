import fs from "fs";
import { objectToTree } from "./objectToTree.mjs";

const exampleObject = {
  a: {
    b: {
      c: null,
      d: {
        e: null,
      },
    },
    f: null,
  },
};

const exampleTree = objectToTree(exampleObject);
fs.writeFileSync("exampleTree.txt", exampleTree);
