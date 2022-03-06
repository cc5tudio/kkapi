import { User } from "../user/User";

export type FundingSource = {
  createdAt: Date;
  id: string;
  updatedAt: Date;
  users?: Array<User>;
};
