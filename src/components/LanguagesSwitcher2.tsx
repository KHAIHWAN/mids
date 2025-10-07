'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { Button } from './ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuGroup, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu';


export default function LanguagesSwitcher2() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    
    const switchLanguage = (newLocale: string) => {
        // Remove the current locale from the path and add the new one
        const segments = pathname.split('/');
        segments[1] = newLocale; // The locale is always the second segment
        const newPath = segments.join('/');
        router.push(newPath);
    };
    
    return (
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" >
                    {locale === 'en' ? 'English' : 'ภาษาไทย'}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuGroup>
                    <DropdownMenuItem 
                        onClick={() => switchLanguage('en')} 
                        disabled={locale === 'en'}>
                            English
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                        onClick={() => switchLanguage('th')} 
                        disabled={locale === 'th'}>
                            ภาษาไทย
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}