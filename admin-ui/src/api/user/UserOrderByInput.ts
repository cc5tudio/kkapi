import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  birthdate?: SortOrder;
  createdAt?: SortOrder;
  depositLink?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  fundingSourceId?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  parentId?: SortOrder;
  password?: SortOrder;
  photo?: SortOrder;
  qrCode?: SortOrder;
  roles?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
  zipcode?: SortOrder;
};
