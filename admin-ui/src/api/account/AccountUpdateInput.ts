import { CardUpdateManyWithoutAccountsInput } from "./CardUpdateManyWithoutAccountsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AccountUpdateInput = {
  accountType?: "Spend" | "Save" | "Give" | null;
  balance?: number | null;
  cards?: CardUpdateManyWithoutAccountsInput;
  user?: UserWhereUniqueInput | null;
};
