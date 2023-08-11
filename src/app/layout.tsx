import HeaderLayout from '@/layout/HeaderLayout'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NextUIProvider } from '@nextui-org/react'
import { Providers } from './provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'SoulsForge',
	description: 'Page to create and share your fashion souls and builds',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className='dark'>
			<body className={inter.className}>
				<Providers>
					<div className="app-container">

						<HeaderLayout />
						<main className="flex-grow flex flex-col items-center justify-between p-8">
							{children}
						</main>
						<footer className="flex flex-row justify-around items-center bg-content1">
							<h1>Footer</h1>
						</footer>
					</div>
				</Providers>
			</body>
		</html>
	)
}
