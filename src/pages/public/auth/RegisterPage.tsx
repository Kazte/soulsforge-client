import { Divider, Input, Link as LinkUI } from "@nextui-org/react";
import { PrivateRoutes, PublicRoutes } from "../../../models/routes";
import { Link, useNavigate } from "react-router-dom";
import { KButton } from "../../../components/ui/KButton";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { authServiceInstance } from "../../../services/auth/auth.service";
import { createUser } from "../../../redux/states/user";
import KLink from "../../../components/ui/KLink";

export default function RegisterPage() {

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const [success, setSuccess] = useState(false);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const email = e.currentTarget[0].value;
		const username = e.currentTarget[1].value;
		const password = e.currentTarget[2].value;

		setLoading(true);

		try {
			const response = await authServiceInstance.register(username, email, password);

			if (response.result) {
				setSuccess(true);
				setError('');
				setTimeout(() => {
					navigate(`/${PublicRoutes.LOGIN}`);
				}, 2000);
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
				<h1 className="text-4xl font-bold text-center">Register</h1>
				<Divider />
				<form autoComplete="off" className="flex flex-col justify-center items-center gap-2" onSubmit={handleSubmit}>

					<Input isRequired size="sm" type="email" label="Email" />
					<Input isRequired size="sm" type="text" label="Username" />
					<Input isRequired size="sm" type="password" label="Password" />

					{
						error && <p className="text-sm text-red-500">{error}</p>
					}

					{
						success && <p className="text-sm text-green-500">User created successfully!</p>
					}

					<KButton isLoading={loading} className="w-full" size="sm" type="submit">Register</KButton>
				</form>
				<Divider />
				<div className="flex flex-col justify-center items-center gap-2">
					<p> Already have an account? <KLink to={`/${PublicRoutes.LOGIN}`} >Login</KLink></p>
				</div>
			</div>
		</div >
	)
}