import { Select, SelectItem } from "@nextui-org/react";
import { ChangeEvent, useEffect, useState } from "react";
import { Case, Default, Switch } from "../../ui";

interface Props {
  value?: string
  labelsMap: string[]
  editing: boolean
  onChange: (value: string) => void
}

export default function CharacterDropdown({ value, labelsMap, editing = false, onChange }: Props) {
  const [selectedValue, setSelectedValue] = useState<string>(value ?? labelsMap[0]);

  const handleOnChange = (v: ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(v.target.value);
    onChange(v.target.value);
  }

  return (
    <div className="min-w-[150px]">
      <Switch>
        <Case condition={editing}>
          <Select
            items={labelsMap}
            selectionMode="single"
            defaultSelectedKeys={[value]}
            className="max-w-lg"
            labelPlacement="outside"
            aria-labelledby="Select dropdown menu"
            onChange={handleOnChange}
          >
            {
              labelsMap.map((l) => (
                <SelectItem key={l} value={l}>
                  {l}
                </SelectItem>
              ))}
          </Select>
        </Case>

        <Default>
          {selectedValue}
        </Default>
      </Switch>
    </div>
  )
}