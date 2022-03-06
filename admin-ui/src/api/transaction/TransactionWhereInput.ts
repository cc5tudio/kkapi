import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TransactionWhereInput = {
  amount?: IntNullableFilter;
  id?: StringFilter;
  transactionDate?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
