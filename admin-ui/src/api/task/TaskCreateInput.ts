import { PriceCreateNestedManyWithoutTasksInput } from "./PriceCreateNestedManyWithoutTasksInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TaskCreateInput = {
  completed?: boolean | null;
  dateCompleted?: Date | null;
  name: string;
  price?: PriceCreateNestedManyWithoutTasksInput;
  user?: UserWhereUniqueInput | null;
};
