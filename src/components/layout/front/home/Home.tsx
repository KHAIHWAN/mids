"use client"

import Hero from "./hero/Hero"
import Events from "./Features/Events"
import Journal from "./Features/Journal"
import Programs from "./Features/Programs"

export default function Home() {
	return (
		<div>
			<Hero />
			<hr className='my-4' />
			<Programs />
			<hr className='my-8' />
			<Journal />
			<hr className='my-8' />
			<Events />
			<hr className='my-8' />
		</div>
	)
}
