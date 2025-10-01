import Link from "next/link";

import { cn } from '@/lib/utils';
import { useLocale } from 'next-intl';
import { useTranslations } from 'next-intl';

import { 
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/accordion";
import { Button } from '@/components/ui/button';

import { navigationAbout, navigationAcademic, navigationNews } from './MockDataNavigtion';

export default function NavigationMobile() {
    const locale = useLocale();
    const translate = useTranslations('NavigationMenu');
    const translate2 = useTranslations('HeaderAction');
    
    return (
        <div className="mt-8 text-base space-y-1">
            <Accordion type="single" collapsible className='flex w-full flex-col'>
                {/* About */}
                <AccordionItem 
                    value="item-1" 
                    className="border-0 border-b border-gray-100"
                >
                    <AccordionTrigger className="text-base font-medium py-6 px-0 hover:no-underline text-gray-900">
                        {translate('About')}
                    </AccordionTrigger>
                    <AccordionContent className="px-0 pb-6">
                        <div className="space-y-8">
                            {navigationAbout.map((category) => (
                                <div key={category.title} className="space-y-4">
                                    <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider letter-spacing-wide">
                                        {locale === 'th' ? category.titleTH : category.title}
                                    </h4>
                                    <div className="space-y-1">
                                        {category.content.map((item) => (
                                            <Link
                                                key={item.title}
                                                href={item.url}
                                                className={cn(
                                                    "group block py-3 px-0 transition-colors duration-200",
                                                    "hover:text-black focus:text-black",
                                                    "border-l-2 border-transparent hover:border-gray-900 focus:border-gray-900",
                                                    "pl-4 hover:pl-5 focus:pl-5 transition-all duration-200"
                                                )}
                                            >
                                                <div className="flex items-center gap-3 mb-1">
                                                    {item.icon && (
                                                        <item.icon className="h-4 w-4 text-gray-400 group-hover:text-gray-900 transition-colors duration-200" />
                                                    )}
                                                    <div className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
                                                        {locale === 'th' ? item.titleTH : item.title}
                                                    </div>
                                                </div>
                                                <p className="text-sm leading-relaxed text-gray-500 group-hover:text-gray-600 ml-7 transition-colors duration-200">
                                                    {locale === 'th' ? item.descriptionTH : item.description}
                                                </p>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>
                {/* Academic */}
                <AccordionItem 
                    value="item-2"
                    className="border-0 border-b border-gray-100"
                >
                    <AccordionTrigger className="text-base font-medium py-6 px-0 hover:no-underline text-gray-900">
                        {translate('Academic')}
                    </AccordionTrigger>
                    <AccordionContent className="px-0 pb-6">
                        <div className="space-y-8">
                            {navigationAcademic.map((category) => (
                                <div key={category.title} className="space-y-4">
                                    <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                                        {locale === 'th' ? category.titleTH : category.title}
                                    </h4>
                                    <div className="space-y-1">
                                        {category.content.map((item) => (
                                            <Link
                                                key={item.title}
                                                href={item.url}
                                                className={cn(
                                                    "group block py-3 px-0 transition-colors duration-200",
                                                    "hover:text-black focus:text-black",
                                                    "border-l-2 border-transparent hover:border-gray-900 focus:border-gray-900",
                                                    "pl-4 hover:pl-5 focus:pl-5 transition-all duration-200"
                                                )}
                                            >
                                                <div className="flex items-center gap-3">
                                                    {item.icon && (
                                                        <item.icon className="h-4 w-4 text-gray-400 group-hover:text-gray-900 transition-colors duration-200" />
                                                    )}
                                                    <div className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
                                                        {locale === 'th' ? item.titleTH : item.title}
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>
                {/* News */}
                <AccordionItem 
                    value="item-3"
                    className="border-0 border-b border-gray-100"
                >
                    <AccordionTrigger className="text-base font-medium py-6 px-0 hover:no-underline text-gray-900">
                        {translate('News')}
                    </AccordionTrigger>
                    <AccordionContent className="px-0 pb-6">
                        <div className="space-y-8">
                            {navigationNews.map((category) => (
                                <div key={category.title} className="space-y-4">
                                    <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                                        {locale === 'th' ? category.titleTH : category.title}
                                    </h4>
                                    <div className="space-y-1">
                                        {category.content.map((item) => (
                                            <Link
                                                key={item.title}
                                                href={item.url}
                                                className={cn(
                                                    "group block py-3 px-0 transition-colors duration-200",
                                                    "hover:text-black focus:text-black",
                                                    "border-l-2 border-transparent hover:border-gray-900 focus:border-gray-900",
                                                    "pl-4 hover:pl-5 focus:pl-5 transition-all duration-200"
                                                )}
                                            >
                                                <div className="flex items-center gap-3">
                                                    {item.icon && (
                                                        <item.icon className="h-4 w-4 text-gray-400 group-hover:text-gray-900 transition-colors duration-200" />
                                                    )}
                                                    <div className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
                                                        {locale === 'th' ? item.titleTH : item.title}
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>
                {/* Contact */}
                <AccordionItem 
                    value="item-4"
                    className="border-0 border-b border-gray-100 [&_svg]:hidden"
                >
                    <AccordionTrigger className="text-base font-medium py-6 px-0 hover:no-underline text-gray-900">
                        <Link href="#">{translate('Contact')}</Link>
                    </AccordionTrigger>
                </AccordionItem>
        
            </Accordion>
            {/* Login */}
            <Button variant="default" size="icon" className="w-full">{translate2('Login')}</Button>
        </div>
    );
}