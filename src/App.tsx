import { useSelector } from "react-redux"
import { BrowserRouter, Route } from "react-router-dom"
import AuthGuard from "./guards/auth.guard"
import { PublicRoutes } from "./models/routes"
import { RoutesWithNotFound, LoginPage, RegisterPage, ProfilePage, EldenRingCharPage, PrivatePageWrapper, HomePage } from "./pages"
import { Header, Footer } from "./ui"
import { AppStore } from "./redux/store"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import AuthVerifier from "./ui/auth/AuthConditional"


function App() {

  const { darkMode } = useSelector((state: AppStore) => state.page)



  return (
    <AuthVerifier>
      <div id="app" className={`text-foreground bg-background flex flex-col min-h-screen ${darkMode ? 'dark' : ''}`}>
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={true}
          theme={darkMode ? 'dark' : 'light'}
        />

        <BrowserRouter>

          <Header />

          <main className="flex-1 flex flex-col m-4">
            <RoutesWithNotFound>
              <Route path={`/${PublicRoutes.HOME}`} element={<HomePage />} />
              <Route path={`/${PublicRoutes.LOGIN}`} element={<LoginPage />} />
              <Route path={`/${PublicRoutes.REGISTER}`} element={<RegisterPage />} />
              <Route path={`/${PublicRoutes.PROFILE}/:username`} element={<ProfilePage />} />

              {/* <Route path={`/${PublicRoutes.CHARACTER}/${PublicRoutes.ELDEN_RING}`} element={<EldenRingPage />} /> */}
              <Route path={`/${PublicRoutes.CHARACTER}/${PublicRoutes.ELDEN_RING}/:id`} element={<EldenRingCharPage />} />


              <Route element={<AuthGuard privateValidation={true} />} >
                <Route path="/*" element={<PrivatePageWrapper />} />
              </Route>

            </RoutesWithNotFound>
          </main>

          <Footer />

        </BrowserRouter>
      </div>
    </AuthVerifier>
  )
}

export default App
