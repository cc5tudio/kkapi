import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TransactionCreateInput = {
  amount?: number | null;
  transactionDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};
