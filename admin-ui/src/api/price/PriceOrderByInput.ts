import { SortOrder } from "../../util/SortOrder";

export type PriceOrderByInput = {
  ageGroup?: SortOrder;
  amount?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  taskId?: SortOrder;
  updatedAt?: SortOrder;
};
