import { UserCreateNestedManyWithoutFundingSourcesInput } from "./UserCreateNestedManyWithoutFundingSourcesInput";

export type FundingSourceCreateInput = {
  users?: UserCreateNestedManyWithoutFundingSourcesInput;
};
