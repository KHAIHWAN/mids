"use client"

import { useLocale, useTranslations } from "next-intl";

export default function Hero() {
    const locale = useLocale();
    const translate = useTranslations('Hero');
    
    return (
        <div className=' w-full flex flex-col gap-12 px-6 py-4 md:py-16'>
			<div className='text-start'>
				<h1 className={`${locale === 'th' ? 'font-kanit text-2xl font-medium' : 'font-golos-text text-4xl font-semibold'} sm:text-5xl md:text-6xl lg:text-7xl md:leading-[1.2] tracking-tighter`}>
                    {translate('Section1')}
				</h1>
				<h1 className={`${locale === 'th' ? 'font-kanit text-2xl font-medium' : 'font-golos-text text-4xl font-semibold'} sm:text-5xl md:text-6xl lg:text-7xl md:leading-[1.2] tracking-tighter`}>
                    {translate('Section2')}
                    <span className='px-2 font-nunito font-black bg-clip-text text-transparent bg-gradient-to-r from-[#6667AB] via-[#6667AB] via-55% to-[#508BC3]'>
                        MIdS
                    </span>
                </h1>
				<h1 className={`${locale === 'th' ? 'font-kanit text-2xl font-medium' : 'font-golos-text text-4xl font-semibold'} sm:text-5xl md:text-6xl lg:text-7xl md:leading-[1.2] tracking-tighter`}>
                    {translate('Section3')}
				</h1>
			</div>
			<div className='w-full max-w-(--breakpoint-xl) mx-auto aspect-video bg-background rounded-xl'>
                <img
                    className="rounded-(--radius) grayscale"
                    src="https://images.unsplash.com/photo-1530099486328-e021101a494a?q=80&w=2747&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="team image"
                    height=""
                    width=""
                    loading="lazy"
                />
			</div>
		</div>

    )
}