/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
}

export interface IAuthPayload {
  token: Scalars["String"]["output"];
  user: IUser;
}

export interface ICreateOrderInput {
  productId: Scalars["ID"]["input"];
  quantity: Scalars["Int"]["input"];
  totalPrice: Scalars["Float"]["input"];
  userId: Scalars["ID"]["input"];
}

export interface ICreateProductInput {
  name: Scalars["String"]["input"];
  price: Scalars["Float"]["input"];
  quantity: Scalars["Int"]["input"];
  userId: Scalars["ID"]["input"];
}

export interface ICreateUserInput {
  email: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
}

export interface ILoginInput {
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
}

export interface IMutation {
  createOrder?: IOrder;
  createProduct?: IProduct;
  createUser?: IUser;
  deleteOrder?: Scalars["Boolean"]["output"];
  deleteProduct?: Scalars["Boolean"]["output"];
  deleteUser?: Scalars["Boolean"]["output"];
  login?: IAuthPayload;
  signup?: IAuthPayload;
  updateOrder?: IOrder;
  updateProduct?: IProduct;
  updateUser?: IUser;
}

export interface IMutationcreateOrderArgs {
  input: ICreateOrderInput;
}

export interface IMutationcreateProductArgs {
  input: ICreateProductInput;
}

export interface IMutationcreateUserArgs {
  input: ICreateUserInput;
}

export interface IMutationdeleteOrderArgs {
  id: Scalars["ID"]["input"];
}

export interface IMutationdeleteProductArgs {
  id: Scalars["ID"]["input"];
}

export interface IMutationdeleteUserArgs {
  id: Scalars["ID"]["input"];
}

export interface IMutationloginArgs {
  input: ILoginInput;
}

export interface IMutationsignupArgs {
  input: ICreateUserInput;
}

export interface IMutationupdateOrderArgs {
  input: IUpdateOrderInput;
}

export interface IMutationupdateProductArgs {
  input: IUpdateProductInput;
}

export interface IMutationupdateUserArgs {
  input: IUpdateUserInput;
}

export interface INotification {
  id: Scalars["ID"]["output"];
  isRead: Scalars["Boolean"]["output"];
  message: Scalars["String"]["output"];
  user: IUser;
}

export interface IOrder {
  id: Scalars["ID"]["output"];
  product: IProduct;
  quantity: Scalars["Int"]["output"];
  user: IUser;
}

export interface IPayment {
  amount: Scalars["Float"]["output"];
  id: Scalars["ID"]["output"];
  status: Scalars["String"]["output"];
  user: IUser;
}

export interface IProduct {
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  orders: Array<IOrder>;
  price: Scalars["Float"]["output"];
  user: IUser;
}

export interface IQuery {
  getOrder?: IOrder;
  getOrders: Array<IOrder>;
  getProduct?: IProduct;
  getProducts: Array<IProduct>;
  getUser?: IUser;
  getUsers: Array<IUser>;
  me?: IUser;
}

export interface IQuerygetOrderArgs {
  id: Scalars["ID"]["input"];
}

export interface IQuerygetProductArgs {
  id: Scalars["ID"]["input"];
}

export interface IQuerygetUserArgs {
  id: Scalars["ID"]["input"];
}

export interface ISubscription {
  orderCreated?: IOrder;
  orderDeleted?: Scalars["ID"]["output"];
  orderUpdated?: IOrder;
  productCreated?: IProduct;
  productDeleted?: Scalars["ID"]["output"];
  productUpdated?: IProduct;
  userCreated?: IUser;
  userDeleted?: Scalars["ID"]["output"];
  userUpdated?: IUser;
}

export interface IUpdateOrderInput {
  id: Scalars["ID"]["input"];
  quantity?: Scalars["Int"]["input"];
}

export interface IUpdateProductInput {
  id: Scalars["ID"]["input"];
  name?: Scalars["String"]["input"];
  price?: Scalars["Float"]["input"];
}

export interface IUpdateUserInput {
  email?: Scalars["String"]["input"];
  id: Scalars["ID"]["input"];
  name?: Scalars["String"]["input"];
}

export interface IUser {
  age?: Scalars["Int"]["output"];
  email: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  notifications: Array<INotification>;
  orders: Array<IOrder>;
  payments: Array<IPayment>;
  products: Array<IProduct>;
}
