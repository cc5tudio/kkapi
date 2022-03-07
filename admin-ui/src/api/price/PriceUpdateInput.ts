import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";

export type PriceUpdateInput = {
  ageGroup?: "Default" | "Youth" | "Teen" | null;
  amount?: number | null;
  task?: TaskWhereUniqueInput | null;
};
