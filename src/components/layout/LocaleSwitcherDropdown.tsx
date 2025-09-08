'use client';

import { usePathname, useRouter } from '@/i18n/navigation';
// ใช้ฟังก์ชันช่วยจาก next-intl (ผ่านไฟล์ i18n/navigation.ts)
// - usePathname() เอา path ปัจจุบัน
// - useRouter() สำหรับเปลี่ยนเส้นทางแบบ client-side

import { useLocale } from 'next-intl';
// ดึง locale ปัจจุบันจาก context ของ next-intl

// นำ component จาก shadcn/ui มาใช้สำหรับ Dropdown
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { Button } from '@/components/ui/button';

export default function LocaleSwitcherDropdown() {
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

	// รายการภาษาให้เลือก
	const locales = [
		{ code: 'en', label: 'English' },
		{ code: 'th', label: 'ไทย' },
	];

	return (
		<DropdownMenu>
			{/* ปุ่มเปิดเมนู ใช้ DropdownMenuTrigger หุ้มปุ่มของเรา */}
			<DropdownMenuTrigger asChild>
				<Button variant="outline">
					{/* แสดง label ภาษาปัจจุบัน */}
					{locales.find((l) => l.code === locale)?.label ?? 'Select language'}
				</Button>
			</DropdownMenuTrigger>

			{/* เนื้อหาใน Dropdown */}
			<DropdownMenuContent align="end">
				{locales.map((l) => (
					<DropdownMenuItem
						key={l.code}
						onClick={() => switchLocale(l.code)} // กดแล้วเปลี่ยนภาษา
						disabled={l.code === locale} // ปิดการกดถ้าภาษาปัจจุบันตรงกับตัวเลือก
					>
						{l.label}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
