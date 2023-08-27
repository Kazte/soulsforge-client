import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { UserKey, resetUser } from "../../redux/states/user";
import { AppStore } from "../../redux/store";
import { authServiceInstance } from "../../services/auth/auth.service";
import { clearLocalStorage } from "../../utilities/localStorage.utility";

interface Props {
  children?: React.ReactNode;
}
export default function AuthVerifier({ children }: Props) {
  const userState = useSelector((store: AppStore) => store.user)
  const dispatch = useDispatch()
  const authService = authServiceInstance

  useEffect(() => {
    verifyUser()
  }, [])

  const verifyUser = async () => {
    try {
      const response = await authService.verify(userState.token)
      if (!response.result) {
        clearLocalStorage(UserKey)
        dispatch(resetUser())
      }

    } catch (error) {
      clearLocalStorage(UserKey)
      dispatch(resetUser())
    }
  }

  return <>{children}</>
}