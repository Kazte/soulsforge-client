import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { resetUser } from "../../../redux/states/user";


export default function LogoutPage() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(resetUser());
	}, [dispatch])

	return (
		<></>
	)
}