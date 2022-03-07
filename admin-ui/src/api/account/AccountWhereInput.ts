import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { CardListRelationFilter } from "../card/CardListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AccountWhereInput = {
  accountType?: "Spend" | "Save" | "Give";
  balance?: FloatNullableFilter;
  cards?: CardListRelationFilter;
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
