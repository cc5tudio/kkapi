import { SortOrder } from "../../util/SortOrder";

export type SettingOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  notificationsEnabled?: SortOrder;
  updatedAt?: SortOrder;
};
