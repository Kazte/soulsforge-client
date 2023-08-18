import { Spinner, Divider, Skeleton, Button, ButtonGroup, Textarea } from "@nextui-org/react"
import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { useParams, Link } from "react-router-dom"
import CharacterColor from "../../../components/characters/CharacterColor"
import CharacterSection from "../../../components/characters/CharacterSection"
import CharacterSectionContainer from "../../../components/characters/CharacterSectionContainer"
import KLink from "../../../components/ui/KLink"
import { CharacterEldenRing } from "../../../models/characters/character-eldenring.model"
import { PublicRoutes, PrivateRoutes } from "../../../models/routes"
import { AppStore } from "../../../redux/store"
import { EldenRingService } from "../../../services/characters/elden-ring.service"
import { KButton } from "../../../components/ui/KButton"
import EldenRingCharDetail from "./components/EldenRingCharDetail"

export default function EldenRingCharPage() {
	const params = useParams()
	const userState = useSelector((store: AppStore) => store.user)

	const [eldenChar, setEldenChar] = useState<CharacterEldenRing | null>(null)
	const [loading, setLoading] = useState<boolean>(false)
	const [loadedImage, setLoadedImage] = useState<boolean>(false)
	const [myChar, setMyChar] = useState<boolean>(false)
	const [isEditing, setIsEditing] = useState<boolean>(false)
	const [lastEldenCharValue, setLastEldenCharValue] = useState<CharacterEldenRing>(eldenChar);

	useEffect(() => {
		console.log('elden char', eldenChar);
	}, [eldenChar])


	useEffect(() => {

		if (!params.id)
			return;

		getCharacter(params.id);
	}, [params])

	const getCharacter = async (id: string) => {
		setLoading(true);
		try {
			const response = await EldenRingService.getCharacter(id);
			setEldenChar(response);
			setMyChar(response.user._id == userState.id)
		} catch (err) {
			console.log('error getting elden char', err)
		} finally {
			setLoading(false);
		}
	}

	const handleChange = (char: CharacterEldenRing) => {
		console.log('char', char);
		setEldenChar(char);
	}

	if (loading)
		return <article className="flex flex-col gap-4 container m-auto">
			<Spinner />
		</article>

	if (!eldenChar)
		return <article className="flex flex-col gap-4 container m-auto">
			<h1 className="text-4xl text-center">Character not found</h1>
		</article>

	function handleSaveEdit(): void {
		setIsEditing(false);
	}

	function handleCancelEdit(): void {
		setIsEditing(false);
		setEldenChar(lastEldenCharValue)
	}

	return (
		<article className="flex flex-col gap-4 container m-auto">
			<h1 className="text-4xl text-center">{eldenChar?.name}</h1>
			<Divider className="" />

			<section className="flex flex-wrap flex-col-reverse sm:flex-row gap-2 justify-between">
				<span className="flex-1 sm:w-[75ch]">
					{
						isEditing ? (
							<Textarea
								type="underlined"
								autoFocus
								className="h-full"
								classNames={
									{
										input: 'h-full flex-1',
										inputWrapper: 'h-full flex-1'
									}
								}
								label="Description"
								placeholder="Description"
								value={eldenChar?.description}
								onChange={(e) => handleChange({ ...eldenChar, description: e.target.value })}
							/>
						) : (
							<p className="">
								{eldenChar?.description}
							</p>
						)
					}
				</span>
				<picture className="flex flex-col gap-2">
					<Skeleton isLoaded={loadedImage}>
						<img className="sm:w-[200px]" src={eldenChar?.imageUrl} alt={eldenChar?.name}
							onLoad={() => setLoadedImage(true)} />
					</Skeleton>
					<p className="self-end mx-2">
						<strong>Created by:</strong> <KLink to={`/${PublicRoutes.PROFILE}/${eldenChar?.user._id}`}>{eldenChar?.user.username}</KLink>
					</p>
				</picture>

			</section>

			<Divider />

			<section className="flex flex-wrap gap-2">
				<EldenRingCharDetail eldenChar={eldenChar} editing={isEditing} onChange={handleChange} />
			</section>

			{

				myChar && (
					<>
						<Divider />
						<section className="flex flex-row justify-end gap-2">


							{
								isEditing && (<>
									<KButton color="success" onClick={handleSaveEdit}>
										Save
									</KButton>
									<Divider orientation="vertical" />
									<KButton color="danger" onClick={handleCancelEdit}>
										Cancel
									</KButton>
								</>
								)
							}
							{
								!isEditing && (
									<>
										<KButton color={isEditing ? 'danger' : 'success'} onClick={() => {
											setLastEldenCharValue(eldenChar)
											setIsEditing(!isEditing)
										}}>
											{
												isEditing ? 'Cancel' : 'Edit'
											}

										</KButton>
										<Link to={`/${PrivateRoutes.CHARACTER_DELETE}/${PublicRoutes.ELDEN_RING}/${eldenChar._id}`}>
											<KButton color="danger">
												Delete
											</KButton>
										</Link>

									</>
								)
							}

						</section>
					</>
				)
			}
		</article>
	)
}