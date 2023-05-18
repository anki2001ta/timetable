/** importing libraries **/
import axios from "axios";

/** importing dependencies **/
import { ILocalStorage } from "../interfaces/interfaces";

class AuthUtils {
	static setLocalStorage<T extends keyof ILocalStorage>(
		key: T,
		value: ILocalStorage[T]
	): void {
		localStorage.setItem(key, JSON.stringify(value));
	}

	static getLocalStorage<T extends keyof ILocalStorage>(
		key: T
	): ILocalStorage[T] | null {
		const value = localStorage.getItem(key);

		if (value) {
			return JSON.parse(value);
		}

		return null;
	}

	static removeLocalStorage<T extends keyof ILocalStorage>(key: T): void {
		localStorage.removeItem(key);
	}

	static setAuthToken(): void {
		const token = this.getLocalStorage("access_token");

		if (token) {
			axios.defaults.headers.common["Authorization"] = `${token}`;
		} else {
			delete axios.defaults.headers.common["Authorization"];
		}
	}
}

export default AuthUtils;
