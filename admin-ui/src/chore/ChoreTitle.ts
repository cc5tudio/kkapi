import { Chore as TChore } from "../api/chore/Chore";

export const CHORE_TITLE_FIELD = "id";

export const ChoreTitle = (record: TChore): string => {
  return record.id || record.id;
};
