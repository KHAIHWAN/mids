"use client"

import Hero from "./hero/Hero"
import Feature from "./Features/Feature"
import Journal from "./Features/Journal"

export default function Home() {
	return (
		<div>
			<Hero />
			<hr className='my-2' />
			<Feature />
			<hr className='my-2' />
			<Journal />
			<hr className='my-2' />
		</div>
	)
}
