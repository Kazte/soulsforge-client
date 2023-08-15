import { Route, Navigate } from "react-router-dom";
import { PrivateRoutes } from "../../models/routes";
import { RoutesWithNotFound } from "../common";
import LogoutPage from "./user/LogoutPage";

export default function PrivatePageWrapper() {
	return (
		<RoutesWithNotFound>
			<Route path="/" element={<Navigate to={PrivateRoutes.PROFILE} />} />
			<Route path={PrivateRoutes.LOGOUT} element={<LogoutPage />} />

			{/* <Route path={`${PrivateRoutes.NOTES}/:guid`} element={<NoteDetailPage />} /> */}
			{/* <Route path={PrivateRoutes.PROFILE} element={<ProfilePage />} /> */}
		</RoutesWithNotFound>
	)
}