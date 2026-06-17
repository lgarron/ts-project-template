import { barelyServe } from "barely-a-dev-server";

export const entryRoot = "./src/";

// biome-ignore lint/suspicious/noExplicitAny: We don't have `bun` types here.
if ((import.meta as any).main) {
  await barelyServe({
    entryRoot,
    dev: false,
    outDir: "./dist",
  });
}
