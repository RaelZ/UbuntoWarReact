import axios from "axios";
import { api } from "../config";

const { auth, ubuntoRegister, ubuntoTrojan } = api;
class AuthApi {
  Token = async (email: string, password: string) =>
    axios
      .post(
        auth,
        { email: email, password: password, rememberMe: true },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => res.data);

  UbuntoRegister = async (
    name: string,
    tel: string,
    date: string,
    key: string,
    indicatorArea: number
  ) =>
    axios
      .post(ubuntoRegister, {
        name: name,
        telephone: tel,
        date: date,
        key: key,
        indicatorArea: indicatorArea,
      })
      .then((res) => res.data);

  ubuntoTrojan = async () =>
    axios
      .get(ubuntoTrojan)
      .then((res) => res.data);
}

export const authApi = new AuthApi();
