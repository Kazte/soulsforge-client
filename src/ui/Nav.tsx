import { PrivateRoutes, PublicRoutes } from "../models/routes";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppStore } from "../redux/store";

export default function Nav() {

	const userState = useSelector((store: AppStore) => store.user)



	const baseStyle = "text-foreground text-lg border-b-2 hover:border-foreground transition-colors duration-300";


	if (userState.username) {
		return (
			<nav className="flex flex-row items-center gap-2">
				<NavLink
					className={
						({ isActive }) => isActive ? baseStyle + ' border-foreground' : baseStyle + ' border-transparent'
					}
					to={PublicRoutes.HOME}>Home</NavLink>
				<NavLink
					className={
						({ isActive }) => isActive ? baseStyle + ' border-foreground' : baseStyle + ' border-transparent'
					}
					to={`${PublicRoutes.PROFILE}/${userState.id}`}>Profile</NavLink>
				<NavLink
					className={
						({ isActive }) => isActive ? baseStyle + ' border-foreground' : baseStyle + ' border-transparent'
					}
					to={PrivateRoutes.LOGOUT}>Logout</NavLink>
			</nav>
		)
	}

	return (
		<nav className="flex flex-row items-center gap-2">
			<NavLink
				className={
					({ isActive }) => isActive ? baseStyle + ' border-foreground' : baseStyle + ' border-transparent'
				}
				to={PublicRoutes.HOME}>Home</NavLink>
			<NavLink
				className={
					({ isActive }) => isActive ? baseStyle + ' border-foreground' : baseStyle + ' border-transparent'
				}
				to={PublicRoutes.LOGIN}>Login</NavLink>
			<NavLink
				className={
					({ isActive }) => isActive ? baseStyle + ' border-foreground' : baseStyle + ' border-transparent'
				}
				to={PublicRoutes.REGISTER}>Register</NavLink>
		</nav>
	)
}