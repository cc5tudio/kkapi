import { User } from "../user/User";

export type Transaction = {
  amount: number | null;
  createdAt: Date;
  id: string;
  transactionDate: Date | null;
  updatedAt: Date;
  user?: User | null;
};
