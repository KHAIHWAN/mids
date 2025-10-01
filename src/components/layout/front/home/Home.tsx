"use client"

import Hero from "./hero/Hero"
import Feature from "./Features/Feature"
import Journal from "./Features/Journal"
import Events from "./Features/Events"

export default function Home() {
	return (
		<div>
			<Hero />
			<hr className='my-4' />
			<Feature />
			<hr className='my-4' />
			<Journal />
			<hr className='my-4' />
			<Events />
			<hr className='my-4' />
		</div>
	)
}
