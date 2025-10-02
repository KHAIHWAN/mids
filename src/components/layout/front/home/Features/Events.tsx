"use client"

import Link from "next/link"
import { useTranslations } from "next-intl"

import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"

const features = [
	{
		category: "April 29, 2025, 09:00 AM - 04:00 PM",
		title: "Generative AI For Medical Profession Phase 2",
		details:
			"Training Activity: “Generative AI for Medical Personnel of the Hospital” Date: Tuesday, April 29, 2025, at   Room 2-202, Building 2, Multidisciplinary and Interdisciplinary School, Chiang Mai University (MIdS CMU)",
		location: "Multidisciplinary and Interdisciplinary School, Chiang Mai University (MIdS CMU)",
        tutorialLink: "#",
	},
	{
		category: "September 12, 2025 08:30 AM - 03:30 PM",
		title: "Health Innovation And Technology",
		details:
			"Health Innovation and Technology Merging Digital Transformation, Nano-Sciences, and Smart Technologies to Drive the Future of Healthcare and Wellbeing",
		location: "Science and Technology Park, Chiang Mai University",
        tutorialLink: "#",
	},
	
]

export default function Events() {
	const translate = useTranslations('Events')

	return (
		<section className='mt-6 md:mt-12'>
			<div className='space-y-8 md:space-y-12'>
				<div className='grid gap-2 md:grid-row-2 md:gap-6'>
					<h2 className='text-xl font-medium text-[#4D6E37]'>{translate('Title')}</h2>
					<div className='space-y-2'>
						<h2 className='text-lg sm:text-xl font-semibold tracking-tight'>
							{translate('Description')}
						</h2>
					</div>
				</div>
			</div>

			<div className='mt-8 md:mt-16 w-full mx-auto space-y-20'>
				{features.map((feature, idx) => (
					<div
						key={feature.category}
						className='flex flex-col md:flex-row items-center gap-x-12 gap-y-6 md:even:flex-row-reverse'>
						<div className='w-full aspect-[4/3] bg-[#FFF] rounded-xl border border-[#CFE1C3] basis-1/2 ' />
						<div className={`basis-1/2 shrink-0 ${(idx + 1) % 2 === 0 ? 'text-right' : 'text-left'}`}>
							<span className='text-sm text-[#000]'>
								{feature.category}
							</span>
							<h4 className='my-3 text-2xl font-semibold tracking-tight text-[#4D6E37]'>
								{feature.title}
							</h4>
							<p className='text-muted-foreground'>{feature.details}</p>
							<h4 className={`mt-3 flex items-center gap-2 font-medium text-sm text-[#000] ${(idx + 1) % 2 === 0 ? 'justify-end' : ''}`}>
								<MapPin className='w-6 h-6 mr-2' />{feature.location}
							</h4>
							<Button asChild size='lg' className='mt-6 rounded-full gap-3 bg-[#CFE1C3] text-[#4D6E37] hover:bg-[#CFE1C3]/80 hover:text-[#4D6E37]/80 transition-all'>
								<Link href={feature.tutorialLink}>
									Register Now
								</Link>
							</Button>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}
