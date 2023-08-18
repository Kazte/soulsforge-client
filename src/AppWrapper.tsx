import { useSelector } from "react-redux"
import { AppStore } from "./redux/store"

interface Props {
	children: React.ReactNode
}

export default function AppWrapper({ children }: Props) {
	const pageState = useSelector((state: AppStore) => state.page)

	return (
		<div className={`${pageState.darkMode ? "dark" : "light"} text-foreground bg-background flex flex-col min-h-screen`}>
			{children}
		</div>
	)
}