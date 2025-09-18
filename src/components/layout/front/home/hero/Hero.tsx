"use client"

export default function Hero() {
    return (
        <div className='min-h-screen w-full flex flex-col gap-12 px-6 py-16'>
			<div className='text-start'>
				<h1 className='font-golos-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl md:leading-[1.2] font-semibold tracking-tighter'>
                    Unlock Your
				</h1>
                <h1 className='font-golos-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl md:leading-[1.2] font-semibold tracking-tighter'>
                    Potential with 
                    <span className='px-2 font-nunito font-black bg-clip-text text-transparent bg-gradient-to-r from-[#6667AB] via-[#6667AB] via-70% to-[#508BC3]'>
                        MIdS 
                    </span>
                </h1>
                <h1 className='font-golos-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl md:leading-[1.2] font-semibold tracking-tighter'>
                    Leading Programs for Learning.
				</h1>
			</div>
			<div className='w-full max-w-(--breakpoint-xl) mx-auto aspect-video bg-background rounded-xl' />
		</div>

    )
}