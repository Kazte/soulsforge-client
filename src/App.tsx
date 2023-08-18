import { Provider, useSelector } from "react-redux"
import { BrowserRouter, Route, Navigate } from "react-router-dom"
import AuthGuard from "./guards/auth.guard"
import { PublicRoutes } from "./models/routes"
import { RoutesWithNotFound, LoginPage, RegisterPage, ProfilePage, EldenRingPage, EldenRingCharPage, PrivatePageWrapper } from "./pages"
import { Header, Footer } from "./ui"
import { AppStore } from "./redux/store"


function App() {

	const { darkMode } = useSelector((state: AppStore) => state.page)



	return (
		<div className={`text-foreground bg-background flex flex-col min-h-screen ${darkMode ? 'dark' : ''}`}>
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
	)
}

export default App
