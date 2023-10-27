import { PubSub } from "graphql-subscriptions";
import Product from "../shared/models/product.model";
import {
  CreateProductInput,
  UpdateProductInput,
} from "../types/resolvers-types";

const pubsub = new PubSub();

const productResolvers = {
  Query: {
    getProduct: async (_: any, { id }: { id: string }) => {
      // Retrieve Product logic
      const product = await Product.findByPk(id);
      return product;
    },
    getProducts: async () => {
      // Retrieve all Products logic
      const products = await Product.findAll();
      return products;
    },
  },
  Mutation: {
    createProduct: async (_: any, { input }: { input: CreateProductInput }) => {
      // Create Product logic
      const product = await Product.create(input);
      return product;
    },
    updateProduct: async (_: any, { input }: { input: UpdateProductInput }) => {
      // Update Product logic
      const product = await Product.update(input, { where: { id: input.id } });
      return product;
    },
    deleteProduct: async (_: any, { id }: { id: string }) => {
      // Delete Product logic
      await Product.destroy({ where: { id } });
      return true;
    },
  },
  Subscription: {
    productCreated: {
      // Product created subscription logic
      subscribe: () => pubsub.asyncIterator("PRODUCT_CREATED"),
    },
    productUpdated: {
      // Product updated subscription logic
      subscribe: () => pubsub.asyncIterator("PRODUCT_UPDATED"),
    },
    productDeleted: {
      // Product deleted subscription logic
      subscribe: () => pubsub.asyncIterator("PRODUCT_DELETED"),
    },
  },
};

export default productResolvers;
