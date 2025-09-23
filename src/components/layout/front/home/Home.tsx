"use client"

import Hero from "./hero/Hero"
import Feature from "./Features/Feature"

export default function Home() {
	return (
		<div>
			<Hero />
			<hr className='my-2' />
			<Feature />
			<hr className='my-2' />
		</div>
	)
}
