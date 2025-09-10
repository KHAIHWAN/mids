'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface LocaleSwitcherProps {
	isScrolled?: boolean;
}

export default function LocaleSwitcher({ isScrolled = false }: LocaleSwitcherProps) {
	const locale = useLocale(); // locale ปัจจุบัน เช่น 'en' หรือ 'th'
	const router = useRouter(); // ตัวควบคุมเส้นทาง
	const pathname = usePathname(); // path ปัจจุบัน เช่น '/about'

	// ฟังก์ชันเปลี่ยนภาษา
	const switchLocale = (newLocale: string) => {
		// ถ้าเลือกภาษาที่ต่างจากปัจจุบัน
		if (newLocale !== locale) {
			// ใช้ router.replace() เปลี่ยน URL เป็นภาษาที่เลือก
			// โดยยังคง path เดิมไว้
			router.replace(pathname, { locale: newLocale });
			// refresh() เพื่อให้เนื้อหาโหลดใหม่ตาม locale
			router.refresh();
		}
	};

	const locales = [
		{ language: 'English', countryCode: 'en' },
		{ language: 'ภาษาไทย', countryCode: 'th' },
	];

	return (
		<DropdownMenu modal={false}>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" size="sm" className={cn(isScrolled && 'lg:hidden')}>
					{/* แสดง language ภาษาปัจจุบัน */}
					{locales.find((lang) => lang.countryCode === locale)?.language ??
						'Select language'}
				</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent align="end">
				{locales.map((lang) => (
					<DropdownMenuItem
						key={lang.countryCode}
						onClick={() => switchLocale(lang.countryCode)}
						disabled={lang.countryCode === locale}>
						{lang.language}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
