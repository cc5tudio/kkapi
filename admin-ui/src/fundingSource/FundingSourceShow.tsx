import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { FUNDINGSOURCE_TITLE_FIELD } from "./FundingSourceTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const FundingSourceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="User"
          target="FundingSourceId"
          label="Users"
        >
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
      </SimpleShowLayout>
    </Show>
  );
};
