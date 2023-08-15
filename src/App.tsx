import { BrowserRouter, Navigate, Route } from "react-router-dom"
import { Footer, Header } from "./ui"
import { RoutesWithNotFound } from "./pages/common"
import { EldenRingCharPage, EldenRingPage, LoginPage, ProfilePage, RegisterPage } from "./pages/public"
import { Provider } from "react-redux"
import store from "./redux/store"
import AuthGuard from "./guards/auth.guard"
import PrivatePageWrapper from "./pages/private/PrivatePageWrapper"
import { PublicRoutes } from "./models/routes"

function App() {

	return (
		<Provider store={store}>
			<div className="dark text-foreground bg-background flex flex-col min-h-screen">

				<BrowserRouter>

					<Header />

					<main className="flex-1 flex flex-col m-4">
						<RoutesWithNotFound>
							<Route path={`/${PublicRoutes.HOME}`} element={<Navigate to={PublicRoutes.HOME} />} />
							<Route path={`/${PublicRoutes.LOGIN}`} element={<LoginPage />} />
							<Route path={`/${PublicRoutes.REGISTER}`} element={<RegisterPage />} />
							<Route path={`/${PublicRoutes.PROFILE}/:id`} element={<ProfilePage />} />

							<Route path={`/${PublicRoutes.CHARACTER}/${PublicRoutes.ELDEN_RING}`} element={<EldenRingPage />} />
							<Route path={`/${PublicRoutes.CHARACTER}/${PublicRoutes.ELDEN_RING}/:id`} element={<EldenRingCharPage />} />


							<Route element={<AuthGuard privateValidation={true} />} >
								<Route path="/*" element={<PrivatePageWrapper />} />
							</Route>

						</RoutesWithNotFound>
					</main>

					<Footer />

				</BrowserRouter>
			</div>
		</Provider>
	)
}

export default App
