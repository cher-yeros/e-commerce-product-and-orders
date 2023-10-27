import {
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { v4 as uuidv4 } from "uuid";
import OrderProduct from "./order_product.model";
import Product from "./product.model";
import User from "./user.model";

@Table({ timestamps: true })
class Order extends Model {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: uuidv4,
  })
  id!: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  quantity!: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  totalPrice!: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.UUID,
  })
  userId!: string;

  @BelongsTo(() => User)
  user!: User;

  @BelongsToMany(() => Product, { through: { model: () => OrderProduct } })
  products!: Product[];
}

export default Order;
