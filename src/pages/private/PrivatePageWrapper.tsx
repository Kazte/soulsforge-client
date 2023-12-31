import { Route, Navigate } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "../../models/routes";
import { CreatePage, LogoutPage, RoutesWithNotFound } from "..";

export default function PrivatePageWrapper() {
  return (
    <RoutesWithNotFound>
      <Route path="/" element={<Navigate to={PublicRoutes.PROFILE} />} />
      <Route path={PrivateRoutes.LOGOUT} element={<LogoutPage />} />

      <Route path={`/${PrivateRoutes.CHARACTER_CREATE}`} element={<CreatePage />} />

      {/* <Route path={`${PrivateRoutes.NOTES}/:guid`} element={<NoteDetailPage />} /> */}
      {/* <Route path={PrivateRoutes.PROFILE} element={<ProfilePage />} /> */}
    </RoutesWithNotFound>
  )
}