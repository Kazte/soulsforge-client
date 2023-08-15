import { CharacterBase } from './character-base.model';
import { Color } from './color.model';
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



export type CharacterEldenRing_Age = 'Young' | 'Mature' | 'Aged';

export type CharacterEldenRing_BodyType = 'Type A' | 'Type B';

export type CharacterEldenRing_Muscle = 'Standard' | 'Muscular';

export type CharacterEldenRing_EyeConfiguration = {
	irisSize: number,
	irisRGB: Color,
	clouding: number,
	cloudRGB: Color,
	whiteRGB: Color,
	position: number,
}