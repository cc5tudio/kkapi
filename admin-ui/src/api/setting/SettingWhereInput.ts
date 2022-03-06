import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type SettingWhereInput = {
  id?: StringFilter;
  notificationsEnabled?: BooleanNullableFilter;
};
