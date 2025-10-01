"use client"

import Hero from "./hero/Hero"
import Programs from "./Features/Programs"
import Journal from "./Features/Journal"
import Events from "./Features/Events"

export default function Home() {
	return (
		<div>
			<Hero />
			<hr className='my-4' />
			<Programs />
			<hr className='my-4' />
			<Journal />
			<hr className='my-4' />
			<Events />
			<hr className='my-4' />
		</div>
	)
}
