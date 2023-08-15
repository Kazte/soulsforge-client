import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Divider, Spinner } from "@nextui-org/react";
import CharacterColor from "../../../../components/characters/CharacterColor";
import CharacterSection from "../../../../components/characters/CharacterSection";
import CharacterSectionContainer from "../../../../components/characters/CharacterSectionContainer";
import { CharacterEldenRing } from "../../../../models/characters/character-eldenring.model";
import { EldenRingService } from "../../../../services/characters/elden-ring.service";

export default function EldenRingCharPage() {
	const params = useParams()

	const [eldenChar, setEldenChar] = useState<CharacterEldenRing | null>(null)
	const [loading, setLoading] = useState<boolean>(false)

	useEffect(() => {

		if (!params.id)
			return;

		getCharacter(params.id);
	}, [params])

	const getCharacter = async (id: string) => {
		setLoading(true);
		try {
			console.log(id);
			const response = await EldenRingService.getCharacter(id);



			setEldenChar(response);
		} catch (err) {
			console.log('error getting elden char', err)
		} finally {
			setLoading(false);
		}
	}

	if (loading)
		return <article className="flex flex-col gap-4 container m-auto">
			<Spinner />
		</article>

	return (
		<article className="flex flex-col gap-4 container m-auto">
			<h1 className="text-4xl text-center">{eldenChar?.name}</h1>
			<Divider className="" />

			<section className="flex flex-wrap gap-2">
				{/* Base */}
				<CharacterSectionContainer sectionTitle="Base">
					<CharacterSection title="Body Type">
						{eldenChar?.base.bodyType}
					</CharacterSection>
					<CharacterSection title="Age">
						{eldenChar?.base.age}
					</CharacterSection>
				</CharacterSectionContainer>

				<CharacterSectionContainer sectionTitle="Skin Color">
					<CharacterSection title="Skin Rgb">
						<CharacterColor color={eldenChar?.skinColor} />
					</CharacterSection>
				</CharacterSectionContainer>

				{/* Adjust Face Tempalte */}
				<CharacterSectionContainer sectionTitle="Adjust Face Template">
					<CharacterSection title="Structure">
						{eldenChar?.adjustFaceTemplate.structure}
					</CharacterSection>
					<CharacterSection title="Emphasis">
						{eldenChar?.adjustFaceTemplate.emphasis}
					</CharacterSection>
					<CharacterSection title="Age">
						{eldenChar?.adjustFaceTemplate.age}
					</CharacterSection>
					<CharacterSection title="Aesthetic">
						{eldenChar?.adjustFaceTemplate.aesthetic}
					</CharacterSection>
				</CharacterSectionContainer>

				{/* Facial Balance */}
				<CharacterSectionContainer sectionTitle="Facial Balance">
					<CharacterSection title="Size">
						{eldenChar?.facialBalance.size}
					</CharacterSection>
					<CharacterSection title="Ratio">
						{eldenChar?.facialBalance.ratio}
					</CharacterSection>
					<CharacterSection title="Protrusion">
						{eldenChar?.facialBalance.prostrusion}
					</CharacterSection>
					<CharacterSection title="Vert.">
						{eldenChar?.facialBalance.veritcal}
					</CharacterSection>
					<CharacterSection title="Slant">
						{eldenChar?.facialBalance.slant}
					</CharacterSection>
					<CharacterSection title="Horiz.">
						{eldenChar?.facialBalance.horizontal}
					</CharacterSection>
				</CharacterSectionContainer>

				{/* Forehead/Glabella */}
				<CharacterSectionContainer sectionTitle="Forehead/Glabella">
					<CharacterSection title="Depth">
						{eldenChar?.foreheadGlabella.depth}
					</CharacterSection>
					<CharacterSection title="Protrusion">
						{eldenChar?.foreheadGlabella.prostrusion}
					</CharacterSection>
					<CharacterSection title="Height">
						{eldenChar?.foreheadGlabella.height}
					</CharacterSection>
					<CharacterSection title="Prot 1">
						{eldenChar?.foreheadGlabella.prot1}
					</CharacterSection>
					<CharacterSection title="Prot 2">
						{eldenChar?.foreheadGlabella.prot2}
					</CharacterSection>
					<CharacterSection title="Width">
						{eldenChar?.foreheadGlabella.width}
					</CharacterSection>
				</CharacterSectionContainer>

				{/* Brow ridge height */}
				<CharacterSectionContainer sectionTitle="Brow Ridge Height">
					<CharacterSection title="Height">
						{eldenChar?.browRidgeHeight.height}
					</CharacterSection>
					<CharacterSection title="Inner">
						{eldenChar?.browRidgeHeight.inner}
					</CharacterSection>
					<CharacterSection title="Outer">
						{eldenChar?.browRidgeHeight.outer}
					</CharacterSection>
				</CharacterSectionContainer>

				{/* Eyes */}
				<CharacterSectionContainer sectionTitle="Eyes">
					<CharacterSection title="Position">
						{eldenChar?.eyes.position}
					</CharacterSection>
					<CharacterSection title="Size">
						{eldenChar?.eyes.size}
					</CharacterSection>
					<CharacterSection title="Slant">
						{eldenChar?.eyes.slant}
					</CharacterSection>
					<CharacterSection title="Spacing">
						{eldenChar?.eyes.spacing}
					</CharacterSection>
				</CharacterSectionContainer>

				{/* Nose Ridge */}
				<CharacterSectionContainer sectionTitle="Nose Ridge">
					<CharacterSection title="Depth">
						{eldenChar?.noseRidge.depth}
					</CharacterSection>
					<CharacterSection title="Length">
						{eldenChar?.noseRidge.length}
					</CharacterSection>
					<CharacterSection title="Position">
						{eldenChar?.noseRidge.position}
					</CharacterSection>
					<CharacterSection title="Tip Height">
						{eldenChar?.noseRidge.tipHeight}
					</CharacterSection>
					<CharacterSection title="Protrusion">
						{eldenChar?.noseRidge.prostrusion}
					</CharacterSection>
					<CharacterSection title="Height">
						{eldenChar?.noseRidge.height}
					</CharacterSection>
					<CharacterSection title="Slant">
						{eldenChar?.noseRidge.slant}
					</CharacterSection>
				</CharacterSectionContainer>

				{/* Nostrils */}
				<CharacterSectionContainer sectionTitle="Nostrils">
					<CharacterSection title="Slant">
						{eldenChar?.nostrils.slant}
					</CharacterSection>
					<CharacterSection title="Size">
						{eldenChar?.nostrils.size}
					</CharacterSection>
					<CharacterSection title="Width">
						{eldenChar?.nostrils.width}
					</CharacterSection>
				</CharacterSectionContainer>

				{/* Cheeks */}
				<CharacterSectionContainer sectionTitle="Cheeks">
					<CharacterSection title="Height">
						{eldenChar?.cheeks.height}
					</CharacterSection>
					<CharacterSection title="Depth">
						{eldenChar?.cheeks.depth}
					</CharacterSection>
					<CharacterSection title="Width">
						{eldenChar?.cheeks.width}
					</CharacterSection>
					<CharacterSection title="Protrusion">
						{eldenChar?.cheeks.prostrusion}
					</CharacterSection>
					<CharacterSection title="Cheeks">
						{eldenChar?.cheeks.cheeks}
					</CharacterSection>
				</CharacterSectionContainer>

				{/* Lips */}
				<CharacterSectionContainer sectionTitle="Lips">
					<CharacterSection title="Shape">
						{eldenChar?.lips.shape}
					</CharacterSection>
					<CharacterSection title="Expression">
						{eldenChar?.lips.expression}
					</CharacterSection>
					<CharacterSection title="Fullness">
						{eldenChar?.lips.fullness}
					</CharacterSection>
					<CharacterSection title="Size">
						{eldenChar?.lips.size}
					</CharacterSection>
					<CharacterSection title="Protrusion">
						{eldenChar?.lips.prostrusion}
					</CharacterSection>
					<CharacterSection title="Thickness">
						{eldenChar?.lips.thickness}
					</CharacterSection>
				</CharacterSectionContainer>

				{/* Mouth */}
				<CharacterSectionContainer sectionTitle="Mouth">
					<CharacterSection title="Protrusion">
						{eldenChar?.mouth.prostrusion}
					</CharacterSection>
					<CharacterSection title="Slant">
						{eldenChar?.mouth.slant}
					</CharacterSection>
					<CharacterSection title="Occulsion">
						{eldenChar?.mouth.occlusion}
					</CharacterSection>
					<CharacterSection title="Position">
						{eldenChar?.mouth.position}
					</CharacterSection>
					<CharacterSection title="Width">
						{eldenChar?.mouth.width}
					</CharacterSection>
					<CharacterSection title="Distance">
						{eldenChar?.mouth.distance}
					</CharacterSection>
				</CharacterSectionContainer>

				{/* Chin */}
				<CharacterSectionContainer sectionTitle="Chin">
					<CharacterSection title="Chin Tip">
						{eldenChar?.chin.chinTip}
					</CharacterSection>
					<CharacterSection title="Length">
						{eldenChar?.chin.length}
					</CharacterSection>
					<CharacterSection title="Protrusion">
						{eldenChar?.chin.protrusion}
					</CharacterSection>
					<CharacterSection title="Depth">
						{eldenChar?.chin.depth}
					</CharacterSection>
					<CharacterSection title="Size">
						{eldenChar?.chin.size}
					</CharacterSection>
					<CharacterSection title="Height">
						{eldenChar?.chin.height}
					</CharacterSection>
					<CharacterSection title="Width">
						{eldenChar?.chin.width}
					</CharacterSection>
				</CharacterSectionContainer>

				{/* Jaw */}
				<CharacterSectionContainer sectionTitle="Jaw">
					<CharacterSection title="Protrusion">
						{eldenChar?.jaw.protrusion}
					</CharacterSection>
					<CharacterSection title="Width">
						{eldenChar?.jaw.width}
					</CharacterSection>
					<CharacterSection title="Lower">
						{eldenChar?.jaw.lower}
					</CharacterSection>
					<CharacterSection title="Contour">
						{eldenChar?.jaw.contour}
					</CharacterSection>
				</CharacterSectionContainer>

				{/* Hair */}
				<CharacterSectionContainer sectionTitle="Hair">
					<CharacterSection title="Hair Type">
						{eldenChar?.hair.hair}
					</CharacterSection>
					<CharacterSection title="Hair Color">
						<CharacterColor color={eldenChar?.hair.hairRgb} />
					</CharacterSection>
					<CharacterSection title="Hair Luster">
						{eldenChar?.hair.luster}
					</CharacterSection>
					<CharacterSection title="Roots">
						{eldenChar?.hair.roots}
					</CharacterSection>
					<CharacterSection title="White Hair">
						{eldenChar?.hair.white}
					</CharacterSection>
				</CharacterSectionContainer>

				{/* Eyebrows */}
				<CharacterSectionContainer sectionTitle="Eyebrows">
					<CharacterSection title="Brow Type">
						{eldenChar?.eyebrows.brow}
					</CharacterSection>
					<CharacterSection title="Brow Color">
						<CharacterColor color={eldenChar?.eyebrows.browRgb} />
					</CharacterSection>
					<CharacterSection title="Brow Luster">
						{eldenChar?.eyebrows.luster}
					</CharacterSection>
					<CharacterSection title="Brow Roots">
						{eldenChar?.eyebrows.roots}
					</CharacterSection>
					<CharacterSection title="White Brow">
						{eldenChar?.eyebrows.white}
					</CharacterSection>
				</CharacterSectionContainer>

				{/* Facial Hair */}
				<CharacterSectionContainer sectionTitle="Facial Hair">
					<CharacterSection title="Beard Type">
						{eldenChar?.facialHair.beard}
					</CharacterSection>
					<CharacterSection title="Beard Color">
						<CharacterColor color={eldenChar?.facialHair.beardRgb} />
					</CharacterSection>
					<CharacterSection title="Beard Luster">
						{eldenChar?.facialHair.luster}
					</CharacterSection>
					<CharacterSection title="Beard Roots">
						{eldenChar?.facialHair.roots}
					</CharacterSection>
					<CharacterSection title="White Beard">
						{eldenChar?.facialHair.white}
					</CharacterSection>
					<CharacterSection title="Beard Stubble">
						{eldenChar?.facialHair.stubble}
					</CharacterSection>
				</CharacterSectionContainer>

				{/* Eyelashes */}
				<CharacterSectionContainer sectionTitle="Eyelashes">
					<CharacterSection title="Eyelashes Type">
						{eldenChar?.eyelashes.eyelashes}
					</CharacterSection>
					<CharacterSection title="Eyelashes Color">
						<CharacterColor color={eldenChar?.eyelashes.eyelashRgb} />
					</CharacterSection>
				</CharacterSectionContainer>

				{/* Right Eye */}
				<CharacterSectionContainer sectionTitle="Right Eye">
					<CharacterSection title="Iris Size">
						{eldenChar?.rightEye.irisSize}
					</CharacterSection>
					<CharacterSection title="Iris Color">
						<CharacterColor color={eldenChar?.rightEye.irisRGB} />
					</CharacterSection>
					<CharacterSection title="Clouding">
						{eldenChar?.rightEye.clouding}
					</CharacterSection>
					<CharacterSection title="Clouding Color">
						<CharacterColor color={eldenChar?.rightEye.cloudRGB} />
					</CharacterSection>
					<CharacterSection title="White Color">
						<CharacterColor color={eldenChar?.rightEye.whiteRGB} />
					</CharacterSection>
					<CharacterSection title="Position">
						{eldenChar?.rightEye.position}
					</CharacterSection>
				</CharacterSectionContainer>

				{/* Left Eye */}
				<CharacterSectionContainer sectionTitle="Left Eye">
					<CharacterSection title="Iris Size">
						{eldenChar?.leftEye.irisSize}
					</CharacterSection>
					<CharacterSection title="Iris Color">
						<CharacterColor color={eldenChar?.leftEye.irisRGB} />
					</CharacterSection>
					<CharacterSection title="Clouding">
						{eldenChar?.leftEye.clouding}
					</CharacterSection>
					<CharacterSection title="Clouding Color">
						<CharacterColor color={eldenChar?.leftEye.cloudRGB} />
					</CharacterSection>
					<CharacterSection title="White Color">
						<CharacterColor color={eldenChar?.leftEye.whiteRGB} />
					</CharacterSection>
					<CharacterSection title="Position">
						{eldenChar?.leftEye.position}
					</CharacterSection>
				</CharacterSectionContainer>

				{/* Skin Features */}
				<CharacterSectionContainer sectionTitle="Skin Features">
					<CharacterSection title="Pores">
						{eldenChar?.skinFeatures.pores}
					</CharacterSection>
					<CharacterSection title="Luster">
						{eldenChar?.skinFeatures.luster}
					</CharacterSection>
					<CharacterSection title="Dark Circles">
						{eldenChar?.skinFeatures.darkCircles}
					</CharacterSection>
					<CharacterSection title="Dark Circle Color">
						<CharacterColor color={eldenChar?.skinFeatures.darkCircleRGB} />
					</CharacterSection>
				</CharacterSectionContainer>

				{/* Cosmetics */}
				<CharacterSectionContainer sectionTitle="Cosmetics">
					<CharacterSection title="Eyeliner">
						{eldenChar?.cosmetics.eyeliner}
					</CharacterSection>
					<CharacterSection title="Eyeliner Color">
						<CharacterColor color={eldenChar?.cosmetics.eyelinerRgb} />
					</CharacterSection>
					<CharacterSection title="Upper Eyelash">
						{eldenChar?.cosmetics.upper}
					</CharacterSection>
					<CharacterSection title="Upper Eyelash Color">
						<CharacterColor color={eldenChar?.cosmetics.upperRgb} />
					</CharacterSection>
					<CharacterSection title="Lower Eyelash">
						{eldenChar?.cosmetics.lower}
					</CharacterSection>
					<CharacterSection title="Lower Eyelash Color">
						<CharacterColor color={eldenChar?.cosmetics.lowerRgb} />
					</CharacterSection>
					<CharacterSection title="Cheeks">
						{eldenChar?.cosmetics.cheeks}
					</CharacterSection>
					<CharacterSection title="Cheeks Color">
						<CharacterColor color={eldenChar?.cosmetics.cheeksRgb} />
					</CharacterSection>
					<CharacterSection title="Lipstick">
						{eldenChar?.cosmetics.lipstick}
					</CharacterSection>
					<CharacterSection title="Lipstick Color">
						<CharacterColor color={eldenChar?.cosmetics.lipstickRgb} />
					</CharacterSection>
				</CharacterSectionContainer>

				{/* Tattoo and Eye Patch */}
				<CharacterSectionContainer sectionTitle="Tattoo and Eye Patch">
					<CharacterSection title="Tattoo Type">
						{eldenChar?.tattooMarkEyePatch.tattoo}
					</CharacterSection>
					<CharacterSection title="Tattoo Color">
						<CharacterColor color={eldenChar?.tattooMarkEyePatch.tattooRgb} />
					</CharacterSection>
					<CharacterSection title="Vertical">
						{eldenChar?.tattooMarkEyePatch.vertical}
					</CharacterSection>
					<CharacterSection title="Horizontal">
						{eldenChar?.tattooMarkEyePatch.horizontal}
					</CharacterSection>
					<CharacterSection title="Angle">
						{eldenChar?.tattooMarkEyePatch.angle}
					</CharacterSection>
					<CharacterSection title="Expansion">
						{eldenChar?.tattooMarkEyePatch.expansion}
					</CharacterSection>
					<CharacterSection title="Flip">
						{eldenChar?.tattooMarkEyePatch.flip ? 'Yes' : 'No'}
					</CharacterSection>
					<CharacterSection title="Eyepatch">
						{eldenChar?.tattooMarkEyePatch.eyepatch}
					</CharacterSection>
					<CharacterSection title="Eyepatch Color">
						<CharacterColor color={eldenChar?.tattooMarkEyePatch.eyepatchRgb} />
					</CharacterSection>
				</CharacterSectionContainer>

				{/* Body */}
				<CharacterSectionContainer sectionTitle="Body">
					<CharacterSection title="Head Size">
						{eldenChar?.body.head}
					</CharacterSection>
					<CharacterSection title="Chest Size">
						{eldenChar?.body.chest}
					</CharacterSection>
					<CharacterSection title="Abdomen Size">
						{eldenChar?.body.abdomen}
					</CharacterSection>
					<CharacterSection title="Arm Size">
						{eldenChar?.body.arms}
					</CharacterSection>
					<CharacterSection title="Leg Size">
						{eldenChar?.body.legs}
					</CharacterSection>
					<CharacterSection title="Body Hair">
						{eldenChar?.body.bodyHair}
					</CharacterSection>
					<CharacterSection title="Body Hair Color">
						<CharacterColor color={eldenChar?.body.bodyhairRgb} />
					</CharacterSection>
					<CharacterSection title="Muscle Type">
						{eldenChar?.body.muscle}
					</CharacterSection>
				</CharacterSectionContainer>




			</section>
		</article>
	)
}