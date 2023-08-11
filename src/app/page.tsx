import Image from 'next/image'
import Divider from '@/components/Divider'

export default function Home() {
	return (
		<section className='flex flex-col justify-center items-center'>
			<h1 className='text-center text-4xl font-bold'>Home</h1>

			<Divider />

			<Image
				src={`https://picsum.photos/300/300`}
				alt="Next.js Logo"
				width={300}
				height={300}
				priority
			/>

			<Divider />

		</section>
	)
}
