import { CardUpdateManyWithoutTransactionsInput } from "./CardUpdateManyWithoutTransactionsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TransactionUpdateInput = {
  amount?: number | null;
  cards?: CardUpdateManyWithoutTransactionsInput;
  transactionDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};
