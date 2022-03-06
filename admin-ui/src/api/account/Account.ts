import { Card } from "../card/Card";
import { User } from "../user/User";

export type Account = {
  accountType?: "Spend" | "Save" | "Give" | null;
  balance: number | null;
  cards?: Array<Card>;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
