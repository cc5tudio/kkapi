import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateInput,
  TextInput,
  ReferenceInput,
  SelectInput,
  PasswordInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { FundingSourceTitle } from "../fundingSource/FundingSourceTitle";
import { UserTitle } from "./UserTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateInput label="Birthdate" source="birthdate" />
        <TextInput label="Deposit Link" source="depositLink" />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="First Name" source="firstName" />
        <ReferenceInput
          source="fundingsource.id"
          reference="FundingSource"
          label="Funding Source"
        >
          <SelectInput optionText={FundingSourceTitle} />
        </ReferenceInput>
        <TextInput label="Last Name" source="lastName" />
        <ReferenceInput source="user.id" reference="User" label="Parent">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <PasswordInput label="Password" source="password" />
        <TextInput label="Photo" source="photo" />
        <TextInput label="QR Code" source="qrCode" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Username" source="username" />
        <NumberInput step={1} label="Zipcode" source="zipcode" />
      </SimpleForm>
    </Edit>
  );
};
