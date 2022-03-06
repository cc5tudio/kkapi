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
import { AccountListRelationFilter } from "../../account/base/AccountListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { CardListRelationFilter } from "../../card/base/CardListRelationFilter";
import { UserListRelationFilter } from "./UserListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FundingSourceWhereUniqueInput } from "../../fundingSource/base/FundingSourceWhereUniqueInput";
import { GoalListRelationFilter } from "../../goal/base/GoalListRelationFilter";
import { UserWhereUniqueInput } from "./UserWhereUniqueInput";
import { TaskListRelationFilter } from "../../task/base/TaskListRelationFilter";
import { TransactionListRelationFilter } from "../../transaction/base/TransactionListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
@InputType()
class UserWhereInput {
  @ApiProperty({
    required: false,
    type: () => AccountListRelationFilter,
  })
  @ValidateNested()
  @Type(() => AccountListRelationFilter)
  @IsOptional()
  @Field(() => AccountListRelationFilter, {
    nullable: true,
  })
  accounts?: AccountListRelationFilter;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  birthdate?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: () => CardListRelationFilter,
  })
  @ValidateNested()
  @Type(() => CardListRelationFilter)
  @IsOptional()
  @Field(() => CardListRelationFilter, {
    nullable: true,
  })
  cards?: CardListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => UserListRelationFilter,
  })
  @ValidateNested()
  @Type(() => UserListRelationFilter)
  @IsOptional()
  @Field(() => UserListRelationFilter, {
    nullable: true,
  })
  children?: UserListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  depositLink?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  email?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  firstName?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => FundingSourceWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FundingSourceWhereUniqueInput)
  @IsOptional()
  @Field(() => FundingSourceWhereUniqueInput, {
    nullable: true,
  })
  fundingSource?: FundingSourceWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => GoalListRelationFilter,
  })
  @ValidateNested()
  @Type(() => GoalListRelationFilter)
  @IsOptional()
  @Field(() => GoalListRelationFilter, {
    nullable: true,
  })
  goals?: GoalListRelationFilter;

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
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  lastName?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  parent?: UserWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  photo?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  qrCode?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => TaskListRelationFilter,
  })
  @ValidateNested()
  @Type(() => TaskListRelationFilter)
  @IsOptional()
  @Field(() => TaskListRelationFilter, {
    nullable: true,
  })
  tasks?: TaskListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => TransactionListRelationFilter,
  })
  @ValidateNested()
  @Type(() => TransactionListRelationFilter)
  @IsOptional()
  @Field(() => TransactionListRelationFilter, {
    nullable: true,
  })
  transactions?: TransactionListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  username?: StringFilter;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  zipcode?: IntNullableFilter;
}
export { UserWhereInput };
