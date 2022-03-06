import { Module } from "@nestjs/common";
import { ChoreModuleBase } from "./base/chore.module.base";
import { ChoreService } from "./chore.service";
import { ChoreController } from "./chore.controller";
import { ChoreResolver } from "./chore.resolver";

@Module({
  imports: [ChoreModuleBase],
  controllers: [ChoreController],
  providers: [ChoreService, ChoreResolver],
  exports: [ChoreService],
})
export class ChoreModule {}
