import { Route, Routes } from 'react-router-dom'
import { NotFoundPage } from '..';

interface Props {
	children: JSX.Element[] | JSX.Element;
}
export default function RoutesWithNotFound({ children }: Props) {
	return (
		<Routes>
			{children}
			<Route path="*" element={<NotFoundPage />} />
		</Routes>
	)
}
