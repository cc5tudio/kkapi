import { Module } from "@nestjs/common";
import { FundingSourceModuleBase } from "./base/fundingSource.module.base";
import { FundingSourceService } from "./fundingSource.service";
import { FundingSourceController } from "./fundingSource.controller";
import { FundingSourceResolver } from "./fundingSource.resolver";

@Module({
  imports: [FundingSourceModuleBase],
  controllers: [FundingSourceController],
  providers: [FundingSourceService, FundingSourceResolver],
  exports: [FundingSourceService],
})
export class FundingSourceModule {}
