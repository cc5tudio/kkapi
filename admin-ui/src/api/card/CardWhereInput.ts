import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CardWhereInput = {
  account?: AccountWhereUniqueInput;
  balance?: FloatNullableFilter;
  cardNumber?: IntNullableFilter;
  id?: StringFilter;
  transactions?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
