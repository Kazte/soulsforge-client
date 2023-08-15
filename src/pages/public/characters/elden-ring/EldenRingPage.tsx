import { useEffect, useState } from "react"
import { CharacterEldenRing } from "../../../../models/characters/character-eldenring.model";
import CardCharacterList from "../../../../components/characters/CardCharacterList";
import { Spinner } from "@nextui-org/react";
import { EldenRingService } from "../../../../services/characters/elden-ring.service";

export default function EldenRingPage() {
	const [characters, setCharacters] = useState<CharacterEldenRing[]>([])
	const [loading, setLoading] = useState<boolean>(false)

	useEffect(() => {
		getCharacters();
	}, [])

	const getCharacters = async () => {
		setLoading(true)

		try {
			const response = await EldenRingService.getCharacters();

			console.log(response);

			if (response) {
				setCharacters(response)
			}
		} catch (error) {
			console.error('Error getting characters', error)
		} finally {
			setLoading(false)
		}
	}

	if (loading) {
		return (
			<section className="flex flex-row justify-center items-center h-full">
				<Spinner />
			</section>
		)
	} else {
		if (characters.length === 0) {
			return (
				<section className="flex flex-row justify-center items-center h-full">
					<h1>No characters found</h1>
				</section>
			)
		}
	}


	return (
		<section className="flex flex-row flex-wrap justify-start items-center container m-4 gap-4">
			{
				characters.map((character, index) => {
					return (
						<CardCharacterList key={index} character={character} />
					)
				})
			}
		</section>
	)
}