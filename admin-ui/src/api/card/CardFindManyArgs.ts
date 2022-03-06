import { CardWhereInput } from "./CardWhereInput";
import { CardOrderByInput } from "./CardOrderByInput";

export type CardFindManyArgs = {
  where?: CardWhereInput;
  orderBy?: CardOrderByInput;
  skip?: number;
  take?: number;
};
