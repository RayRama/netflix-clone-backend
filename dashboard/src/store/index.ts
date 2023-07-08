import { atom } from "jotai";

export interface IAuth {
  token?: string;
}

const initialAuth: IAuth = {
  token: "123",
};

export const authAtom = atom<IAuth>(initialAuth);
