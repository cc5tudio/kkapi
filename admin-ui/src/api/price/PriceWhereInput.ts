import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";

export type PriceWhereInput = {
  ageGroup?: "Default" | "Youth" | "Teen";
  amount?: FloatNullableFilter;
  id?: StringFilter;
  task?: TaskWhereUniqueInput;
};
