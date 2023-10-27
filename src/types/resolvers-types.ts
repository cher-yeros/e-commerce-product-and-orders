
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: Date; output: Date; }
};

export type AuthPayload = {
  token: Scalars['String']['output'];
  user: User;
};

export type CreateOrderInput = {
  productId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
  totalPrice: Scalars['Float']['input'];
  userId: Scalars['ID']['input'];
};

export type CreateProductInput = {
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  quantity: Scalars['Int']['input'];
  userId: Scalars['ID']['input'];
};

export type CreateUserInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Mutation = {
  createOrder?: Order;
  createProduct?: Product;
  createUser?: User;
  deleteOrder?: Scalars['Boolean']['output'];
  deleteProduct?: Scalars['Boolean']['output'];
  deleteUser?: Scalars['Boolean']['output'];
  login?: AuthPayload;
  signup?: AuthPayload;
  updateOrder?: Order;
  updateProduct?: Product;
  updateUser?: User;
};


export type MutationcreateOrderArgs = {
  input: CreateOrderInput;
};


export type MutationcreateProductArgs = {
  input: CreateProductInput;
};


export type MutationcreateUserArgs = {
  input: CreateUserInput;
};


export type MutationdeleteOrderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationdeleteProductArgs = {
  id: Scalars['ID']['input'];
};


export type MutationdeleteUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationloginArgs = {
  input: LoginInput;
};


export type MutationsignupArgs = {
  input: CreateUserInput;
};


export type MutationupdateOrderArgs = {
  input: UpdateOrderInput;
};


export type MutationupdateProductArgs = {
  input: UpdateProductInput;
};


export type MutationupdateUserArgs = {
  input: UpdateUserInput;
};

export type Notification = {
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  isRead: Scalars['Boolean']['output'];
  message: Scalars['String']['output'];
  order: Order;
  updatedAt: Scalars['Date']['output'];
  user: User;
};

export type Order = {
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  products: Array<Product>;
  quantity: Scalars['Int']['output'];
  totalPrice: Scalars['Float']['output'];
  updatedAt: Scalars['Date']['output'];
  user: User;
};

export type Payment = {
  amount: Scalars['Float']['output'];
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  status: Scalars['String']['output'];
  updatedAt: Scalars['Date']['output'];
};

export type Product = {
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  orders: Array<Order>;
  price: Scalars['Float']['output'];
  quantity: Scalars['Int']['output'];
  serialNo: Scalars['String']['output'];
  updatedAt: Scalars['Date']['output'];
  user: User;
};

export type Query = {
  getOrder?: Order;
  getOrders: Array<Order>;
  getProduct?: Product;
  getProducts: Array<Product>;
  getUser?: User;
  getUsers: Array<User>;
  me?: User;
};


export type QuerygetOrderArgs = {
  id: Scalars['ID']['input'];
};


export type QuerygetProductArgs = {
  id: Scalars['ID']['input'];
};


export type QuerygetUserArgs = {
  id: Scalars['ID']['input'];
};

export type Subscription = {
  orderCreated?: Order;
  orderDeleted?: Scalars['ID']['output'];
  orderUpdated?: Order;
  productCreated?: Product;
  productDeleted?: Scalars['ID']['output'];
  productUpdated?: Product;
  userCreated?: User;
  userDeleted?: Scalars['ID']['output'];
  userUpdated?: User;
};

export type UpdateOrderInput = {
  id: Scalars['ID']['input'];
  quantity?: Scalars['Int']['input'];
};

export type UpdateProductInput = {
  id: Scalars['ID']['input'];
  name?: Scalars['String']['input'];
  price?: Scalars['Float']['input'];
};

export type UpdateUserInput = {
  email?: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  name?: Scalars['String']['input'];
};

export type User = {
  createdAt: Scalars['Date']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  notifications: Array<Notification>;
  orders: Array<Order>;
  password: Scalars['String']['output'];
  payments: Array<Payment>;
  products: Array<Product>;
  updatedAt: Scalars['Date']['output'];
};
