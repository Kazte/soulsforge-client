import { User } from "../user.model";


export interface CharacterBase {
	_id: number,
	name: string,
	user: User,
	game: CharacterGame,
}


export type CharacterGame = 'Elden Ring' | 'Dark Souls 3' | 'Dark Souls 2' | 'Dark Souls' | 'Bloodborne'