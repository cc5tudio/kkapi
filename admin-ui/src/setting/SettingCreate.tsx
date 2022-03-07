import * as React from "react";
import { Create, SimpleForm, CreateProps, BooleanInput } from "react-admin";

export const SettingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput
          label="Notifications Enabled"
          source="notificationsEnabled"
        />
      </SimpleForm>
    </Create>
  );
};
