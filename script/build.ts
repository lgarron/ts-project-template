import { barelyServe } from "barely-a-dev-server";
import { barelyServeCommonConfig } from "./barelyServeCommonConfig";

barelyServe({ ...barelyServeCommonConfig, dev: false, outDir: "./dist" });
