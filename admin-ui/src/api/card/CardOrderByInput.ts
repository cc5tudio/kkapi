import { SortOrder } from "../../util/SortOrder";

export type CardOrderByInput = {
  accountId?: SortOrder;
  balance?: SortOrder;
  cardNumber?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
