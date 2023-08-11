import Link from "next/link";

export default function NotFound() {
	return (
		<div
			className="flex flex-col items-center justify-center flex-grow"
		>
			<h1 className="text-4xl font-bold">404</h1>
			<h2 className="text-2xl font-bold">Page Not Found</h2>
			<p className="text-xl font-bold">
				Go back to the{' '}
				<Link href="/" className="text-primary hover:text-primaryLight">
					Homepage
				</Link>
			</p>
		</div>
	)
}