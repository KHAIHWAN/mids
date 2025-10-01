"use client"

import Link from "next/link"
import { useTranslations } from "next-intl"

import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin } from "lucide-react"

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
		category: "Project Management",
		title: "Streamline your workflows effortlessly",
		details:
			"Organize tasks, deadlines, and team collaboration in one place. Use customizable boards to manage projects efficiently and automate routine updates.",
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
				{features.map((feature) => (
					<div
						key={feature.category}
						className='flex flex-col md:flex-row items-center gap-x-12 gap-y-6 md:even:flex-row-reverse'>
						<div className='w-full aspect-[4/3] bg-[#FFF] rounded-xl border border-border/50 basis-1/2' />
						<div className='basis-1/2 shrink-0'>
							<span className='uppercase font-medium text-sm text-[#000]'>
								{feature.category}
							</span>
							<h4 className='my-3 text-2xl font-semibold tracking-tight text-[#4D6E37]'>
								{feature.title}
							</h4>
							<p className='text-muted-foreground'>{feature.details}</p>
                            <h4 className='mt-3 flex items-center gap-2 font-medium text-sm text-[#000]'>
								<MapPin className='w-6 h-6 mr-2' />{feature.location}
							</h4>
							<Button asChild size='lg' className='mt-6 rounded-full gap-3 bg-[#CFE1C3] text-[#4D6E37] hover:bg-[#CFE1C3]/80 hover:text-[#4D6E37]/80 transition-all'>
								<Link href={feature.tutorialLink}>
									Learn More <ArrowRight />
								</Link>
							</Button>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}
