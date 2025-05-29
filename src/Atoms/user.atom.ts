import { atom } from "jotai";

export type User = {
	id: string;
	firstName: string;
	lastName: string;
	age: number;
	hobbies: string[];
};

const usersAtom = atom<User[]>([]);
const firstNameAtom = atom<string>("");
const lastNameAtom = atom<string>("");
const ageAtom = atom<number>(0);
const hobbiesAtom = atom<string[]>([]);

export { firstNameAtom, lastNameAtom, ageAtom, hobbiesAtom, usersAtom };
