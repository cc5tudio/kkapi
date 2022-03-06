import { CardCreateNestedManyWithoutAccountsInput } from "./CardCreateNestedManyWithoutAccountsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AccountCreateInput = {
  accountType?: "Spend" | "Save" | "Give" | null;
  balance?: number | null;
  cards?: CardCreateNestedManyWithoutAccountsInput;
  user?: UserWhereUniqueInput | null;
};
