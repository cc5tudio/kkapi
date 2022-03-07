import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PriceListRelationFilter } from "../price/PriceListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TaskWhereInput = {
  completed?: BooleanNullableFilter;
  dateCompleted?: DateTimeNullableFilter;
  id?: StringFilter;
  name?: StringFilter;
  price?: PriceListRelationFilter;
  user?: UserWhereUniqueInput;
};
