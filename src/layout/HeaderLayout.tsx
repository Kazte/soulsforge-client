import Link from "next/link";

export default function HeaderLayout() {
	return (
		<header className="flex flex-row justify-around items-center bg-content1 w-full">
			<Link href={`/`} className="text-2xl font-bold text-center text-content2">SoulsForge</Link>


			<nav>
				<Link href="/">
					Home
				</Link>
				<Link href="/login">
					Login
				</Link>
				<Link href="/register">
					Register
				</Link>
			</nav>
		</header >
	)
}