import { SortOrder } from "../../util/SortOrder";

export type GoalOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  goalDate?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
