import { Divider, Input } from "@nextui-org/react";
import { authServiceInstance } from "../../../services/auth/auth.service";
import { useNavigate } from "react-router-dom";
import { PublicRoutes } from "../../../models/routes";
import { useDispatch } from "react-redux";
import { createUser } from "../../../redux/states/user";
import { useState } from "react";
import { KButton } from "../../../components/ui/KButton";
import KLink from "../../../components/ui/KLink";

export default function LoginPage() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

	const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const email = e.currentTarget[0] as HTMLInputElement
		const password = e.currentTarget[1] as HTMLInputElement

		setLoading(true);

		try {
			const response = await authServiceInstance.login(email.value, password.value);

			if (response.result) {
				dispatch(createUser({
					email: response.data.user.email,
					username: response.data.user.username,
					id: response.data.user.id,
					token: response.data.token
				}))

				navigate(`/${PublicRoutes.PROFILE}/${response.data.user.id}`);
			} else {
				setError(response.message);
			}
		} catch (error) {
			setError("Ups! Something went wrong :(");
		} finally {
			setLoading(false);
		}
	}

	return (
		<div className="flex flex-col items-center justify-center h-full w-full m-auto">
			<div className="flex flex-col gap-4 p-4 bg-content1 rounded-sm shadow-sm w-3/4 sm:w-[20rem]">
				<h1 className="text-4xl font-bold text-center">Login</h1>
				<Divider />
				<form className="flex flex-col justify-center items-center gap-2" onSubmit={handleOnSubmit}>

					<Input size="sm" type="email" label="Email" />
					<Input size="sm" type="password" label="Password" />
					{
						error && <p className="text-red-500">{error}</p>
					}
					<KButton isLoading={loading} className="w-full" size="sm" type="submit">Login</KButton>
				</form>
				<Divider />
				<div className="flex flex-col justify-center items-center gap-2">
					<p>Don't have an account? <KLink to={`/${PublicRoutes.REGISTER}`} >Register</KLink></p>
				</div>
			</div>
		</div >
	)
}