import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TransactionUpdateInput = {
  amount?: number | null;
  transactionDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};
