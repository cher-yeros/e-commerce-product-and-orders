import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { v4 as uuidv4 } from "uuid";
import Notification from "./notification.model";
import Order from "./order.model";
import Payment from "./payment.model";
import Product from "./product.model";

@Table({ timestamps: true })
class User extends Model {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: uuidv4,
  })
  id!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password!: string;

  @HasMany(() => Product)
  products!: Product[];

  @HasMany(() => Order)
  orders!: Order[];

  @HasMany(() => Notification)
  notifications!: Notification[];

  @HasMany(() => Payment)
  payments!: Payment[];
}

export default User;
