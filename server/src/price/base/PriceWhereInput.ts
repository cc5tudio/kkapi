/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnumPriceAgeGroup } from "./EnumPriceAgeGroup";
import { IsEnum, IsOptional, ValidateNested } from "class-validator";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { Type } from "class-transformer";
import { StringFilter } from "../../util/StringFilter";
import { TaskWhereUniqueInput } from "../../task/base/TaskWhereUniqueInput";
@InputType()
class PriceWhereInput {
  @ApiProperty({
    required: false,
    enum: EnumPriceAgeGroup,
  })
  @IsEnum(EnumPriceAgeGroup)
  @IsOptional()
  @Field(() => EnumPriceAgeGroup, {
    nullable: true,
  })
  ageGroup?: "Default" | "Youth" | "Teen";

  @ApiProperty({
    required: false,
    type: FloatNullableFilter,
  })
  @Type(() => FloatNullableFilter)
  @IsOptional()
  @Field(() => FloatNullableFilter, {
    nullable: true,
  })
  amount?: FloatNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => TaskWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TaskWhereUniqueInput)
  @IsOptional()
  @Field(() => TaskWhereUniqueInput, {
    nullable: true,
  })
  task?: TaskWhereUniqueInput;
}
export { PriceWhereInput };
