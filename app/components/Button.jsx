import Link from 'next/link'

export default function Button({href, children, variant = 'primary'}) {

    const variants = {
        primary: "bg-[#2563EB] text-white hover:bg-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6] focus:ring-offset-2",
        secondary: "bg-white text-[#2563EB] border-2 border-[#2563EB] hover:bg-gray-50 focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2"
    };

    const baseClasses = "px-6 py-3 rounded-lg font-medium transition duration-300 focus:outline-none"

    return(
        <Link
            href={href}
            className={`${baseClasses} ${variants[variant]}`}
        >
            {children}
        </Link>
    );
}