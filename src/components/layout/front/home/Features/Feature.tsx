"use client"

import { useLocale } from "next-intl"

import Link from "next/link"

import {
	Card,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel"
import { navigationAcademic } from "../../header/MockDataNavigtion"

export default function Feature() {
	const locale = useLocale()
	return (
		<section className='mt-6 md:mt-12'>
			<div className='space-y-8 md:space-y-12'>
				<div className='grid gap-6 md:grid-cols-2 md:gap-12'>
					<h2 className='text-xl font-medium text-[#FAC668]'>PROGRAMS</h2>
					<div className='space-y-6'>
						<p>
							Multidisciplinary and Interdisciplinary Programs offer students
							the opportunity to explore a diverse range of subjects and
							integrate knowledge from various fields.
						</p>
					</div>
				</div>
			</div>
			<Carousel
				opts={{
					align: "start",
				}}
				className='w-full max-w-screen-xl mx-auto mt-6 md:mt-12 relative'>
				<CarouselContent>
					{navigationAcademic.flatMap((category) =>
						category.content.map((item) => (
							<CarouselItem
								key={`${category.title}-${item.title}`}
								className='basis-full sm:basis-1/2 lg:basis-1/4'>
								<div className='p-2'>
									<div className='relative'>
										<Card>
											<CardHeader className='px-6'>
												<CardTitle className='flex items-center gap-2 mb-1 text-lg font-semibold tracking-tight truncate'>
													{item.icon && <item.icon className='h-8 w-8' />}
													<span className='truncate'>
														{locale === "th" ? item.titleTH : item.title}
													</span>
												</CardTitle>
											</CardHeader>
											<CardFooter className='px-6 text-sm text-muted-foreground'>
												<Link href={item.url} className='text-primary'>
													Learn more
												</Link>
											</CardFooter>
										</Card>
									</div>
								</div>
							</CarouselItem>
						))
					)}
				</CarouselContent>
				<div className='hidden lg:block absolute top-[-18px] right-12'>
					<CarouselPrevious />
					<CarouselNext />
				</div>
			</Carousel>
		</section>
	)
}
