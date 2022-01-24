import axios from "axios";
import { api } from "../config";

const {
  auth,
} = api;

class AuthApi {
  Token = async (email: string, password: string) =>
    axios.post(auth, { email, password }).then((res) => res.data);
}

export const authApi = new AuthApi();
