import { Color } from "../../models/characters/color.model"

export interface Prop {
	color?: Color
}

export default function CharacterColor({ color }: Prop) {
	return (
		<div className="flex flex-row items-center justify-center gap-2">
			<p>{color?.r}</p>
			<p>{color?.g}</p>
			<p>{color?.b}</p>
		</div>
	)
}