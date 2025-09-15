import { Atom,
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
	Users, type LucideIcon } from "lucide-react"

export interface AboutContent {
    title: string
    titleTH: string
    url: string
    icon?: LucideIcon
    description: string
    descriptionTH: string
}

export interface NavigationAbout {
    title: string
    titleTH: string
    content: AboutContent[]
}

export const navigationAbout: NavigationAbout[] = [
    {
        title: "About MIDS",
        titleTH: "แนะนำวิทยาลัย",
        content: [
            {
                title: "History",
                titleTH: "เรื่องราวของเรา",
                url: "/about/history",
                icon: School,
                description: "A history that reflects the identity and evolution of the faculty.",
                descriptionTH: "เรื่องราวที่สะท้อนถึงตัวตนและพัฒนาการของคณะ ประมาณนี้ได้ไหม"
            },
            {
                title: "Vision & Mission",
                titleTH: "วิสัยทัศน์ & พันธกิจ",
                url: "/about/vision-mission",
                icon: Compass,
                description: "Our commitment, direction, and purpose that shape the path forward.",
                descriptionTH: "ความมุ่งมั่น ทิศทาง และะเจตนารมณ์ ที่กำหนดเส้นทางอนาคต"
            }
        ]
    },{
        title: "Organization",
        titleTH: "โครงสร้างองค์กร",
        content: [
            {
                title: "Organizational Chart",
                titleTH: "แผนผังองค์กร",
                url: "/about/organizational-chart",
                icon: Network,
                description: "An overview of the faculty's structure and lines of responsibility.",
                descriptionTH: "ภาพรวมโครงสร้างองค์กรและสายงานความรับผิดชอบของคณะ"
            },
            {
                title: "Personnel",
                titleTH: "ทีมขับเคลื่อน",
                url: "/about/personnel",
                icon: Users,
                description: "Meet the people who drive the faculty forward.",
                descriptionTH: "ทำความรู้จักกับทีมงานที่เป็นแรงผลักดันสู่ความสำเร็จของคณะ"
            }
        ]
    },{
        title: "Public Information",
        titleTH: "ข้อมูลสาธารณะ",
        content: [
            {
                title: "MIDS OTA",
                titleTH: "MIDS OTA",
                url: "/about/mids-ota",
                icon: ShieldCheck,
                description: "Open Data Integrity and Transparency Assessment.",
                descriptionTH: "การเปิดเผยข้อมูลสาธารณะ"
            },
            {
                title: "Another",
                titleTH: "อื่นๆ",
                url: "/about/another",
                icon: Library,
                description: "Another description.",
                descriptionTH: "อื่นๆ"
            }
        ]
    }
]
