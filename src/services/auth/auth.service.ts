import { API_BASE_URL } from "../../configurations/configs";
import { UserInfo } from "../../models/user.model";

const baseUrlAuth = API_BASE_URL + '/auth';

export interface AuthRepository {
	login: (email: string, password: string) => Promise<AuthResponse>;
	register: (username: string, email: string, password: string) => Promise<AuthResponse>;
	verify: (token: string) => Promise<AuthResponse>;
}

export type AuthResponse = {
	result: boolean;
	message: string;
	data: {
		user: UserInfo;
		token: string;
	}
}

class AuthService implements AuthRepository {
	async login(email: string, password: string): Promise<AuthResponse> {
		const response = await fetch(`${baseUrlAuth}/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ email, password })
		});
		console.log(response);
		const result = await response.json();
		return result;
	}

	async register(username: string, email: string, password: string): Promise<AuthResponse> {
		const response = await fetch(`${baseUrlAuth}/register`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ username, email, password })
		});
		const result = await response.json();
		return result;
	}

	async verify(token: string): Promise<AuthResponse> {
		const response = await fetch(`${baseUrlAuth}/verify`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			},
		});
		const result = await response.json();
		return result;
	}
}

let authService: AuthRepository | null = null;

function createOrTake(): AuthRepository {
	if (authService === null) {
		authService = new AuthService();
	}
	return authService;
}

export const authServiceInstance = createOrTake();