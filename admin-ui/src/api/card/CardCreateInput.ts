import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { TransactionCreateNestedManyWithoutCardsInput } from "./TransactionCreateNestedManyWithoutCardsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CardCreateInput = {
  account?: AccountWhereUniqueInput | null;
  balance?: number | null;
  cardNumber?: number | null;
  transactions?: TransactionCreateNestedManyWithoutCardsInput;
  user?: UserWhereUniqueInput | null;
};
