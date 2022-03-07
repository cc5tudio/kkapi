import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { FundingSourceModule } from "./fundingSource/fundingSource.module";
import { SettingModule } from "./setting/setting.module";
import { CardModule } from "./card/card.module";
import { TransactionModule } from "./transaction/transaction.module";
import { TaskModule } from "./task/task.module";
import { PriceModule } from "./price/price.module";
import { AccountModule } from "./account/account.module";
import { GoalModule } from "./goal/goal.module";
import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";
import { HealthModule } from "./health/health.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { MorganModule } from "nest-morgan";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { GraphQLModule } from "@nestjs/graphql";

@Module({
  controllers: [],
  imports: [
    UserModule,
    FundingSourceModule,
    SettingModule,
    CardModule,
    TransactionModule,
    TaskModule,
    PriceModule,
    AccountModule,
    GoalModule,
    ACLModule,
    AuthModule,
    HealthModule,
    SecretsManagerModule,
    MorganModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync({
      useFactory: (configService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
