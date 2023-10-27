import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { loadSchemaSync } from "@graphql-tools/load";
import { addResolversToSchema, mergeSchemas } from "@graphql-tools/schema";
import { merge } from "lodash";
import path from "path";

import { GraphQLScalarType, Kind } from "graphql";
import orderResolvers from "./order";
import productResolvers from "./product";

const dateScalar = {
  Date: new GraphQLScalarType({
    name: "Date",
    description: "Date custom scalar type",
    serialize(value) {
      if (value instanceof Date) {
        return value.getTime();
      }
      throw Error("GraphQL Date Scalar serializer expected a `Date` object");
    },
    parseValue(value) {
      if (typeof value === "number") {
        return new Date(value);
      }
      throw new Error("GraphQL Date Scalar parser expected a `number`");
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return new Date(parseInt(ast.value, 10));
      }
      return null;
    },
  }),
};

const allOperationPath = path.join(__dirname, "../operations/**/*.graphql");
const allSchemaPath = path.join(__dirname, "../schema/**/*.graphql");

const allOperation = loadSchemaSync(allOperationPath, {
  loaders: [new GraphQLFileLoader()],
});

const allSchema = loadSchemaSync(allSchemaPath, {
  loaders: [new GraphQLFileLoader()],
});

const mergedSchema = mergeSchemas({
  schemas: [allOperation],
});

const gatewaySchema = addResolversToSchema({
  schema: mergedSchema,
  resolvers: merge(dateScalar, productResolvers, orderResolvers),
});

export default gatewaySchema;
