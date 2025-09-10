import { use } from 'react';
import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function IndexPage({ params }: { params: Promise<{ locale: 'th' | 'en' }> }) {
	const { locale } = use(params);

	// ใส่ใน page ด้วย หากอยากให้เพจนี้ build เป็น static ได้ชัวร์
	setRequestLocale(locale);

	const t = useTranslations('IndexPage');

	const nextLocale = locale === 'th' ? 'en' : 'th';

	return (
		<main className="p-8 space-y-3">
			{/* <h1 className="text-2xl font-semibold">{t('title')}</h1>
			<p>{t('intro')}</p>
			<Link href="/" locale={nextLocale} className="underline">
				{t('switch')}
			</Link> */}

			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
		</main>
	);
}
