import { CardCreateNestedManyWithoutTransactionsInput } from "./CardCreateNestedManyWithoutTransactionsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TransactionCreateInput = {
  amount?: number | null;
  cards?: CardCreateNestedManyWithoutTransactionsInput;
  transactionDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};
