import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type GoalUpdateInput = {
  amount?: number | null;
  description?: string | null;
  goalDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};
