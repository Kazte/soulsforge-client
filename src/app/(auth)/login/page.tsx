import Divider from "@/components/Divider";
import Link from "next/link";

export default function page() {
	return (
		<section className='flex flex-col justify-center items-center m-auto bg-content2 p-4 rounded-sm'>
			<h1 className='text-center text-4xl font-bold'>Login</h1>

			<Divider />

			<form className='flex flex-col justify-center items-center'>
				<label htmlFor='email'>Email</label>
				<input type='email' name='email' id='email' />

				<label htmlFor='password'>Password</label>
				<input type='password' name='password' id='password' />

				<button type='submit'>Login</button>

				<p>Don not have an account? <Link href='/register'>Register</Link></p>

			</form>
		</section>
	)
}