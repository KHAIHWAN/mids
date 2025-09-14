import Link from "next/link";
import Logos from "@/components/layout/Logos";
import { Button } from "@/components/ui/button";

export default function Header() {
    return (
        <header className="min-h-screen bg-muted">
            <nav className="h-16 bg-background border-b">
                <div className="h-full flex items-center justify-between max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6 lg:px-8">
                    <Logos />
                    {/* Desktop Menu */}
                    <div>
                        Desktop Menu
                    </div>


                    <div className="flex items-center gap-3">
                        <Button variant="outline" className="hidden sm:inline-flex">
                            Sign In
                        </Button>
                        <Button>Get Started</Button>
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