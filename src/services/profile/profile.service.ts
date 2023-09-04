import { API_BASE_URL } from "../../configurations/configs";

const baseUrl = API_BASE_URL + '/profile';

export const ProfileService = {
  getProfile: async (id: string) => {
    const response = await fetch(`${baseUrl}/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const result = await response.json();
    return result;
  },
  getProfileByUsername: async (username: string) => {
    const response = await fetch(`${baseUrl}/username/${username}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const result = await response.json();
    return result;
  }
}