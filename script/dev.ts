import { barelyServe } from "barely-a-dev-server";
import { entryRoot } from "./build";

barelyServe({
  entryRoot,
  outDir: "./.temp/dev",
});
