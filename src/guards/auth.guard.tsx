import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from '../models/routes';
import { UserKey, resetUser } from '../redux/states/user';
import { AppStore } from '../redux/store';
import { authServiceInstance } from '../services/auth/auth.service';
import { clearLocalStorage } from '../utilities/localStorage.utility';

interface Props {
	privateValidation: boolean;
}

const PrivateValidationFragment = <Outlet />
const PublicValidationFragment = <Navigate replace to={`${PublicRoutes.HOME}`} />


export default function AuthGuard({ privateValidation }: Props) {
	const userState = useSelector((store: AppStore) => store.user)
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const authService = authServiceInstance

	useEffect(() => {
		verifyUser()
	}, [navigate])

	const verifyUser = async () => {
		try {
			const response = await authService.verify(userState.token)
			if (!response.result) {
				navigate(PublicRoutes.LOGIN, { replace: true })
				clearLocalStorage(UserKey)
				dispatch(resetUser())
			}

		} catch (error) {
			navigate(PublicRoutes.LOGIN, { replace: true })
			clearLocalStorage(UserKey)
			dispatch(resetUser())
		}
	}

	return userState.username ? (
		privateValidation ? (
			PrivateValidationFragment
		) : (
			PublicValidationFragment
		)
	) : (
		<Navigate replace to={PublicRoutes.LOGIN} />
	)
}