import { Task } from "../task/Task";

export type Price = {
  ageGroup?: "Default" | "Youth" | "Teen" | null;
  amount: number | null;
  createdAt: Date;
  id: string;
  task?: Task | null;
  updatedAt: Date;
};
