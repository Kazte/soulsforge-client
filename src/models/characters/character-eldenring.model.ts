import { CharacterEldenRing } from './character-eldenring.model';
import { CharacterBase, CharacterGame } from './character-base.model';
import { Color, defaultColor } from './color.model';
export interface CharacterEldenRing extends CharacterBase {
  base: {
    bodyType: CharacterEldenRing_BodyType,
    age: CharacterEldenRing_Age,
  }
  skinColor: Color,
  adjustFaceTemplate: {
    structure: number,
    emphasis: number,
    age: number,
    aesthetic: number
  },
  facialBalance: {
    size: number,
    ratio: number,
    prostrusion: number,
    veritcal: number,
    slant: number,
    horizontal: number
  },
  foreheadGlabella: {
    depth: number,
    prostrusion: number,
    height: number,
    prot1: number,
    prot2: number,
    width: number
  },
  browRidgeHeight: {
    height: number,
    inner: number,
    outer: number,
  },
  eyes: {
    position: number,
    size: number,
    slant: number,
    spacing: number
  },
  noseRidge: {
    depth: number,
    length: number,
    position: number,
    tipHeight: number,
    prostrusion: number,
    height: number,
    slant: number,
  },
  nostrils: {
    slant: number,
    size: number,
    width: number,
  },
  cheeks: {
    height: number,
    depth: number,
    width: number,
    prostrusion: number,
    cheeks: number,
  },
  lips: {
    shape: number,
    expression: number,
    fullness: number,
    size: number,
    prostrusion: number,
    thickness: number,
  },
  mouth: {
    prostrusion: number,
    slant: number,
    occlusion: number,
    position: number,
    width: number,
    distance: number,
  },
  chin: {
    chinTip: number,
    length: number,
    protrusion: number,
    depth: number,
    size: number,
    height: number,
    width: number,
  },
  jaw: {
    protrusion: number,
    width: number,
    lower: number,
    contour: number,
  },
  hair: {
    hair: number,
    hairRgb: Color,
    luster: number,
    roots: number,
    white: number,
  },
  eyebrows: {
    brow: number,
    browRgb: Color,
    luster: number,
    roots: number,
    white: number,
  },
  facialHair: {
    beard: number,
    beardRgb: Color,
    luster: number,
    roots: number,
    white: number,
    stubble: number,
  },
  eyelashes: {
    eyelashes: number,
    eyelashRgb: Color,
  },
  rightEye: CharacterEldenRing_EyeConfiguration,
  leftEye: CharacterEldenRing_EyeConfiguration,
  skinFeatures: {
    pores: number,
    luster: number,
    darkCircles: number,
    darkCircleRGB: Color,
  },
  cosmetics: {
    eyeliner: number,
    eyelinerRgb: Color,
    upper: number,
    upperRgb: Color,
    lower: number,
    lowerRgb: Color,
    cheeks: number,
    cheeksRgb: Color,
    lipstick: number,
    lipstickRgb: Color,
  },
  tattooMarkEyePatch: {
    tattoo: number,
    tattooRgb: Color,
    vertical: number,
    horizontal: number,
    angle: number,
    expansion: number,
    flip: boolean,
    eyepatch: number,
    eyepatchRgb: Color,
  },
  body: {
    head: number,
    chest: number,
    abdomen: number,
    arms: number,
    legs: number,
    bodyHair: number,
    bodyhairRgb: Color,
    muscle: CharacterEldenRing_Muscle,
  },
}


export enum CharacterEldenRing_Age { Young = 'Young', Mature = 'Mature', Aged = 'Aged' }

export enum CharacterEldenRing_BodyType { TypeA = 'Type A', TypeB = 'Type B' }

export enum CharacterEldenRing_Muscle { Standard = 'Standard', Muscular = 'Muscular' }

export const CharacterEldenRing_AgeKeys = Object.values(CharacterEldenRing_Age);

export const CharacterEldenRing_BodyTypeKeys = Object.values(CharacterEldenRing_BodyType);

export const CharacterEldenRing_MuscleKeys = Object.values(CharacterEldenRing_Muscle);




const defaultEldenCharacter: CharacterEldenRing = {
  base: {
    bodyType: CharacterEldenRing_BodyType.TypeA,
    age: CharacterEldenRing_Age.Mature,
  },
  skinColor: { ...defaultColor },
  adjustFaceTemplate: {
    structure: 0,
    emphasis: 0,
    age: 0,
    aesthetic: 0
  },
  facialBalance: {
    size: 0,
    ratio: 0,
    prostrusion: 0,
    veritcal: 0,
    slant: 0,
    horizontal: 0
  },
  foreheadGlabella: {
    depth: 0,
    prostrusion: 0,
    height: 0,
    prot1: 0,
    prot2: 0,
    width: 0
  },
  browRidgeHeight: {
    height: 0,
    inner: 0,
    outer: 0,
  },
  eyes: {
    position: 0,
    size: 0,
    slant: 0,
    spacing: 0
  },
  noseRidge: {
    depth: 0,
    length: 0,
    position: 0,
    tipHeight: 0,
    prostrusion: 0,
    height: 0,
    slant: 0,
  },
  nostrils: {
    slant: 0,
    size: 0,
    width: 0,
  },
  cheeks: {
    height: 0,
    depth: 0,
    width: 0,
    prostrusion: 0,
    cheeks: 0,
  },
  lips: {
    shape: 0,
    expression: 0,
    fullness: 0,
    size: 0,
    prostrusion: 0,
    thickness: 0,
  },
  mouth: {
    prostrusion: 0,
    slant: 0,
    occlusion: 0,
    position: 0,
    width: 0,
    distance: 0,
  },
  chin: {
    chinTip: 0,
    length: 0,
    protrusion: 0,
    depth: 0,
    size: 0,
    height: 0,
    width: 0,
  },
  jaw: {
    protrusion: 0,
    width: 0,
    lower: 0,
    contour: 0,
  },
  hair: {
    hair: 0,
    hairRgb: { ...defaultColor },
    luster: 0,
    roots: 0,
    white: 0,
  },
  eyebrows: {
    brow: 0,
    browRgb: { ...defaultColor },
    luster: 0,
    roots: 0,
    white: 0,
  },
  facialHair: {
    beard: 0,
    beardRgb: { ...defaultColor },
    luster: 0,
    roots: 0,
    white: 0,
    stubble: 0,
  },
  eyelashes: {
    eyelashes: 0,
    eyelashRgb: { ...defaultColor },
  },
  rightEye: {
    irisSize: 0,
    irisRGB: { ...defaultColor },
    clouding: 0,
    cloudRGB: { ...defaultColor },
    whiteRGB: { ...defaultColor },
    position: 0,
  },
  leftEye: {
    irisSize: 0,
    irisRGB: { ...defaultColor },
    clouding: 0,
    cloudRGB: { ...defaultColor },
    whiteRGB: { ...defaultColor },
    position: 0,
  },
  skinFeatures: {
    pores: 0,
    luster: 0,
    darkCircles: 0,
    darkCircleRGB: { ...defaultColor },
  },
  cosmetics: {
    eyeliner: 0,
    eyelinerRgb: { ...defaultColor },
    upper: 0,
    upperRgb: { ...defaultColor },
    lower: 0,
    lowerRgb: { ...defaultColor },
    cheeks: 0,
    cheeksRgb: { ...defaultColor },
    lipstick: 0,
    lipstickRgb: { ...defaultColor },
  },
  tattooMarkEyePatch: {
    tattoo: 0,
    tattooRgb: { ...defaultColor },
    vertical: 0,
    horizontal: 0,
    angle: 0,
    expansion: 0,
    flip: false,
    eyepatch: 0,
    eyepatchRgb: { ...defaultColor },
  },
  body: {
    head: 0,
    chest: 0,
    abdomen: 0,
    arms: 0,
    legs: 0,
    bodyHair: 0,
    bodyhairRgb: { ...defaultColor },
    muscle: CharacterEldenRing_Muscle.Standard,
  },
  game: CharacterGame.EldenRing,
};

export default defaultEldenCharacter;



export type CharacterEldenRing_EyeConfiguration = {
  irisSize: number,
  irisRGB: Color,
  clouding: number,
  cloudRGB: Color,
  whiteRGB: Color,
  position: number,
}