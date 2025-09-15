import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Logos from "../../Logos";
import NavigationMobile from "./NavigationMobile";
import Link from "next/link";

export default function MobileMenu() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>
                        <SheetContent className="px-6 py-3">
                            <Link href="#">
                                <Logos />
                            </Link>
                            <NavigationMobile />
                        </SheetContent>
                    </SheetTitle>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
}