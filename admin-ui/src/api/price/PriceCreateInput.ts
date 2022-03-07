import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";

export type PriceCreateInput = {
  ageGroup?: "Default" | "Youth" | "Teen" | null;
  amount?: number | null;
  task?: TaskWhereUniqueInput | null;
};
