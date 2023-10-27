import { Optional } from "sequelize";
import {
  Table,
  Model,
  Column,
  DataType,
  ForeignKey,
} from "sequelize-typescript";
import User from "./user.model";
import { v4 as uuidv4 } from "uuid";

@Table({ timestamps: true })
class Payment extends Model {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: uuidv4,
  })
  id!: string;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  amount!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  status!: string;

  @ForeignKey(() => User)
  userId!: string;
}

export default Payment;
