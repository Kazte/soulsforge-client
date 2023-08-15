import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { EldenRingService } from "../../../services/characters/elden-ring.service";
import { CharacterEldenRing } from "../../../models/characters/character-eldenring.model";
import { Card, Divider } from "@nextui-org/react";
import CardCharacterList from "../../../components/characters/CardCharacterList";

export default function ProfilePage() {
	const params = useParams()

	// TODO: CHANGE FOR USER
	const [user, setUser] = useState<CharacterEldenRing[]>([]);

	useEffect(() => {
		// fetch the user data from the backend
		fetchUserData();
	}, [params])

	const fetchUserData = async () => {
		// TODO: Change for route user

		try {
			if (!params.id) return;

			const response = await EldenRingService.getCharacterByUser(params.id);

			if (response.result) {
				setUser(response.data);
			} else {
				console.log(response.message);
			}
		} catch (error) {
			console.log(error);
		}
	}


	return (
		<section className="flex flex-col gap-4 container mx-auto">
			<h1 className="text-3xl font-bold">Profile</h1>
			<Divider />
			<div className="flex flex-col gap-4">
				<h2 className="text-2xl font-bold">Characters</h2>
				<div className="flex flex-row gap-4">
					{
						user.map((character, index) => {
							return <CardCharacterList key={index} character={character} />
						})
					}
				</div>
			</div>
		</section>
	)
}