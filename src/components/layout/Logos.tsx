import Image from "next/image";

export default function Logos() {
    return (
        <Image
            src="/images/logos/LogoMinimalColor.png"
            alt="Logo"
            width={100}
            height={100}
            className="w-24 h-auto"
            priority
        />
    );
}