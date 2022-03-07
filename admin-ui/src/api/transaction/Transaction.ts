import { Card } from "../card/Card";
import { User } from "../user/User";

export type Transaction = {
  amount: number | null;
  cards?: Array<Card>;
  createdAt: Date;
  id: string;
  transactionDate: Date | null;
  updatedAt: Date;
  user?: User | null;
};
