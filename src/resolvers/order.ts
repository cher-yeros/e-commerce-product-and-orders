import { PubSub } from "graphql-subscriptions";
import { CreateOrderInput, UpdateOrderInput } from "../types/resolvers-types";
import Order from "../shared/models/order.model";
const pubsub = new PubSub();

const orderResolvers = {
  Query: {
    getOrder: async (_: any, { id }: { id: string }) => {
      // Retrieve Order logic
      const order = await Order.findByPk(id);
      return order;
    },
    getOrders: async () => {
      // Retrieve all Orders logic
      const orders = await Order.findAll();
      return orders;
    },
  },
  Mutation: {
    createOrder: async (_: any, { input }: { input: CreateOrderInput }) => {
      // Create Order logic

      console.log({ input });
      const order = await Order.create(input);
      return order;
    },
    updateOrder: async (_: any, { input }: { input: UpdateOrderInput }) => {
      // Update Order logic
      const order = await Order.update(input, { where: { id: input.id } });
      return order;
    },
    deleteOrder: async (_: any, { id }: { id: string }) => {
      // Delete Order logic
      await Order.destroy({ where: { id } });
      return true;
    },
  },
  Subscription: {
    orderCreated: {
      // Order created subscription logic
      subscribe: () => pubsub.asyncIterator("ORDER_CREATED"),
    },
    orderUpdated: {
      // Order updated subscription logic
      subscribe: () => pubsub.asyncIterator("ORDER_UPDATED"),
    },
    orderDeleted: {
      // Order deleted subscription logic
      subscribe: () => pubsub.asyncIterator("ORDER_DELETED"),
    },
  },
};

export default orderResolvers;
