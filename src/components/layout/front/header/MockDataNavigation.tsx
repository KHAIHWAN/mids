import {
	Atom,
	Brain,
	Briefcase,
	CalendarDays,
	CalendarHeart,
	Compass,
	Dna,
	Dumbbell,
	FileText,
	Fingerprint,
	Globe2,
	GraduationCap,
	Home,
	Info,
	Languages,
	Library,
	Mail,
	Megaphone,
	MessageSquare,
	Network,
	Newspaper,
	School,
	ScrollText,
	ShieldCheck,
	Trophy,
	Users,
} from 'lucide-react';

export interface Language {
	en: string;
	th: string;
}

export interface NavigationContent {
	title: Language[];
	pathURL: string;
	icon?: React.ReactNode;
	description?: Language[];
	content?: NavigationContent[];
}

export interface NavigationSection {
	title: Language[];
	content: NavigationContent[];
}

// =================================================================
// (Static Data)
// =================================================================
export const staticNavigation: NavigationSection[] = [
	{
		title: [{ en: 'About MIdS', th: 'แนะนำวิทยาลัย' }],
		content: [
			{
				title: [{ en: 'History', th: 'เรื่องราวของเรา' }],
				pathURL: '/about/history',
				icon: <School className="h-5 w-5" />,
				description: [
					{
						en: 'A history that reflects the identity and evolution of the faculty.',
						th: 'เรื่องราวที่สะท้อนถึงตัวตนและพัฒนาการของคณะ ประมาณนี้ได้ไหม',
					},
				],
			},
			{
				title: [{ en: 'Vision & Mission', th: 'วิสัยทัศน์ & พันธกิจ' }],
				pathURL: '/about/vision-mission',
				icon: <Compass className="h-5 w-5" />,
				description: [
					{
						en: 'Our commitment, direction, and purpose that shape the path forward.',
						th: 'ความมุ่งมั่น ทิศทาง และะเจตนารมณ์ ที่กำหนดเส้นทางอนาคต',
					},
				],
			},
		],
	},
	{
		title: [{ en: 'Organization', th: 'โครงสร้างองค์กร' }],
		content: [
			{
				title: [{ en: 'Organizational Chart', th: 'แผนผังองค์กร' }],
				pathURL: '/about/organization-chart',
				icon: <Network className="h-5 w-5" />,
				description: [
					{
						en: "An overview of the faculty's structure and lines of responsibility.",
						th: 'ภาพรวมโครงสร้างองค์กรและสายงานความรับผิดชอบของคณะ',
					},
				],
			},
			{
				title: [{ en: 'Personnel', th: 'ทีมขับเคลื่อน' }],
				pathURL: '/about/personnel',
				icon: <Users className="h-5 w-5" />,
				description: [
					{
						en: 'Meet the people who drive the faculty forward.',
						th: 'ทำความรู้จักกับทีมงานที่เป็นแรงผลักดันสู่ความสำเร็จของคณะ',
					},
				],
			},
		],
	},
	{
		title: [{ en: 'Public Information', th: 'ข้อมูลสาธารณะ' }],
		content: [
			{
				title: [{ en: 'MIdS OIT', th: 'ข้อมูลสาธารณะประจำปี' }],
				pathURL: '/public-information/oit',
				icon: <ShieldCheck className="h-5 w-5" />,
				description: [
					{
						en: 'Open Data Integrity and Transparency Assessment.',
						th: 'การเปิดเผยข้อมูลสาธารณะ',
					},
				],
			},
			{
				title: [{ en: 'Another', th: 'อื่นๆ' }],
				pathURL: '/public-information/another',
				icon: <Library className="h-5 w-5" />,
				description: [
					{
						en: 'Another',
						th: 'อื่นๆ',
					},
				],
			},
		],
	},
];

export const dynamicNavigationAcademic: NavigationSection[] = [
	{
		title: [{ en: "Master's Degree Program(s)", th: 'หลักสูตรปริญญาโท' }],
		content: [
			{
				title: [
					{
						en: 'Master of Science Program in Biotechnology',
						th: 'หลักสูตรวิทยาศาสตรมหาบัณฑิต สาขาวิชาเทคโนโลยีชีวภาพ',
					},
				],
				pathURL: '/academics/ms-biotechnology',
				icon: <Dna className="h-5 w-5" />,
			},
			{
				title: [
					{
						en: 'Master of Science Program in Forensic Science',
						th: 'หลักสูตรวิทยาศาสตรมหาบัณฑิต สาขาวิชานิติวิทยาศาสตร์',
					},
				],
				pathURL: '/academics/ms-forensic-science',
				icon: <Fingerprint className="h-5 w-5" />,
			},
			{
				title: [
					{
						en: 'Master of Science Program in Sports Science',
						th: 'หลักสูตรวิทยาศาสตรมหาบัณฑิต สาขาวิชาวิทยาศาสตร์การกีฬา',
					},
				],
				pathURL: '/academics/ms-sports-science',
				icon: <Dumbbell className="h-5 w-5" />,
			},
			{
				title: [
					{
						en: 'Master of Science Program in Mental Health',
						th: 'หลักสูตรวิทยาศาสตรมหาบัณฑิต สาขาวิชาสุขภาพจิต',
					},
				],
				pathURL: '/academics/ms-mental-health',
				icon: <Dumbbell className="h-5 w-5" />,
			},
			{
				title: [
					{
						en: 'Master of Arts Program in Contemporary Chinese Language Teaching',
						th: 'หลักสูตรศิลปศาสตรมหาบัณฑิต สาขาวิชาการสอนภาษาจีนร่วมสมัย',
					},
				],
				pathURL: '/academics/ma-chinese-teaching',
				icon: <Languages className="h-5 w-5" />,
			},
			{
				title: [
					{
						en: 'Master of Arts and Science Program in Integrated Science',
						th: 'หลักสูตรศิลปศาสตรและวิทยาศาสตรมหาบัณฑิต สาขาวิชาบูรณาการศาสตร์',
					},
				],
				pathURL: '/academics/mas-integrated-science',
				icon: <Atom className="h-5 w-5" />,
			},
		],
	},
	{
		title: [{ en: 'Doctoral Degree Program(s)', th: 'หลักสูตรปริญญาเอก' }],
		content: [
			{
				title: [
					{
						en: 'Doctor of Philosophy Program in Biotechnology',
						th: 'หลักสูตรปรัชญาดุษฎีบัณฑิต สาขาวิชาเทคโนโลยีชีวภาพ',
					},
				],
				pathURL: '/academics/phd-biotechnology',
				icon: <Dna className="h-5 w-5" />,
			},
			{
				title: [
					{
						en: 'Doctor of Philosophy Program in Mental Health',
						th: 'หลักสูตรปรัชญาดุษฎีบัณฑิต สาขาวิชาสุขภาพจิต',
					},
				],
				pathURL: '/academics/phd-mental-health',
				icon: <Brain className="h-5 w-5" />,
			},
			{
				title: [
					{
						en: 'Doctor of Philosophy Program in Integrated Science',
						th: 'หลักสูตรปรัชญาดุษฎีบัณฑิต สาขาวิชาบูรณาการศาสตร์',
					},
				],
				pathURL: '/academics/phd-integrated-science',
				icon: <Atom className="h-5 w-5" />,
			},
		],
	},
];

export const dynamicNavigationNews: NavigationSection[] = [
	{
		title: [{ en: 'Announcement', th: 'ประกาศ' }],
		content: [
			{
				title: [
					{
						en: 'Announcement from CMU',
						th: 'ประกาศจากมหาวิทยาลัย',
					},
				],
				pathURL: '/news/announcements',
				icon: <Megaphone className="h-5 w-5" />,
			},
			{
				title: [
					{
						en: 'Policy from CMU',
						th: 'นโยบายจากมหาวิทยาลัย',
					},
				],
				pathURL: '/news/policies',
				icon: <ScrollText className="h-5 w-5" />,
			},
		],
	},
	{
		title: [{ en: 'Events', th: 'กิจกรรม' }],
		content: [
			{
				title: [
					{
						en: 'All Events',
						th: 'กิจกรรมทั้งหมด',
					},
				],
				pathURL: '/events',
				icon: <CalendarHeart className="h-5 w-5" />,
			},
		],
	},
	{
		title: [{ en: 'News', th: 'ข่าวสาร' }],
		content: [
			{
				title: [
					{
						en: 'All News',
						th: 'กิจกรรมทั้งหมด',
					},
				],
				pathURL: '/news',
				icon: <Newspaper className="h-5 w-5" />,
			},
			{
				title: [
					{
						en: 'General News',
						th: 'ข่าวทั่วไป',
					},
				],
				pathURL: '/news/general',
				icon: <MessageSquare className="h-5 w-5" />,
			},
			{
				title: [
					{
						en: 'Activities News',
						th: 'ข่าวกิจกรรม',
					},
				],
				pathURL: '/news/activities',
				icon: <CalendarDays className="h-5 w-5" />,
			},
			{
				title: [
					{
						en: 'Educational Service News',
						th: 'ข่าวบริการการศึกษาและทุนการศึกษา',
					},
				],
				pathURL: '/news/education',
				icon: <GraduationCap className="h-5 w-5" />,
			},
			{
				title: [
					{
						en: 'Exchange Programs and Scholarships',
						th: 'โครงการแลกเปลี่ยนและทุนการศึกษาต่างประเทศ',
					},
				],
				pathURL: '/news/scholarships',
				icon: <Globe2 className="h-5 w-5" />,
			},
			{
				title: [
					{
						en: 'Awards and Research Achievements',
						th: 'รางวัลและผลงานการวิจัย',
					},
				],
				pathURL: '/news/awards',
				icon: <Trophy className="h-5 w-5" />,
			},
			{
				title: [
					{
						en: 'Job Application News',
						th: 'ข่าวรับสมัครงาน',
					},
				],
				pathURL: '/news/jobs',
				icon: <Briefcase className="h-5 w-5" />,
			},
			{
				title: [
					{
						en: 'Procurement Announcements',
						th: 'ข่าวประกวดราคา',
					},
				],
				pathURL: '/news/procurement',
				icon: <FileText className="h-5 w-5" />,
			},
		],
	},
];
