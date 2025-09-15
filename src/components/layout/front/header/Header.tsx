import Link from "next/link";
import Logos from "@/components/layout/Logos";
import DesktopMenu from "./DesktopMenu";
import { Button } from "@/components/ui/button";
import LanguageSwitcher2 from "@/components/LanguagesSwitcher2";
import { useTranslations } from 'next-intl';

export default function Header() {
    const translate = useTranslations('HeaderAction');
    
    return (
        <header className="min-h-screen bg-muted">
            <nav className="h-16 bg-background border-b">
                <div className="h-full flex items-center justify-between max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6 lg:px-8">
                    <Link href="#">
                        <Logos />
                    </Link>
                    {/* Desktop Menu */}
                    <DesktopMenu className="hidden md:block" />


                    <div className="flex items-center gap-3">
                        <LanguageSwitcher2 />
                        <Button className="hidden sm:inline">{translate('Login')}</Button>
                    </div>

                    {/* Mobile Menu */}
                    <div className="md:hidden">
                        Mobile Menu
                    </div>
                </div>
            </nav>
        </header>
    );
}