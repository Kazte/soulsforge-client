import { Checkbox } from "@nextui-org/react"
import { ChangeEvent } from "react";
import { Case, Default, Switch } from "../../ui";

export interface Props {
  value: boolean
  editing?: boolean,
  onChange: (val: boolean) => void
}
export default function CharacterCheckbox({ value, editing = false, onChange }: Props) {

  const handleOnChange = (val: ChangeEvent<HTMLInputElement>) => {
    if (onChange)
      onChange(val.target.checked);
  }

  return (
    <Switch>
      <Case condition={editing}>
        <Checkbox defaultSelected={value} onChange={handleOnChange} />
      </Case>
      <Default>
        {value ? 'Yes' : 'No'}
      </Default>
    </Switch>
  )
}