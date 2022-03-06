import { ChoreWhereInput } from "./ChoreWhereInput";
import { ChoreOrderByInput } from "./ChoreOrderByInput";

export type ChoreFindManyArgs = {
  where?: ChoreWhereInput;
  orderBy?: ChoreOrderByInput;
  skip?: number;
  take?: number;
};
