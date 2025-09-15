import { Atom,
	Brain,
	Briefcase,
	Calendar,
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

export interface dynamicContent {
    title: string
    titleTH: string
    url: string
    icon?: LucideIcon
}

export interface NavigationDynamic {
    title: string
    titleTH: string
    content: dynamicContent[]
}

export const navigationAcademic: NavigationDynamic[] = [
    {
        title: "Master's Degree Program(s)",
        titleTH: "หลักสูตรปริญญาโท",
        content: [
            {
                title: "Master of Science Program in Biotechnology",
                titleTH: "หลักสูตรวิทยาศาสตรมหาบัณฑิต สาขาวิชาเทคโนโลยีชีวภาพ",
                url: "/academic/master-of-science-program-in-biotechnology",
                icon: Dna
            },
            {
                title: "Master of Science Program in Forensic Science",
                titleTH: "หลักสูตรวิทยาศาสตรมหาบัณฑิต สาขาวิชานิติวิทยาศาสตร์",
                url: "/academic/master-of-science-program-in-forensic-science",
                icon: Fingerprint
            },
            {
                title: "Master of Science Program in Sports Science",
                titleTH: "หลักสูตรวิทยาศาสตรมหาบัณฑิต สาขาวิชาวิทยาศาสตร์การกีฬา",
                url: "/academic/master-of-science-program-in-sports-science",
                icon: Dumbbell
            },
            {
                title: "Master of Science Program in Mental Healt",
                titleTH: "หลักสูตรวิทยาศาสตรมหาบัณฑิต สาขาวิชาสุขภาพจิต",
                url: "/academic/master-of-science-program-in-mental-healt",
                icon: Brain
            },
            {
                title: "Master of Arts Program in Contemporary Chinese Language Teaching",
                titleTH: "หลักสูตรศิลปศาสตรมหาบัณฑิต สาขาวิชาการสอนภาษาจีนร่วมสมัย",
                url: "/academic/master-of-arts-program-in-contemporary-chinese-language-teaching",
                icon: Languages
            },
            {
                title: "Master of Arts and Science Program in Integrated Science",
                titleTH: "หลักสูตรศิลปศาสตรและวิทยาศาสตรมหาบัณฑิต สาขาวิชาบูรณาการศาสตร์",
                url: "/academic/master-of-arts-and-science-program-in-integrated-science",
                icon: Atom
            }
        ]
    },
    {
        title: "Doctoral's Degree Program(s)",
        titleTH: "หลักสูตรปริญญาเอก",
        content: [
            {
                title: "Doctor of Philosophy Program in Biotechnology",
                titleTH: "หลักสูตรปริญญาเอก สาขาวิชาเทคโนโลยีชีวภาพ",
                url: "/academic/doctor-of-philosophy-program-in-biotechnology",
                icon: Dna
            },
            {
                title: "Doctor of Philosophy Program in Mental Healt",
                titleTH: "หลักสูตรปรัชญาดุษฎีบัณฑิต สาขาวิชาสุขภาพจิต",
                url: "/academic/doctor-of-philosophy-program-in-mental-healt",
                icon: Brain
            },
            {
                title: "Doctor of Philosophy Program in Integrated Science",
                titleTH: "หลักสูตรปรัชญาดุษฎีบัณฑิต สาขาวิชาบูรณาการศาสตร์",
                url: "/academic/doctor-of-philosophy-program-in-integrated-science",
                icon: Atom
            }
        ]
    }
]

export const navigationNews: NavigationDynamic[] = [
    {
        title: "Announcement",
        titleTH: "ประกาศ",
        content: [
            {
                title: "Announcement from CMU",
                titleTH: "ประกาศจากมหาวิทยาลัย",
                url: "/news/announcement-from-cmu",
                icon: Megaphone
            },
            {
                title: "Policy from CMU",
                titleTH: "นโยบายจากมหาวิยาลัย",
                url: "news/policy-from-cmu",
                icon: ScrollText
            }
        ]
    },
    {
        title: "Events",
        titleTH: "กิจกรรม",
        content: [
            {
                title: "All Events",
                titleTH: "กิจกรรมทั้งหมด",
                url: "/events/all-events",
                icon: CalendarHeart
            }
        ]
    },
    {
        title: "News",
        titleTH: "ข่าวสาร",
        content: [
            {
                title: "All News",
                titleTH: "ข่าวสารทั้งหมด",
                url: "/news/all-news",
                icon: Newspaper
            },
            {
                title: "General News",
                titleTH: "ข่าวสารทั่วไป",
                url: "/news/general-news",
                icon: MessageSquare
            },
            {
                title: "Activities News",
                titleTH: "ข่าวสารกิจกรรม",
                url: "/news/activities-news",
                icon: CalendarDays
            },
            {
                title: "Educational Service News",
                titleTH: "ข่าวบริการการศึกษาและทุนการศึกษา",
                url: "/news/educational-service-news",
                icon: GraduationCap
            },
            {
                title: "Exchange Programs and Scholarships",
                titleTH: "โครงการแลกเปลี่ยนและทุนการศึกษาต่างประเทศ",
                url: "/news/exchange-programs-and-scholarships",
                icon: Globe2
            },
            {
                title: "Awards and Research Achievements",
                titleTH: "รางวัลและผลงานวิจัย",
                url: "/news/awards-and-research-achievements",
                icon: Trophy
            },
            {
                title: "Job Application News",
                titleTH: "ข่าวสมัครงาน",
                url: "/news/job-application-news",
                icon: Briefcase
            },
            {
                title: "Procurement Announcements",
                titleTH: "ข่าวประกวดราคา",
                url: "/news/procurement-announcements",
                icon: FileText
            }
        ]
    }
]