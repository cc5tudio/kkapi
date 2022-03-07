import { FundingSource as TFundingSource } from "../api/fundingSource/FundingSource";

export const FUNDINGSOURCE_TITLE_FIELD = "id";

export const FundingSourceTitle = (record: TFundingSource): string => {
  return record.id || record.id;
};
