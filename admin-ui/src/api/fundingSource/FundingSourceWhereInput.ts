import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type FundingSourceWhereInput = {
  id?: StringFilter;
  users?: UserListRelationFilter;
};
