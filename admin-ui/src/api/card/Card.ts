import { Account } from "../account/Account";
import { Transaction } from "../transaction/Transaction";
import { User } from "../user/User";

export type Card = {
  account?: Account | null;
  balance: number | null;
  cardNumber: number | null;
  createdAt: Date;
  id: string;
  transactions?: Array<Transaction>;
  updatedAt: Date;
  user?: User | null;
};
