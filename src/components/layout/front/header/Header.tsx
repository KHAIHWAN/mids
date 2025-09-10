'use client';

import React from 'react';

import Link from 'next/link';
import Image from 'next/image';

import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';

import { Menu, X } from 'lucide-react';

import { Button } from '@/components/ui/button';

import Navigation from './Navigation';
import LocaleSwitcher from './LocaleSwitcher';
import NavigationMobile from './NavigationMobile';

export default function Header() {
	const t = useTranslations('Header');
	const [menuState, setMenuState] = React.useState(false);
	const [isScrolled, setIsScrolled] = React.useState(false);

	React.useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 100);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);
	return (
		<header>
			<nav data-state={menuState && 'active'} className="fixed z-20 w-full px-2">
				<div
					className={cn(
						'mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12',
						isScrolled &&
							'bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5',
					)}>
					<div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
						<div className="flex w-full justify-between lg:w-auto">
							{/* Logo */}
							<Link
								href="/"
								aria-label="home"
								className="flex items-center space-x-2">
								<Image
									src="/images/logos/LogoMinimalColor.png"
									alt="Logo"
									width="123"
									height="100"
								/>
							</Link>

							{/* Mobile Menu */}
							<button
								onClick={() => setMenuState(!menuState)}
								aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
								className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
								<Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
								<X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
							</button>
						</div>

						{/* Desktop Navigation */}
						<div className="absolute inset-0 m-auto hidden size-fit lg:block">
							<Navigation />
						</div>

						<div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
							{/* Mobil Navigation */}
							<NavigationMobile />

							{/* Action Buttons */}
							<div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
								{/* Dropdown Switcher Language */}
								<LocaleSwitcher isScrolled={isScrolled} />
								{/* Login Button */}
								<Button asChild size="sm" className={cn(isScrolled && 'lg:hidden')}>
									<Link href="#">
										<span>{t('login')}</span>
									</Link>
								</Button>

								<Button
									asChild
									size="sm"
									className={cn(isScrolled ? 'lg:inline-flex' : 'hidden')}>
									<Link href="#">
										<span>{t('viewCourse')}</span>
									</Link>
								</Button>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
}
