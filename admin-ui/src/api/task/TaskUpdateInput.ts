import { PriceUpdateManyWithoutTasksInput } from "./PriceUpdateManyWithoutTasksInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TaskUpdateInput = {
  completed?: boolean | null;
  dateCompleted?: Date | null;
  name?: string;
  price?: PriceUpdateManyWithoutTasksInput;
  user?: UserWhereUniqueInput | null;
};
