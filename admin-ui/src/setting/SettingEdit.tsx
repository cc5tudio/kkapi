import * as React from "react";
import { Edit, SimpleForm, EditProps, BooleanInput } from "react-admin";

export const SettingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput
          label="Notifications Enabled"
          source="notificationsEnabled"
        />
      </SimpleForm>
    </Edit>
  );
};
