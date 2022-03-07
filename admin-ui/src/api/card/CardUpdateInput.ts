import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { TransactionUpdateManyWithoutCardsInput } from "./TransactionUpdateManyWithoutCardsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CardUpdateInput = {
  account?: AccountWhereUniqueInput | null;
  balance?: number | null;
  cardNumber?: number | null;
  transactions?: TransactionUpdateManyWithoutCardsInput;
  user?: UserWhereUniqueInput | null;
};
