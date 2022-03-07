import { Price } from "../price/Price";
import { User } from "../user/User";

export type Task = {
  completed: boolean | null;
  createdAt: Date;
  dateCompleted: Date | null;
  id: string;
  name: string;
  price?: Array<Price>;
  updatedAt: Date;
  user?: User | null;
};
