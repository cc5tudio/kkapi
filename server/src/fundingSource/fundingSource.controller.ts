import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FundingSourceService } from "./fundingSource.service";
import { FundingSourceControllerBase } from "./base/fundingSource.controller.base";

@swagger.ApiTags("funding-sources")
@common.Controller("funding-sources")
export class FundingSourceController extends FundingSourceControllerBase {
  constructor(
    protected readonly service: FundingSourceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
