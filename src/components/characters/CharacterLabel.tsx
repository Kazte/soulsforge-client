import { Input } from "@nextui-org/react";
import { useState } from "react";
import { Case, Default, Switch } from "../../ui";

interface Props {
  value: number | string
  editing?: boolean
  color?: string
  onChange?: (value: number | string) => void
}

export default function CharacterLabel({ value, editing = false, color = "white", onChange }: Props) {

  const [v, setV] = useState<number | string>(value);

  const handleBlur = (v: number | string) => {
    const value = v || 0;

    if (onChange)
      onChange(value);

    setV(value);
  }

  return (
    <Switch >
      <Case condition={editing}>
        <Input className={`text-${color} w-[45px]`}
          type="number" variant="bordered" size="sm" value={v.toString()} onBlur={() => handleBlur(v)} onChange={e => setV(parseInt(e.target.value))} />
      </Case>

      <Default>
        <p className={`text-${color} w-[45px]`}>{v}</p>
      </Default>
    </Switch>
  )
}