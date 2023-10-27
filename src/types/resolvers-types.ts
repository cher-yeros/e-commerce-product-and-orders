
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: Date; output: Date; }
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







export type Notification = {
  __typename?: 'Notification';
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  isRead: Scalars['Boolean']['output'];
  message: Scalars['String']['output'];
  order: Order;
  updatedAt: Scalars['Date']['output'];
  user: User;
};

export type Order = {
  __typename?: 'Order';
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  products: Array<Product>;
  quantity: Scalars['Int']['output'];
  totalPrice: Scalars['Float']['output'];
  updatedAt: Scalars['Date']['output'];
  user: User;
};

export type Payment = {
  __typename?: 'Payment';
  amount: Scalars['Float']['output'];
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  status: Scalars['String']['output'];
  updatedAt: Scalars['Date']['output'];
};

export type Product = {
  __typename?: 'Product';
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



export type UpdateOrderInput = {
  id: Scalars['ID']['input'];
  quantity?: Scalars['Int']['input'];
};

export type UpdateProductInput = {
  id: Scalars['ID']['input'];
  name?: Scalars['String']['input'];
  price?: Scalars['Float']['input'];
};

export type User = {
  __typename?: 'User';
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
