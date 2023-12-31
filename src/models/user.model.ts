import { CharacterEldenRing } from "./characters/character-eldenring.model";

export interface UserInfo {
	id: string;
	username: string;
	email: string;
	token: string;
}

export interface User {
	_id: string;
	username: string;
	email: string;
	characters_eldenRing: CharacterEldenRing[];
}