"use client"

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { useTranslations } from "next-intl"

export default function Journal() {
	const translate = useTranslations('Journal')
	return (
		<section className='mt-6 md:mt-12'>
			<div className='space-y-8 md:space-y-12'>
				<div className='grid gap-2 md:grid-row-2 md:gap-6'>
					<h2 className='text-xl font-medium text-[#508BC3]'>{translate('Title')}</h2>
					<div className='space-y-2'>
						<h2 className='text-lg sm:text-xl font-semibold tracking-tight'>
							{translate('Description')}
						</h2>
					</div>
				</div>
			</div>

			<Carousel
				opts={{
					align: "start",
				}}
				className='w-full max-w-screen-xl h-min-[300px] mx-auto mt-6 md:mt-6 relative'>
				<CarouselContent>
					{Array.from({ length: 7 }).map((_, index) => (
						<CarouselItem key={index} className='md:basis-1/2 lg:basis-1/4'>
							<div className='p-1'>
								<Card>
									<CardContent className='flex aspect-square items-center justify-center p-6'>
										<span className='text-3xl font-semibold'>{index + 1}</span>
									</CardContent>
								</Card>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
                <div className='hidden lg:block absolute top-[-18px] right-12'>
					<CarouselPrevious className='' />
					<CarouselNext className='' />
				</div>
			</Carousel>
		</section>
	)
}
