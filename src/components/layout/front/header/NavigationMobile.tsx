'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import { useTranslations } from 'next-intl';

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';

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

export default function NavigationMobile() {
	const locale = useLocale();
	const t = useTranslations('Header');

	// Get the first section's title for the trigger
	const firstSection = staticNavigation[0];
	const triggerTitle = firstSection ? getLocalizedText(firstSection.title, locale) : 'Menu';

	return (
		<div className="lg:hidden">
			<Accordion type="single" collapsible className="flex w-full flex-col">
				<AccordionItem value="item-1" className="border-b-0">
					<AccordionTrigger>{t('about')}</AccordionTrigger>
					<AccordionContent className="mt-2">
						{staticNavigation.map((section) => (
							<div key={getLocalizedText(section.title, 'en')} className="space-y-3">
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
														{getLocalizedText(item.description, locale)}
													</p>
												)}
											</div>
										</Link>
									))}
								</div>
							</div>
						))}
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-2" className="border-b-0">
					<AccordionTrigger>{t('academics')}</AccordionTrigger>
					<AccordionContent className="mt-2">
						{dynamicNavigationAcademic.map((section) => (
							<div key={getLocalizedText(section.title, 'en')} className="space-y-3">
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
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-3" className="border-b-0">
					<AccordionTrigger>{t('newsEvents')}</AccordionTrigger>
					<AccordionContent className="mt-2">
						{dynamicNavigationNews.map((section) => (
							<div key={getLocalizedText(section.title, 'en')} className="space-y-3">
								<h6 className="font-semibold uppercase text-xs text-muted-foreground px-2 mt-2">
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
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-4" className="[&_svg]:hidden">
					<AccordionTrigger>
						<Link href="/contact">{t('contact')}</Link>
					</AccordionTrigger>
				</AccordionItem>
			</Accordion>
		</div>
	);
}
