import { Link } from "react-router-dom";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function KLink({ children, ...props }: any) {
	return (
		<Link {...props} className={`text-default-700 hover:underline ${props.className}`}>{children}</Link>
	)
}