import { Route, Navigate } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "../../models/routes";
import LogoutPage from "./user/LogoutPage";
import { RoutesWithNotFound } from "..";

export default function PrivatePageWrapper() {
	return (
		<RoutesWithNotFound>
			<Route path="/" element={<Navigate to={PublicRoutes.PROFILE} />} />
			<Route path={PrivateRoutes.LOGOUT} element={<LogoutPage />} />

			<Route path={`/${PrivateRoutes.CHARACTER_EDIT}/${PublicRoutes.ELDEN_RING}/:id`} element={<h1>Edit</h1>} />
			<Route path={`/${PrivateRoutes.CHARACTER_DELETE}/${PublicRoutes.ELDEN_RING}/:id`} element={<h1>Delete</h1>} />

			{/* <Route path={`${PrivateRoutes.NOTES}/:guid`} element={<NoteDetailPage />} /> */}
			{/* <Route path={PrivateRoutes.PROFILE} element={<ProfilePage />} /> */}
		</RoutesWithNotFound>
	)
}