import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { loadSchemaSync } from "@graphql-tools/load";
import { addResolversToSchema } from "@graphql-tools/schema";
import { merge } from "lodash";
import path from "path";

import orderResolvers from "./order";
import productResolvers from "./product";

const allSchemaPath = path.join(__dirname, "../schema/**/*.graphql");

const allSchema = loadSchemaSync(allSchemaPath, {
  loaders: [new GraphQLFileLoader()],
});

const gatewaySchema = addResolversToSchema({
  schema: allSchema,
  resolvers: merge(productResolvers, orderResolvers),
});

export default gatewaySchema;
