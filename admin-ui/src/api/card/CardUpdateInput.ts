import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CardUpdateInput = {
  account?: AccountWhereUniqueInput | null;
  balance?: number | null;
  cardNumber?: number | null;
  transactions?: string | null;
  user?: UserWhereUniqueInput | null;
};
