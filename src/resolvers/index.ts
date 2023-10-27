import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { loadSchemaSync } from "@graphql-tools/load";
import {
  addResolversToSchema,
  makeExecutableSchema,
  mergeSchemas,
} from "@graphql-tools/schema";
import { merge } from "lodash";
import path from "path";

import orderResolvers from "./order";
import productResolvers from "./product";
import { GraphQLScalarType, Kind } from "graphql";

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

const baseSchema = `#graphql
    scalar Date

    type Query {
        _ : Boolean
    }

    type Mutation {
        _ : Boolean
    }

    type Subscription {
        _ : Boolean
    }

`;

const allSchemaPath = path.join(__dirname, "../schema/**/*.graphql");

const allSchema = loadSchemaSync(allSchemaPath, {
  loaders: [new GraphQLFileLoader()],
});

const baseScheme = makeExecutableSchema({
  typeDefs: baseSchema,
  resolvers: merge(dateScalar),
});

const gatewaySchema = mergeSchemas({
  // typeDefs: baseSchema,
  schemas: [allSchema, baseScheme],
  resolvers: merge(productResolvers, orderResolvers),
});

// const gatewaySchema = addResolversToSchema({
//   schema: allSchema,
//   resolvers: merge(productResolvers, orderResolvers),
// });

export default gatewaySchema;
