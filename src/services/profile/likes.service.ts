import { API_BASE_URL } from "../../configurations/configs";
import { getLocalStorage } from "../../utilities/localStorage.utility";

const baseUrl = API_BASE_URL + '/profile';

export const LikesService = {
  getLikes: async () => {

    const token = JSON.parse(getLocalStorage('user'))["token"]

    const response = await fetch(`${baseUrl}/likes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
    });

    const result = await response.json();

    return result;
  },
  addLike: async (id: string) => {
    const token = JSON.parse(getLocalStorage('user'))["token"]

    const response = await fetch(`${baseUrl}/likes/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
    });

    const result = await response.json();

    return result;
  }
}