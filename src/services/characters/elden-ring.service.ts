import { API_BASE_URL } from "../../configurations/configs";
import { CharacterEldenRing } from "../../models/characters/character-eldenring.model";
// import { CharacterEldenRing } from "../../models/characters/character-eldenring.model";

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
  createCharacter: async (character: CharacterEldenRing) => {
    const user = localStorage.getItem('user');

    if (!user) {
      throw new Error('User not found');
    }

    console.log(character);

    const token = JSON.parse(user).token;
    const response = await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(character),
    })

    const result = await response.json();

    return result;
  },
  updateCharacter: async (id: string, character: CharacterEldenRing) => {
    const user = localStorage.getItem('user');

    if (!user) {
      throw new Error('User not found');
    }

    const token = JSON.parse(user).token;
    const response = await fetch(`${baseUrl}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(character),
    });


    const result = await response.json();

    return result;
  },
  deleteCharacter: async (id: string) => {
    const user = localStorage.getItem('user');

    if (!user) {
      throw new Error('User not found');
    }

    const token = JSON.parse(user).token;

    const response = await fetch(`${baseUrl}/${id}`, {
      method: 'DELETE'
      , headers: {
        'Content-Type': 'application/json'
        , 'Authorization': `Bearer ${token}`
      }
    })

    const result = await response.json();

    return result;
  }
}