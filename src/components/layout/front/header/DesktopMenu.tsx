import { cn } from "@/lib/utils";
import { useLocale } from 'next-intl';
import { useTranslations } from 'next-intl';
import { 
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger
} from "@/components/ui/navigation-menu";

import { 
    navigationAbout,
    navigationAcademic,
    navigationNews
} from "./MockDataNavigtion";

export default function DesktopMenu({ className }: { className?: string }) {
    const locale = useLocale();
    const translate = useTranslations('NavigationMenu');
    
    return (
        <NavigationMenu className={className} viewport={false}>
            <NavigationMenuList>
                {/* About */}
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-sm font-medium leading-none [&_svg]:hidden">{translate('About')}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <div className="grid gap-3 p-4 w-72">
                            {navigationAbout.map((category) => (
                                <div key={category.title} className="space-y-2">
                                    <h4 className="text-sm font-medium leading-none">
                                        {locale === 'th' ? category.titleTH : category.title}
                                    </h4>
                                    <hr className="my-2" />
                                    <div className="grid gap-1">
                                        {category.content.map((item) => (
                                            <NavigationMenuLink
                                                key={item.title}
                                                href={item.url}
                                                className={cn(
                                                    "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                                )}
                                            >
                                                <div className="flex items-center gap-2">
                                                    {item.icon && <item.icon className="h-4 w-4" />}
                                                    <div className="text-sm font-medium leading-none">
                                                        {locale === 'th' ? item.titleTH : item.title}
                                                    </div>
                                                </div>
                                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                    {locale === 'th' ? item.descriptionTH : item.description}
                                                </p>
                                            </NavigationMenuLink>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                {/* Academic */}
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-sm font-medium leading-none [&_svg]:hidden">{translate('Academic')}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <div className="grid gap-3 p-4 w-100">
                            {navigationAcademic.map((category) => (
                                <div key={category.title} className="space-y-2">
                                    <h4 className="text-sm font-medium leading-none">
                                        {locale === 'th' ? category.titleTH : category.title}
                                    </h4>
                                    <hr className="my-2" />
                                    <div className="grid gap-1">
                                        {category.content.map((item) => (
                                            <NavigationMenuLink
                                                key={item.title}
                                                href={item.url}
                                                className={cn(
                                                    "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                                )}
                                            >
                                                <div className="flex items-center gap-2">
                                                    {item.icon && <item.icon className="h-4 w-4" />}
                                                    <div className="text-sm leading-none">
                                                        {locale === 'th' ? item.titleTH : item.title}
                                                    </div>
                                                </div>
                                            </NavigationMenuLink>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                {/* News */}
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-sm font-medium leading-none [&_svg]:hidden">{translate('News')}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <div className="grid gap-3 p-4 w-72">
                            {navigationNews.map((category) => (
                                <div key={category.title} className="space-y-2">
                                    <h4 className="text-sm font-medium leading-none">
                                        {locale === 'th' ? category.titleTH : category.title}
                                    </h4>
                                    <hr className="my-2" />
                                    <div className="grid gap-1">
                                        {category.content.map((item) => (
                                            <NavigationMenuLink
                                                key={item.title}
                                                href={item.url}
                                                className={cn(
                                                    "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                                )}
                                            >
                                                <div className="flex items-center gap-2">
                                                    {item.icon && <item.icon className="h-4 w-4" />}
                                                    <div className="text-sm leading-none">
                                                        {locale === 'th' ? item.titleTH : item.title}
                                                    </div>
                                                </div>
                                            </NavigationMenuLink>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </NavigationMenuContent>    
                </NavigationMenuItem>
                {/* Contact */}
                <NavigationMenuItem>
                    <NavigationMenuLink href="/contact" className="text-sm font-medium leading-none [&_svg]:hidden">{translate('Contact')}</NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}