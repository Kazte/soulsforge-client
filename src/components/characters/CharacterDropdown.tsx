import { Button, ButtonGroup, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { Case, Default, Switch } from "../../ui";

interface Props {
	value: string
	labelsMap: string[]
	editing: boolean
	onChange: (value: string) => void
}

export default function CharacterDropdown({ value, labelsMap, editing = false, onChange }: Props) {

	const [selected, setSelected] = useState<string>(labelsMap[0])

	useEffect(() => {
		setSelected(value);
	}, [value])

	useEffect(() => {
		console.log('selected', selected);
	}, [selected])

	const handleSelect = (label: string) => {
		console.log('selected', label);
		setSelected(label);
		onChange(label);
	}



	return (
		<Switch>
			<Case condition={editing}>
				<Dropdown placement="bottom-start">
					<DropdownTrigger>
						<Button>{selected}</Button>
					</DropdownTrigger>
					<DropdownMenu aria-label="Dropdown">
						{labelsMap.map((label, index) => (
							<DropdownItem key={index} onClick={() => handleSelect(label)}>{label}</DropdownItem>
						))}
					</DropdownMenu>
				</Dropdown>
			</Case>

			<Default>
				{value}
			</Default>
		</Switch>
	)
}