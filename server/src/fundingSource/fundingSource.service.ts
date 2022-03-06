import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { FundingSourceServiceBase } from "./base/fundingSource.service.base";

@Injectable()
export class FundingSourceService extends FundingSourceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
