import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { USER_TITLE_FIELD } from "./UserTitle";
import { ACCOUNT_TITLE_FIELD } from "../account/AccountTitle";
import { FUNDINGSOURCE_TITLE_FIELD } from "../fundingSource/FundingSourceTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Birthdate" source="birthdate" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Deposit Link" source="depositLink" />
        <TextField label="Email" source="email" />
        <TextField label="First Name" source="firstName" />
        <ReferenceField
          label="Funding Source"
          source="fundingsource.id"
          reference="FundingSource"
        >
          <TextField source={FUNDINGSOURCE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <ReferenceField label="Parent" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Photo" source="photo" />
        <TextField label="QR Code" source="qrCode" />
        <TextField label="Roles" source="roles" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
        <TextField label="Zipcode" source="zipcode" />
        <ReferenceManyField
          reference="Account"
          target="UserId"
          label="Accounts"
        >
          <Datagrid rowClick="show">
            <TextField label="Account Type" source="accountType" />
            <TextField label="Balance" source="balance" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Card" target="UserId" label="Cards">
          <Datagrid rowClick="show">
            <ReferenceField
              label="Account"
              source="account.id"
              reference="Account"
            >
              <TextField source={ACCOUNT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Balance" source="balance" />
            <TextField label="Card Number" source="cardNumber" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Transactions" source="transactions" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="User" target="UserId" label="Users">
          <Datagrid rowClick="show">
            <TextField label="Birthdate" source="birthdate" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Deposit Link" source="depositLink" />
            <TextField label="Email" source="email" />
            <TextField label="First Name" source="firstName" />
            <ReferenceField
              label="Funding Source"
              source="fundingsource.id"
              reference="FundingSource"
            >
              <TextField source={FUNDINGSOURCE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Last Name" source="lastName" />
            <ReferenceField label="Parent" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Photo" source="photo" />
            <TextField label="QR Code" source="qrCode" />
            <TextField label="Roles" source="roles" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Username" source="username" />
            <TextField label="Zipcode" source="zipcode" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Goal" target="UserId" label="Goals">
          <Datagrid rowClick="show">
            <TextField label="Amount" source="amount" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Description" source="description" />
            <TextField label="Goal Date" source="goalDate" />
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Task" target="UserId" label="Tasks">
          <Datagrid rowClick="show">
            <BooleanField label="Completed" source="completed" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Date Completed" source="dateCompleted" />
            <TextField label="ID" source="id" />
            <TextField label="Name" source="name" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Transaction"
          target="UserId"
          label="Transactions"
        >
          <Datagrid rowClick="show">
            <TextField label="Amount" source="amount" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Transaction Date" source="transactionDate" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
