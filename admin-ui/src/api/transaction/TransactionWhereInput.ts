import { IntNullableFilter } from "../../util/IntNullableFilter";
import { CardListRelationFilter } from "../card/CardListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TransactionWhereInput = {
  amount?: IntNullableFilter;
  cards?: CardListRelationFilter;
  id?: StringFilter;
  transactionDate?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
