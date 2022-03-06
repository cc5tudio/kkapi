import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { FundingSourceResolverBase } from "./base/fundingSource.resolver.base";
import { FundingSource } from "./base/FundingSource";
import { FundingSourceService } from "./fundingSource.service";

@graphql.Resolver(() => FundingSource)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class FundingSourceResolver extends FundingSourceResolverBase {
  constructor(
    protected readonly service: FundingSourceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
