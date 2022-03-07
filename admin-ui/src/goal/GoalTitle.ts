import { Goal as TGoal } from "../api/goal/Goal";

export const GOAL_TITLE_FIELD = "id";

export const GoalTitle = (record: TGoal): string => {
  return record.id || record.id;
};
