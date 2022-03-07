import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CardWhereInput = {
  account?: AccountWhereUniqueInput;
  balance?: FloatNullableFilter;
  cardNumber?: IntNullableFilter;
  id?: StringFilter;
  transactions?: TransactionListRelationFilter;
  user?: UserWhereUniqueInput;
};
