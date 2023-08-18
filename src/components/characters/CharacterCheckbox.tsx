import { Checkbox } from "@nextui-org/react"
import { ChangeEvent } from "react";

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
		<Checkbox defaultSelected={value} onChange={handleOnChange} isDisabled={!editing} />
	)
}