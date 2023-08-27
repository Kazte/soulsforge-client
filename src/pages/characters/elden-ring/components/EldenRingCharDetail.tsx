import CharacterColor from "../../../../components/characters/CharacterColor";
import { Color } from "../../../../models/characters/color.model";
import CharacterLabel from "../../../../components/characters/CharacterLabel";
import CharacterSection from "../../../../components/characters/CharacterSection";
import CharacterSectionContainer from "../../../../components/characters/CharacterSectionContainer";
import { CharacterEldenRing, CharacterEldenRing_AgeKeys, CharacterEldenRing_BodyTypeKeys, CharacterEldenRing_MuscleKeys } from "../../../../models/characters/character-eldenring.model";
import CharacterCheckbox from "../../../../components/characters/CharacterCheckbox";
import CharacterDropdown from "../../../../components/characters/CharacterDropdown";

interface Props {
  eldenChar: CharacterEldenRing,
  editing?: boolean,
  onChange?: (char: CharacterEldenRing) => void
}
export default function EldenRingCharDetail({ eldenChar, editing: isEditing = false, onChange }: Props) {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (key: string, value: number | string | boolean | Color) => {
    if (!onChange)
      return;

    const path = key.split('.');



    const newChar = { ...eldenChar };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let current: any = newChar;

    for (let i = 0;i < path.length;i++) {
      const p = path[i];
      if (i == path.length - 1) {

        if (typeof value === 'object') {
          value = value as Color;
        } else if (value === '' || value === null || value === undefined) {
          value = 0;
        }

        current[p] = value;
      } else {
        current = current[p];
      }
    }

    onChange(newChar);
  }


  return (
    <>
      {/* Base */}
      <CharacterSectionContainer sectionTitle="Base">
        <CharacterSection title="Body Type">
          <CharacterDropdown value={eldenChar?.base.bodyType.toString()} labelsMap={CharacterEldenRing_BodyTypeKeys} editing={isEditing} onChange={v => handleChange('base.bodyType', v)} />
        </CharacterSection>
        <CharacterSection title="Age">
          <CharacterDropdown value={eldenChar?.base.age.toString()} labelsMap={CharacterEldenRing_AgeKeys} editing={isEditing} onChange={v => handleChange('base.age', v)} />
        </CharacterSection>
      </CharacterSectionContainer>

      <CharacterSectionContainer sectionTitle="Skin Color">
        <CharacterSection title="Skin Rgb">
          <CharacterColor onChange={color => handleChange('skinColor', color)}
            editing={isEditing} color={eldenChar?.skinColor} />
        </CharacterSection>
      </CharacterSectionContainer>

      {/* Adjust Face Tempalte */}
      <CharacterSectionContainer sectionTitle="Adjust Face Template">
        <CharacterSection title="Structure">
          <CharacterLabel value={eldenChar?.adjustFaceTemplate.structure} editing={isEditing} onChange={v => handleChange('adjustFaceTemplate.structure', v)} />
        </CharacterSection>
        <CharacterSection title="Emphasis">
          <CharacterLabel value={eldenChar?.adjustFaceTemplate.emphasis} editing={isEditing} onChange={v => handleChange('adjustFaceTemplate.emphasis', v)} />
        </CharacterSection>
        <CharacterSection title="Age">
          <CharacterLabel value={eldenChar?.adjustFaceTemplate.age} editing={isEditing} onChange={v => handleChange('adjustFaceTemplate.age', v)} />
        </CharacterSection>
        <CharacterSection title="Aesthetic">
          <CharacterLabel value={eldenChar?.adjustFaceTemplate.aesthetic} editing={isEditing} onChange={v => handleChange('adjustFaceTemplate.aesthetic', v)} />
        </CharacterSection>
      </CharacterSectionContainer>

      {/* Facial Balance */}
      <CharacterSectionContainer sectionTitle="Facial Balance">
        <CharacterSection title="Size">
          <CharacterLabel value={eldenChar?.facialBalance.size} editing={isEditing} onChange={v => handleChange('facialBalance.size', v)} />
        </CharacterSection>
        <CharacterSection title="Ratio">
          <CharacterLabel value={eldenChar?.facialBalance.ratio} editing={isEditing} onChange={v => handleChange('facialBalance.ratio', v)} />
        </CharacterSection>
        <CharacterSection title="Protrusion">
          <CharacterLabel value={eldenChar?.facialBalance.prostrusion} editing={isEditing} onChange={v => handleChange('facialBalance.prostrusion', v)} />
        </CharacterSection>
        <CharacterSection title="Vert.">
          <CharacterLabel value={eldenChar?.facialBalance.veritcal} editing={isEditing} onChange={v => handleChange('facialBalance.veritcal', v)} />
        </CharacterSection>
        <CharacterSection title="Slant">
          <CharacterLabel value={eldenChar?.facialBalance.slant} editing={isEditing} onChange={v => handleChange('facialBalance.slant', v)} />
        </CharacterSection>
        <CharacterSection title="Horiz.">
          <CharacterLabel value={eldenChar?.facialBalance.horizontal} editing={isEditing} onChange={v => handleChange('facialBalance.horizontal', v)} />
        </CharacterSection>
      </CharacterSectionContainer>

      {/* Forehead/Glabella */}
      <CharacterSectionContainer sectionTitle="Forehead/Glabella">
        <CharacterSection title="Depth">
          <CharacterLabel value={eldenChar?.foreheadGlabella.depth} editing={isEditing} onChange={v => handleChange('foreheadGlabella.depth', v)} />
        </CharacterSection>
        <CharacterSection title="Protrusion">
          <CharacterLabel value={eldenChar?.foreheadGlabella.prostrusion} editing={isEditing} onChange={v => handleChange('foreheadGlabella.prostrusion', v)} />
        </CharacterSection>
        <CharacterSection title="Height">
          <CharacterLabel value={eldenChar?.foreheadGlabella.height} editing={isEditing} onChange={v => handleChange('foreheadGlabella.height', v)} />
        </CharacterSection>
        <CharacterSection title="Prot 1">
          <CharacterLabel value={eldenChar?.foreheadGlabella.prot1} editing={isEditing} onChange={v => handleChange('foreheadGlabella.prot1', v)} />
        </CharacterSection>
        <CharacterSection title="Prot 2">
          <CharacterLabel value={eldenChar?.foreheadGlabella.prot2} editing={isEditing} onChange={v => handleChange('foreheadGlabella.prot2', v)} />
        </CharacterSection>
        <CharacterSection title="Width">
          <CharacterLabel value={eldenChar?.foreheadGlabella.width} editing={isEditing} onChange={v => handleChange('foreheadGlabella.width', v)} />
        </CharacterSection>
      </CharacterSectionContainer>

      {/* Brow ridge height */}
      <CharacterSectionContainer sectionTitle="Brow Ridge Height">
        <CharacterSection title="Height">
          <CharacterLabel value={eldenChar?.browRidgeHeight.height} editing={isEditing} onChange={v => handleChange('browRidgeHeight.height', v)} />
        </CharacterSection>
        <CharacterSection title="Inner">
          <CharacterLabel value={eldenChar?.browRidgeHeight.inner} editing={isEditing} onChange={v => handleChange('browRidgeHeight.inner', v)} />
        </CharacterSection>
        <CharacterSection title="Outer">
          <CharacterLabel value={eldenChar?.browRidgeHeight.outer} editing={isEditing} onChange={v => handleChange('browRidgeHeight.outer', v)} />
        </CharacterSection>
      </CharacterSectionContainer>

      {/* Eyes */}
      <CharacterSectionContainer sectionTitle="Eyes">
        <CharacterSection title="Position">
          <CharacterLabel value={eldenChar?.eyes.position} editing={isEditing} onChange={v => handleChange('eyes.position', v)} />
        </CharacterSection>
        <CharacterSection title="Size">
          <CharacterLabel value={eldenChar?.eyes.size} editing={isEditing} onChange={v => handleChange('eyes.size', v)} />
        </CharacterSection>
        <CharacterSection title="Slant">
          <CharacterLabel value={eldenChar?.eyes.slant} editing={isEditing} onChange={v => handleChange('eyes.slant', v)} />
        </CharacterSection>
        <CharacterSection title="Spacing">
          <CharacterLabel value={eldenChar?.eyes.spacing} editing={isEditing} onChange={v => handleChange('eyes.spacing', v)} />
        </CharacterSection>
      </CharacterSectionContainer>

      {/* Nose Ridge */}
      <CharacterSectionContainer sectionTitle="Nose Ridge">
        <CharacterSection title="Depth">
          <CharacterLabel value={eldenChar?.noseRidge.depth} editing={isEditing} onChange={v => handleChange('noseRidge.depth', v)} />
        </CharacterSection>
        <CharacterSection title="Length">
          <CharacterLabel value={eldenChar?.noseRidge.length} editing={isEditing} onChange={v => handleChange('noseRidge.length', v)} />
        </CharacterSection>
        <CharacterSection title="Position">
          <CharacterLabel value={eldenChar?.noseRidge.position} editing={isEditing} onChange={v => handleChange('noseRidge.position', v)} />
        </CharacterSection>
        <CharacterSection title="Tip Height">
          <CharacterLabel value={eldenChar?.noseRidge.tipHeight} editing={isEditing} onChange={v => handleChange('noseRidge.tipHeight', v)} />
        </CharacterSection>
        <CharacterSection title="Protrusion">
          <CharacterLabel value={eldenChar?.noseRidge.prostrusion} editing={isEditing} onChange={v => handleChange('noseRidge.prostrusion', v)} />
        </CharacterSection>
        <CharacterSection title="Height">
          <CharacterLabel value={eldenChar?.noseRidge.height} editing={isEditing} onChange={v => handleChange('noseRidge.height', v)} />
        </CharacterSection>
        <CharacterSection title="Slant">
          <CharacterLabel value={eldenChar?.noseRidge.slant} editing={isEditing} onChange={v => handleChange('noseRidge.slant', v)} />
        </CharacterSection>
      </CharacterSectionContainer>

      {/* Nostrils */}
      <CharacterSectionContainer sectionTitle="Nostrils">
        <CharacterSection title="Slant">
          <CharacterLabel value={eldenChar?.nostrils.slant} editing={isEditing} onChange={v => handleChange('nostrils.slant', v)} />
        </CharacterSection>
        <CharacterSection title="Size">
          <CharacterLabel value={eldenChar?.nostrils.size} editing={isEditing} onChange={v => handleChange('nostrils.size', v)} />
        </CharacterSection>
        <CharacterSection title="Width">
          <CharacterLabel value={eldenChar?.nostrils.width} editing={isEditing} onChange={v => handleChange('nostrils.width', v)} />
        </CharacterSection>
      </CharacterSectionContainer>

      {/* Cheeks */}
      <CharacterSectionContainer sectionTitle="Cheeks">
        <CharacterSection title="Height">
          <CharacterLabel value={eldenChar?.cheeks.height} editing={isEditing} onChange={v => handleChange('cheeks.height', v)} />
        </CharacterSection>
        <CharacterSection title="Depth">
          <CharacterLabel value={eldenChar?.cheeks.depth} editing={isEditing} onChange={v => handleChange('cheeks.depth', v)} />
        </CharacterSection>
        <CharacterSection title="Width">
          <CharacterLabel value={eldenChar?.cheeks.width} editing={isEditing} onChange={v => handleChange('cheeks.width', v)} />
        </CharacterSection>
        <CharacterSection title="Protrusion">
          <CharacterLabel value={eldenChar?.cheeks.prostrusion} editing={isEditing} onChange={v => handleChange('cheeks.prostrusion', v)} />
        </CharacterSection>
        <CharacterSection title="Cheeks">
          <CharacterLabel value={eldenChar?.cheeks.cheeks} editing={isEditing} onChange={v => handleChange('cheeks.cheeks', v)} />
        </CharacterSection>
      </CharacterSectionContainer>

      {/* Lips */}
      <CharacterSectionContainer sectionTitle="Lips">
        <CharacterSection title="Shape">
          <CharacterLabel value={eldenChar?.lips.shape} editing={isEditing} onChange={v => handleChange('lips.shape', v)} />
        </CharacterSection>
        <CharacterSection title="Expression">
          <CharacterLabel value={eldenChar?.lips.expression} editing={isEditing} onChange={v => handleChange('lips.expression', v)} />
        </CharacterSection>
        <CharacterSection title="Fullness">
          <CharacterLabel value={eldenChar?.lips.fullness} editing={isEditing} onChange={v => handleChange('lips.fullness', v)} />
        </CharacterSection>
        <CharacterSection title="Size">
          <CharacterLabel value={eldenChar?.lips.size} editing={isEditing} onChange={v => handleChange('lips.size', v)} />
        </CharacterSection>
        <CharacterSection title="Protrusion">
          <CharacterLabel value={eldenChar?.lips.prostrusion} editing={isEditing} onChange={v => handleChange('lips.prostrusion', v)} />
        </CharacterSection>
        <CharacterSection title="Thickness">
          <CharacterLabel value={eldenChar?.lips.thickness} editing={isEditing} onChange={v => handleChange('lips.thickness', v)} />
        </CharacterSection>
      </CharacterSectionContainer>

      {/* Mouth */}
      <CharacterSectionContainer sectionTitle="Mouth">
        <CharacterSection title="Protrusion">
          <CharacterLabel value={eldenChar?.mouth.prostrusion} editing={isEditing} onChange={v => handleChange('mouth.prostrusion', v)} />
        </CharacterSection>
        <CharacterSection title="Slant">
          <CharacterLabel value={eldenChar?.mouth.slant} editing={isEditing} onChange={v => handleChange('mouth.slant', v)} />
        </CharacterSection>
        <CharacterSection title="Occulsion">
          <CharacterLabel value={eldenChar?.mouth.occlusion} editing={isEditing} onChange={v => handleChange('mouth.occlusion', v)} />
        </CharacterSection>
        <CharacterSection title="Position">
          <CharacterLabel value={eldenChar?.mouth.position} editing={isEditing} onChange={v => handleChange('mouth.position', v)} />
        </CharacterSection>
        <CharacterSection title="Width">
          <CharacterLabel value={eldenChar?.mouth.width} editing={isEditing} onChange={v => handleChange('mouth.width', v)} />
        </CharacterSection>
        <CharacterSection title="Distance">
          <CharacterLabel value={eldenChar?.mouth.distance} editing={isEditing} onChange={v => handleChange('mouth.distance', v)} />
        </CharacterSection>
      </CharacterSectionContainer>

      {/* Chin */}
      <CharacterSectionContainer sectionTitle="Chin">
        <CharacterSection title="Chin Tip">
          <CharacterLabel value={eldenChar?.chin.chinTip} editing={isEditing} onChange={v => handleChange('chin.chinTip', v)} />
        </CharacterSection>
        <CharacterSection title="Length">
          <CharacterLabel value={eldenChar?.chin.length} editing={isEditing} onChange={v => handleChange('chin.length', v)} />
        </CharacterSection>
        <CharacterSection title="Protrusion">
          <CharacterLabel value={eldenChar?.chin.protrusion} editing={isEditing} onChange={v => handleChange('chin.protrusion', v)} />
        </CharacterSection>
        <CharacterSection title="Depth">
          <CharacterLabel value={eldenChar?.chin.depth} editing={isEditing} onChange={v => handleChange('chin.depth', v)} />
        </CharacterSection>
        <CharacterSection title="Size">
          <CharacterLabel value={eldenChar?.chin.size} editing={isEditing} onChange={v => handleChange('chin.size', v)} />
        </CharacterSection>
        <CharacterSection title="Height">
          <CharacterLabel value={eldenChar?.chin.height} editing={isEditing} onChange={v => handleChange('chin.height', v)} />
        </CharacterSection>
        <CharacterSection title="Width">
          <CharacterLabel value={eldenChar?.chin.width} editing={isEditing} onChange={v => handleChange('chin.width', v)} />
        </CharacterSection>
      </CharacterSectionContainer>

      {/* Jaw */}
      <CharacterSectionContainer sectionTitle="Jaw">
        <CharacterSection title="Protrusion">
          <CharacterLabel value={eldenChar?.jaw.protrusion} editing={isEditing} onChange={v => handleChange('jaw.protrusion', v)} />
        </CharacterSection>
        <CharacterSection title="Width">
          <CharacterLabel value={eldenChar?.jaw.width} editing={isEditing} onChange={v => handleChange('jaw.width', v)} />
        </CharacterSection>
        <CharacterSection title="Lower">
          <CharacterLabel value={eldenChar?.jaw.lower} editing={isEditing} onChange={v => handleChange('jaw.lower', v)} />
        </CharacterSection>
        <CharacterSection title="Contour">
          <CharacterLabel value={eldenChar?.jaw.contour} editing={isEditing} onChange={v => handleChange('jaw.contour', v)} />
        </CharacterSection>
      </CharacterSectionContainer>

      {/* Hair */}
      <CharacterSectionContainer sectionTitle="Hair">
        <CharacterSection title="Hair Type">
          <CharacterLabel editing={isEditing} value={eldenChar?.hair.hair} onChange={v => handleChange('hair.hair', v)} />
        </CharacterSection>
        <CharacterSection title="Hair Color">
          <CharacterColor editing={isEditing} color={eldenChar?.hair.hairRgb} onChange={v => handleChange('hair.hairRgb', v)} />
        </CharacterSection>
        <CharacterSection title="Hair Luster">
          <CharacterLabel editing={isEditing} value={eldenChar?.hair.luster} onChange={v => handleChange('hair.luster', v)} />
        </CharacterSection>
        <CharacterSection title="Roots">
          <CharacterLabel editing={isEditing} value={eldenChar?.hair.roots} onChange={v => handleChange('hair.roots', v)} />
        </CharacterSection>
        <CharacterSection title="White Hair">
          <CharacterLabel editing={isEditing} value={eldenChar?.hair.white} onChange={v => handleChange('hair.white', v)} />
        </CharacterSection>
      </CharacterSectionContainer>

      {/* Eyebrows */}
      <CharacterSectionContainer sectionTitle="Eyebrows">
        <CharacterSection title="Brow Type">
          <CharacterLabel editing={isEditing} value={eldenChar?.eyebrows.brow} onChange={v => handleChange('eyebrows.brow', v)} />
        </CharacterSection>
        <CharacterSection title="Brow Color">
          <CharacterColor editing={isEditing} color={eldenChar?.eyebrows.browRgb} onChange={v => handleChange('eyebrows.browRgb', v)} />
        </CharacterSection>
        <CharacterSection title="Brow Luster">
          <CharacterLabel editing={isEditing} value={eldenChar?.eyebrows.luster} onChange={v => handleChange('eyebrows.luster', v)} />
        </CharacterSection>
        <CharacterSection title="Brow Roots">
          <CharacterLabel editing={isEditing} value={eldenChar?.eyebrows.roots} onChange={v => handleChange('eyebrows.roots', v)} />
        </CharacterSection>
        <CharacterSection title="White Brow">
          <CharacterLabel editing={isEditing} value={eldenChar?.eyebrows.white} onChange={v => handleChange('eyebrows.white', v)} />
        </CharacterSection>
      </CharacterSectionContainer>

      {/* Facial Hair */}
      <CharacterSectionContainer sectionTitle="Facial Hair">
        <CharacterSection title="Beard Type">
          <CharacterLabel editing={isEditing} value={eldenChar?.facialHair.beard} onChange={v => handleChange('facialHair.beard', v)} />
        </CharacterSection>
        <CharacterSection title="Beard Color">
          <CharacterColor editing={isEditing} color={eldenChar?.facialHair.beardRgb} onChange={v => handleChange('facialHair.beardRgb', v)} />
        </CharacterSection>
        <CharacterSection title="Beard Luster">
          <CharacterLabel editing={isEditing} value={eldenChar?.facialHair.luster} onChange={v => handleChange('facialHair.luster', v)} />
        </CharacterSection>
        <CharacterSection title="Beard Roots">
          <CharacterLabel editing={isEditing} value={eldenChar?.facialHair.roots} onChange={v => handleChange('facialHair.roots', v)} />
        </CharacterSection>
        <CharacterSection title="White Beard">
          <CharacterLabel editing={isEditing} value={eldenChar?.facialHair.white} onChange={v => handleChange('facialHair.white', v)} />
        </CharacterSection>
        <CharacterSection title="Beard Stubble">
          <CharacterLabel editing={isEditing} value={eldenChar?.facialHair.stubble} onChange={v => handleChange('facialHair.stubble', v)} />
        </CharacterSection>
      </CharacterSectionContainer>

      {/* Eyelashes */}
      <CharacterSectionContainer sectionTitle="Eyelashes">
        <CharacterSection title="Eyelashes Type">
          <CharacterLabel editing={isEditing} value={eldenChar?.eyelashes.eyelashes} onChange={v => handleChange('eyelashes.eyelashes', v)} />
        </CharacterSection>
        <CharacterSection title="Eyelashes Color">
          <CharacterColor editing={isEditing} color={eldenChar?.eyelashes.eyelashRgb} onChange={v => handleChange('eyelashes.eyelashRgb', v)} />
        </CharacterSection>
      </CharacterSectionContainer>

      {/* Right Eye */}
      <CharacterSectionContainer sectionTitle="Right Eye">
        <CharacterSection title="Iris Size">
          <CharacterLabel editing={isEditing} value={eldenChar?.rightEye.irisSize} onChange={v => handleChange('rightEye.irisSize', v)} />
        </CharacterSection>
        <CharacterSection title="Iris Color">
          <CharacterColor editing={isEditing} color={eldenChar?.rightEye.irisRGB} onChange={v => handleChange('rightEye.irisRGB', v)} />
        </CharacterSection>
        <CharacterSection title="Clouding">
          <CharacterLabel editing={isEditing} value={eldenChar?.rightEye.clouding} onChange={v => handleChange('rightEye.clouding', v)} />
        </CharacterSection>
        <CharacterSection title="Clouding Color">
          <CharacterColor editing={isEditing} color={eldenChar?.rightEye.cloudRGB} onChange={v => handleChange('rightEye.cloudRGB', v)} />
        </CharacterSection>
        <CharacterSection title="White Color">
          <CharacterColor editing={isEditing} color={eldenChar?.rightEye.whiteRGB} onChange={v => handleChange('rightEye.whiteRGB', v)} />
        </CharacterSection>
        <CharacterSection title="Position">
          <CharacterLabel editing={isEditing} value={eldenChar?.rightEye.position} onChange={v => handleChange('rightEye.position', v)} />
        </CharacterSection>
      </CharacterSectionContainer>

      {/* Left Eye */}
      <CharacterSectionContainer sectionTitle="Left Eye">
        <CharacterSection title="Iris Size">
          <CharacterLabel editing={isEditing} value={eldenChar?.leftEye.irisSize} onChange={v => handleChange('leftEye.irisSize', v)} />
        </CharacterSection>
        <CharacterSection title="Iris Color">
          <CharacterColor editing={isEditing} color={eldenChar?.leftEye.irisRGB} onChange={v => handleChange('leftEye.irisRGB', v)} />
        </CharacterSection>
        <CharacterSection title="Clouding">
          <CharacterLabel editing={isEditing} value={eldenChar?.leftEye.clouding} onChange={v => handleChange('leftEye.clouding', v)} />
        </CharacterSection>
        <CharacterSection title="Clouding Color">
          <CharacterColor editing={isEditing} color={eldenChar?.leftEye.cloudRGB} onChange={v => handleChange('leftEye.cloudRGB', v)} />
        </CharacterSection>
        <CharacterSection title="White Color">
          <CharacterColor editing={isEditing} color={eldenChar?.leftEye.whiteRGB} onChange={v => handleChange('leftEye.whiteRGB', v)} />
        </CharacterSection>
        <CharacterSection title="Position">
          <CharacterLabel editing={isEditing} value={eldenChar?.leftEye.position} onChange={v => handleChange('leftEye.position', v)} />
        </CharacterSection>
      </CharacterSectionContainer>

      {/* Skin Features */}
      <CharacterSectionContainer sectionTitle="Skin Features">
        <CharacterSection title="Pores">
          <CharacterLabel editing={isEditing} value={eldenChar?.skinFeatures.pores} onChange={v => handleChange('skinFeatures.pores', v)} />
        </CharacterSection>
        <CharacterSection title="Luster">
          <CharacterLabel editing={isEditing} value={eldenChar?.skinFeatures.luster} onChange={v => handleChange('skinFeatures.luster', v)} />
        </CharacterSection>
        <CharacterSection title="Dark Circles">
          <CharacterLabel editing={isEditing} value={eldenChar?.skinFeatures.darkCircles} onChange={v => handleChange('skinFeatures.darkCircles', v)} />
        </CharacterSection>
        <CharacterSection title="Dark Circle Color">
          <CharacterColor editing={isEditing} color={eldenChar?.skinFeatures.darkCircleRGB} onChange={v => handleChange('skinFeatures.darkCircleRGB', v)} />
        </CharacterSection>
      </CharacterSectionContainer>

      {/* Cosmetics */}
      <CharacterSectionContainer sectionTitle="Cosmetics">
        <CharacterSection title="Eyeliner">
          <CharacterLabel editing={isEditing} value={eldenChar?.cosmetics.eyeliner} onChange={v => handleChange('cosmetics.eyeliner', v)} />
        </CharacterSection>
        <CharacterSection title="Eyeliner Color">
          <CharacterColor editing={isEditing} color={eldenChar?.cosmetics.eyelinerRgb} onChange={v => handleChange('cosmetics.eyelinerRgb', v)} />
        </CharacterSection>
        <CharacterSection title="Upper Eyelash">
          <CharacterLabel editing={isEditing} value={eldenChar?.cosmetics.upper} onChange={v => handleChange('cosmetics.upper', v)} />
        </CharacterSection>
        <CharacterSection title="Upper Eyelash Color">
          <CharacterColor editing={isEditing} color={eldenChar?.cosmetics.upperRgb} onChange={v => handleChange('cosmetics.upperRgb', v)} />
        </CharacterSection>
        <CharacterSection title="Lower Eyelash">
          <CharacterLabel editing={isEditing} value={eldenChar?.cosmetics.lower} onChange={v => handleChange('cosmetics.lower', v)} />
        </CharacterSection>
        <CharacterSection title="Lower Eyelash Color">
          <CharacterColor editing={isEditing} color={eldenChar?.cosmetics.lowerRgb} onChange={v => handleChange('cosmetics.lowerRgb', v)} />
        </CharacterSection>
        <CharacterSection title="Cheeks">
          <CharacterLabel editing={isEditing} value={eldenChar?.cosmetics.cheeks} onChange={v => handleChange('cosmetics.cheeks', v)} />
        </CharacterSection>
        <CharacterSection title="Cheeks Color">
          <CharacterColor editing={isEditing} color={eldenChar?.cosmetics.cheeksRgb} onChange={v => handleChange('cosmetics.cheeksRgb', v)} />
        </CharacterSection>
        <CharacterSection title="Lipstick">
          <CharacterLabel editing={isEditing} value={eldenChar?.cosmetics.lipstick} onChange={v => handleChange('cosmetics.lipstick', v)} />
        </CharacterSection>
        <CharacterSection title="Lipstick Color">
          <CharacterColor editing={isEditing} color={eldenChar?.cosmetics.lipstickRgb} onChange={v => handleChange('cosmetics.lipstickRgb', v)} />
        </CharacterSection>
      </CharacterSectionContainer>

      {/* Tattoo and Eye Patch */}
      <CharacterSectionContainer sectionTitle="Tattoo and Eye Patch">
        <CharacterSection title="Tattoo Type">
          <CharacterLabel editing={isEditing} value={eldenChar?.tattooMarkEyePatch.tattoo} onChange={v => handleChange('tattooMarkEyePatch.tattoo', v)} />
        </CharacterSection>
        <CharacterSection title="Tattoo Color">
          <CharacterColor editing={isEditing} color={eldenChar?.tattooMarkEyePatch.tattooRgb} onChange={v => handleChange('tattooMarkEyePatch.tattooRgb', v)} />
        </CharacterSection>
        <CharacterSection title="Vertical">
          <CharacterLabel editing={isEditing} value={eldenChar?.tattooMarkEyePatch.vertical} onChange={v => handleChange('tattooMarkEyePatch.vertical', v)} />
        </CharacterSection>
        <CharacterSection title="Horizontal">
          <CharacterLabel editing={isEditing} value={eldenChar?.tattooMarkEyePatch.horizontal} onChange={v => handleChange('tattooMarkEyePatch.horizontal', v)} />
        </CharacterSection>
        <CharacterSection title="Angle">
          <CharacterLabel editing={isEditing} value={eldenChar?.tattooMarkEyePatch.angle} onChange={v => handleChange('tattooMarkEyePatch.angle', v)} />
        </CharacterSection>
        <CharacterSection title="Expansion">
          <CharacterLabel editing={isEditing} value={eldenChar?.tattooMarkEyePatch.expansion} onChange={v => handleChange('tattooMarkEyePatch.expansion', v)} />
        </CharacterSection>
        <CharacterSection title="Flip">
          <CharacterCheckbox editing={isEditing} value={eldenChar?.tattooMarkEyePatch.flip} onChange={v => handleChange('tattooMarkEyePatch.flip', v)} />
        </CharacterSection>
        <CharacterSection title="Eyepatch">
          <CharacterLabel editing={isEditing} value={eldenChar?.tattooMarkEyePatch.eyepatch} onChange={v => handleChange('tattooMarkEyePatch.eyepatch', v)} />
        </CharacterSection>
        <CharacterSection title="Eyepatch Color">
          <CharacterColor editing={isEditing} color={eldenChar?.tattooMarkEyePatch.eyepatchRgb} onChange={v => handleChange('tattooMarkEyePatch.eyepatchRgb', v)} />
        </CharacterSection>
      </CharacterSectionContainer>

      {/* Body */}
      <CharacterSectionContainer sectionTitle="Body">
        <CharacterSection title="Head Size">
          <CharacterLabel editing={isEditing} value={eldenChar?.body.head} onChange={v => handleChange('body.head', v)} />
        </CharacterSection>
        <CharacterSection title="Chest Size">
          <CharacterLabel editing={isEditing} value={eldenChar?.body.chest} onChange={v => handleChange('body.chest', v)} />
        </CharacterSection>
        <CharacterSection title="Abdomen Size">
          <CharacterLabel editing={isEditing} value={eldenChar?.body.abdomen} onChange={v => handleChange('body.abdomen', v)} />
        </CharacterSection>
        <CharacterSection title="Arm Size">
          <CharacterLabel editing={isEditing} value={eldenChar?.body.arms} onChange={v => handleChange('body.arms', v)} />
        </CharacterSection>
        <CharacterSection title="Leg Size">
          <CharacterLabel editing={isEditing} value={eldenChar?.body.legs} onChange={v => handleChange('body.legs', v)} />
        </CharacterSection>
        <CharacterSection title="Body Hair">
          <CharacterLabel editing={isEditing} value={eldenChar?.body.bodyHair} onChange={v => handleChange('body.bodyHair', v)} />
        </CharacterSection>
        <CharacterSection title="Body Hair Color">
          <CharacterColor editing={isEditing} color={eldenChar?.body.bodyhairRgb} onChange={v => handleChange('body.bodyhairRgb', v)} />
        </CharacterSection>
        <CharacterSection title="Muscle Type">
          <CharacterDropdown value={eldenChar?.body.muscle.toString()} labelsMap={CharacterEldenRing_MuscleKeys} editing={isEditing} onChange={v => handleChange('body.muscle', v)} />
        </CharacterSection>
      </CharacterSectionContainer></>
  )
}