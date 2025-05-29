import { useAtom } from "jotai";
import {
	firstNameAtom,
	lastNameAtom,
	ageAtom,
	hobbiesAtom,
	usersAtom,
} from "../Atoms/user.atom";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";
import type { FormEvent } from "react";

export function User() {
	const [users, setUsers] = useAtom(usersAtom);
	const [firstNameInput, setFirstName] = useAtom(firstNameAtom);
	const [LastNameInput, setLastName] = useAtom(lastNameAtom);
	const [ageInput, setAge] = useAtom(ageAtom);
	const [hobbiesInput, setHobbies] = useAtom(hobbiesAtom);

	const handleHobbies = (e: InputEvent<HTMLInputElement>) => {
		setHobbies([...hobbiesInput, e.target.value]);
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setUsers([
			...users,
			{
				id: uuidv4(),
				firstName: firstNameInput,
				age: ageInput,
				lastName: LastNameInput,
				hobbies: hobbiesInput,
			},
		]);
		toast.success("User Added");
		setFirstName("");
		setLastName("");
		setAge(0);
		setHobbies([]);
	};

	return (
		<div>
			<h2>Users</h2>
			<h3>Add users</h3>
			<form
				onSubmit={handleSubmit}
				style={{
					display: "flex",
					flexDirection: "column",
				}}
			>
				<label>
					First Name
					<input
						type="text"
						value={firstNameInput}
						onChange={(e) => setFirstName(e.target.value)}
					/>
				</label>
				<label>
					Last Name:
					<input
						type="text"
						value={LastNameInput}
						onChange={(e) => setLastName(e.target.value)}
					/>
				</label>
				<label>
					Age:
					<input
						type="number"
						value={ageInput}
						onChange={(e) => setAge(Number(e.target.value))}
					/>
				</label>
				<fieldset>
					<label>
						Ping Pong
						<input
							type="checkbox"
							name="hobbies"
							value={"Ping Pong"}
							onClick={(e) => handleHobbies(e)}
						/>
					</label>
					<label>
						Racing
						<input
							type="checkbox"
							name="hobbies"
							value={"Racing"}
							onClick={(e) => handleHobbies(e)}
						/>
					</label>
					<label>
						Cook:
						<input
							type="checkbox"
							name="hobbies"
							value={"Cook"}
							onClick={(e) => handleHobbies(e)}
						/>
					</label>
				</fieldset>
				<button type="submit">Add User</button>
			</form>
			<ul>
				{users.map((user) => (
					<li key={user.id}>
						<span>
							Name: {user.firstName} {user.lastName}
						</span>
						<span>Age: {user.age} </span>
						<span>
							Hobbies:{" "}
							{user.hobbies.map((hobbie, i) => (
								<span key={i}>{hobbie} </span>
							))}
						</span>
					</li>
				))}
			</ul>
		</div>
	);
}
