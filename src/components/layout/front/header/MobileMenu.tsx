import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

import { Menu } from "lucide-react";

import Logos from "../../Logos";
import NavigationMobile from "./NavigationMobile";

export default function MobileMenu() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent className="overflow-y-auto" aria-describedby="">
                <SheetHeader>
                    <SheetTitle>
                        <Link href="#" className="inline-block">
                            <Logos />
                        </Link>
                    </SheetTitle>
                </SheetHeader>
                <div className="px-3">
                    <NavigationMobile />
                </div>
            </SheetContent>
        </Sheet>
    );
}