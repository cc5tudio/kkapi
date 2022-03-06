import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  NumberInput,
  ReferenceInput,
} from "react-admin";
import { TaskTitle } from "../task/TaskTitle";

export const PriceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="ageGroup"
          label="Age Group"
          choices={[
            { label: "Default", value: "Default" },
            { label: "Youth", value: "Youth" },
            { label: "Teen", value: "Teen" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput label="Amount" source="amount" />
        <ReferenceInput source="task.id" reference="Task" label="Task">
          <SelectInput optionText={TaskTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
