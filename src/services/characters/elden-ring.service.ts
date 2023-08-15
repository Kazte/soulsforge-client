import { API_BASE_URL } from "../../configurations/configs";
import { CharacterEldenRing } from "../../models/characters/character-eldenring.model";

const baseUrl = API_BASE_URL + '/character-eldenring';

export const EldenRingService = {
	getCharacters: async () => {
		const response = await fetch(baseUrl, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});

		const result = await response.json();

		return result;
	},

	getCharacter: async (id: string) => {
		const response = await fetch(`${baseUrl}/${id}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});

		const result = await response.json();

		return result;
	},
	getCharacterByUser: async (id: string) => {
		const response = await fetch(`${baseUrl}/byUser/${id}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});

		const result = await response.json();

		return result;
	},
	createCharacter: async (character: CharacterEldenRing) => { throw new Error("Not implemented"); },
	updateCharacter: async (id: string, character: CharacterEldenRing) => { throw new Error("Not implemented"); },
	deleteCharacter: async (id: string) => { throw new Error("Not implemented"); },
}