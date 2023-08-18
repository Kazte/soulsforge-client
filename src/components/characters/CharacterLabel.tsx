import { Input } from "@nextui-org/react";
import { useState } from "react";
import { Case, Default, Switch } from "../../ui";

interface Props {
	value: number | string
	editing?: boolean
	onChange?: (value: number | string) => void
}

export default function CharacterLabel({ value, editing = false, onChange }: Props) {

	const [v, setV] = useState<number | string>(value);

	const handleBlur = (v: number | string) => {
		const value = v || 0;

		if (onChange)
			onChange(value);

		setV(value);
	}

	return (
		<Switch>
			<Case condition={editing}>
				<Input className="w-[40px]"
					type="number" size="sm" width="3rem" value={v.toString()} onBlur={() => handleBlur(v)} onChange={e => setV(parseInt(e.target.value))} />
			</Case>

			<Default>
				<p className="">{v}</p>
			</Default>
		</Switch>
	)
}