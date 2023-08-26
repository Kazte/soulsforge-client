import { User } from "../user.model";


export interface CharacterBase {
  _id: string,
  name: string,
  description: string,
  imageUrl: string,
  user: User | string,
  game: CharacterGame,
}


export enum CharacterGame { EldenRing = 'Elden Ring', DarkSouls3 = 'Dark Souls 3', DarkSouls2 = 'Dark Souls 2', DarkSouls = 'Dark Souls', Bloodborne = 'Bloodborne' }

export const CharacterGameKeys = Object.keys(CharacterGame);

