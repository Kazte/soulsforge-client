export default function Footer() {
	return (
		<footer className="flex flex-col justify-center items-center py-4 bg-content1">
			<p className="text-sm text-center">Copyright © {new Date().getFullYear()}</p>

			<p className="text-sm text-center">Made with 🤍 by <a href="https://www.github.com/kazte" target="_blank">Kazte</a></p>
		</footer>
	)
}