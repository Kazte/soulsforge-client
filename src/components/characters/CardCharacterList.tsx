import { Card, CardBody, CardFooter, CardHeader, Chip, Divider } from "@nextui-org/react"
import { CharacterBase } from "../../models/characters/character-base.model"
import { useNavigate } from "react-router-dom"
import { PublicRoutes } from "../../models/routes"

interface Props {
	character: CharacterBase
}

export default function CardCharacterList({ character }: Props) {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(`/${PublicRoutes.CHARACTER}/${PublicRoutes.ELDEN_RING}/${character._id}`)
	}


	return (
		<Card shadow="sm" className="max-w-[400px] min-w-[200px]" isPressable disableRipple onPress={handleClick}>
			<Chip color="primary" className="m-2 self-end">
				{character.game}
			</Chip>
			<CardHeader>
				{character.name}
			</CardHeader>
			<Divider />
			<CardBody>
				{
					character._id
				}
			</CardBody>
			<Divider />
			<CardFooter>
				<small>Created by: {character.user.username}</small>
			</CardFooter>
		</Card >
	)
}