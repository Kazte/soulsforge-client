import { Color } from "../../models/characters/color.model"
import { Case, Default, Switch } from "../../ui";
import { getTextColorFromBackground } from "../../utilities/color.utility";
import { useEffect, useState } from "react";
import CharacterLabel from "./CharacterLabel";

export interface Prop {
	color: Color
	editing?: boolean,
	onChange?: (color: Color) => void
}

export default function CharacterColor({ color, editing = false, onChange }: Prop) {





	const [r, setR] = useState<number>(color.r);
	const [g, setG] = useState<number>(color.g);
	const [b, setB] = useState<number>(color.b);

	useEffect(() => {
		setR(color.r);
		setG(color.g);
		setB(color.b);
	}, [color]);



	const handleChange = (r: number, g: number, b: number) => {
		if (onChange)
			onChange({ r, g, b });

		setR(r);
		setG(g);
		setB(b);
	}


	const textColor = getTextColorFromBackground(r, g, b);

	const borderStyle = getTextColorFromBackground(r, g, b) === "white" ? "border-gray-300" : "border-gray-700";

	const colorStyle = {
		backgroundColor: `rgb(${r},${g},${b})`,
		borderColor: borderStyle
	};

	if (!color) {
		return (
			<div className="border border-gray-300">
				<div className="flex flex-row items-center justify-center gap-2 text-center px-2">
					<p className="text-sm text-gray-400">-</p>
					<p className="text-sm text-gray-400">-</p>
					<p className="text-sm text-gray-400">-</p>
				</div>
			</div>
		);
	}

	return (
		<div className="border border-gray-300" style={colorStyle}>
			<div className="flex flex-row items-center justify-center gap-2 text-center px-2">
				<Switch>
					<Case condition={editing}>
						<CharacterLabel editing={editing} value={r || 0} onChange={r => handleChange((r as number), g, b)} />
						<CharacterLabel editing={editing} value={g || 0} onChange={g => handleChange(r, (g as number), b)} />
						<CharacterLabel editing={editing} value={b || 0} onChange={b => handleChange(r, g, (b as number))} />
					</Case>
					<Default>
						<p className={`text-sm text-${textColor}`}>R:{r}</p>
						<p className={`text-sm text-${textColor}`}>G:{g}</p>
						<p className={`text-sm text-${textColor}`}>B:{b}</p>
					</Default>
				</Switch>
			</div>
		</div>
	);
}