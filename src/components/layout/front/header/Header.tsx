import Link from "next/link";
import { useTranslations } from "next-intl";

import Logos from "@/components/layout/Logos";
import LanguageSwitcher2 from "@/components/LanguagesSwitcher2";

import { Button } from "@/components/ui/button";

import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

export default function Header() {
    const translate = useTranslations('HeaderAction');
  
    return (
        <header className="sticky top-0 z-50">
            <nav className="h-16 bg-background border-b">
                <div className="h-full flex items-center justify-between max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6 lg:px-8">
                    <Link href="#">
                        <Logos />
                    </Link>
                    {/* Desktop Menu */}
                    <DesktopMenu className="hidden md:block" />

                    <div className="flex items-center gap-3">
                        <LanguageSwitcher2 />
                        <Button className="hidden sm:inline-flex">{translate('Login')}</Button>

                        {/* Mobile Menu */}
                        <div className="md:hidden">
                            <MobileMenu />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}