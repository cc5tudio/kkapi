import { Card as TCard } from "../api/card/Card";

export const CARD_TITLE_FIELD = "transactions";

export const CardTitle = (record: TCard): string => {
  return record.transactions || record.id;
};
