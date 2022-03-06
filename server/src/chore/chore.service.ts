import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ChoreServiceBase } from "./base/chore.service.base";

@Injectable()
export class ChoreService extends ChoreServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
