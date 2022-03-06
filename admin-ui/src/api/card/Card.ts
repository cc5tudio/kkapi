import { Account } from "../account/Account";
import { User } from "../user/User";

export type Card = {
  account?: Account | null;
  balance: number | null;
  cardNumber: number | null;
  createdAt: Date;
  id: string;
  transactions: string | null;
  updatedAt: Date;
  user?: User | null;
};
