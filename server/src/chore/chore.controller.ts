import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ChoreService } from "./chore.service";
import { ChoreControllerBase } from "./base/chore.controller.base";

@swagger.ApiTags("chores")
@common.Controller("chores")
export class ChoreController extends ChoreControllerBase {
  constructor(
    protected readonly service: ChoreService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
