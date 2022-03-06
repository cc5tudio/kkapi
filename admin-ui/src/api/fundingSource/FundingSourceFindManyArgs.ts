import { FundingSourceWhereInput } from "./FundingSourceWhereInput";
import { FundingSourceOrderByInput } from "./FundingSourceOrderByInput";

export type FundingSourceFindManyArgs = {
  where?: FundingSourceWhereInput;
  orderBy?: FundingSourceOrderByInput;
  skip?: number;
  take?: number;
};
