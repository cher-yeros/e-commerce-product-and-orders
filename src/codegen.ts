import { TypeScriptPluginConfig } from "@graphql-codegen/typescript";
import { TypeScriptResolversPluginConfig } from "@graphql-codegen/typescript-resolvers";

const config: {
  schema: string[];
  generates: {
    [outputFile: string]: {
      plugins: (
        | string
        | TypeScriptPluginConfig
        | TypeScriptResolversPluginConfig
      )[];
      config?: TypeScriptPluginConfig & TypeScriptResolversPluginConfig;
    };
  };
} = {
  schema: ["schema/**/*.graphql"],
  generates: {
    "types/resolvers-types.ts": {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        // onlyTypes: true,
        useIndexSignature: true,
        skipTypename: true,
        // onlyIncludeTypes: [
        //   "User",
        //   "Payment",
        //   "UpdateUserInput",
        //   "UpdateProductInput",
        // ],
      },
    },
  },
};

export default config;
