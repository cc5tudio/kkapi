import { User } from "../user/User";

export type Goal = {
  amount: number | null;
  createdAt: Date;
  description: string | null;
  goalDate: Date | null;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
