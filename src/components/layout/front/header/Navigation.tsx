'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import { useTranslations } from 'next-intl';
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

import {
	staticNavigation,
	dynamicNavigationAcademic,
	dynamicNavigationNews,
} from './MockDataNavigation';

// Helper function to get text in current locale
const getLocalizedText = (textArray: { en: string; th: string }[], locale: string) => {
	if (!textArray || textArray.length === 0) return '';
	return textArray[0][locale as 'en' | 'th'] || textArray[0].en;
};

export default function Navigation() {
	const locale = useLocale();
	const t = useTranslations('Header');

	// Get the first section's title for the trigger
	const firstSection = staticNavigation[0];
	const triggerTitle = firstSection ? getLocalizedText(firstSection.title, locale) : 'Menu';

	return (
		<NavigationMenu>
			<NavigationMenuList className="flex gap-2 text-sm">
				{/* About */}
				<NavigationMenuItem>
					<NavigationMenuTrigger className="text-muted-foreground hover:text-accent-foreground duration-150 [&_svg]:hidden">
						{t('about')}
					</NavigationMenuTrigger>
					<NavigationMenuContent>
						<div className="grid grid-cols-1 gap-3 p-3 w-80">
							{staticNavigation.map((section) => (
								<div
									key={getLocalizedText(section.title, 'en')}
									className="space-y-3">
									<h6 className="font-semibold uppercase text-xs text-muted-foreground px-2 ">
										{getLocalizedText(section.title, locale)}
									</h6>
									<hr className="my-2" />
									<div className="space-y-1">
										{section.content.map((item) => (
											<Link
												href={item.pathURL}
												key={item.pathURL}
												className="flex items-start gap-3 p-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors">
												{/* --- ICON --- */}
												<div className="text-muted-foreground mt-0.5">
													{item.icon}
												</div>

												{/* --- TEXT CONTENT --- */}
												<div className="flex-1">
													<div className="font-medium text-sm">
														{getLocalizedText(item.title, locale)}
													</div>
													{item.description && (
														<p className="text-xs text-muted-foreground line-clamp-2">
															{getLocalizedText(
																item.description,
																locale,
															)}
														</p>
													)}
												</div>
											</Link>
										))}
									</div>
								</div>
							))}
						</div>
					</NavigationMenuContent>
				</NavigationMenuItem>

				{/* Academic */}
				<NavigationMenuItem>
					<NavigationMenuTrigger className="text-muted-foreground hover:text-accent-foreground duration-150 [&_svg]:hidden">
						{t('academics')}
					</NavigationMenuTrigger>
					<NavigationMenuContent>
						<div className="grid grid-cols-1 gap-3 p-3 w-80">
							{dynamicNavigationAcademic.map((section) => (
								<div
									key={getLocalizedText(section.title, 'en')}
									className="space-y-3">
									<h6 className="font-semibold uppercase text-xs text-muted-foreground px-2 ">
										{getLocalizedText(section.title, locale)}
									</h6>
									<hr className="my-2" />
									<div className="space-y-1">
										{section.content.map((item) => (
											<Link
												href={item.pathURL}
												key={item.pathURL}
												className="flex items-start gap-3 p-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors">
												{/* --- ICON --- */}
												<div className="text-muted-foreground mt-0.5">
													{item.icon}
												</div>

												{/* --- TEXT CONTENT --- */}
												<div className="flex-1">
													<div className="text-sm">
														{getLocalizedText(item.title, locale)}
													</div>
												</div>
											</Link>
										))}
									</div>
								</div>
							))}
						</div>
					</NavigationMenuContent>
				</NavigationMenuItem>

				{/* News & Events */}
				<NavigationMenuItem>
					<NavigationMenuTrigger className="text-muted-foreground hover:text-accent-foreground duration-150 [&_svg]:hidden">
						{t('newsEvents')}
					</NavigationMenuTrigger>
					<NavigationMenuContent>
						<div className="grid grid-cols-1 gap-3 p-3 w-80">
							{dynamicNavigationNews.map((section) => (
								<div
									key={getLocalizedText(section.title, 'en')}
									className="space-y-3">
									<h6 className="font-semibold uppercase text-xs text-muted-foreground px-2 ">
										{getLocalizedText(section.title, locale)}
									</h6>
									<hr className="my-2" />
									<div className="space-y-1">
										{section.content.map((item) => (
											<Link
												href={item.pathURL}
												key={item.pathURL}
												className="flex items-start gap-3 p-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors">
												{/* --- ICON --- */}
												<div className="text-muted-foreground mt-0.5">
													{item.icon}
												</div>

												{/* --- TEXT CONTENT --- */}
												<div className="flex-1">
													<div className="text-sm">
														{getLocalizedText(item.title, locale)}
													</div>
												</div>
											</Link>
										))}
									</div>
								</div>
							))}
						</div>
					</NavigationMenuContent>
				</NavigationMenuItem>
				{/* Contact */}
				<NavigationMenuItem>
					<NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
						<div className="text-muted-foreground hover:text-accent-foreground duration-150 [&_svg]:hidden">
							<Link href="/contact">{t('contact')}</Link>
						</div>
					</NavigationMenuLink>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}
