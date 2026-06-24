import { Link } from "react-router-dom";

export default function Footer() {

    const navLinks = [
        { name: "Plans", path: "/plan" },
        { name: "Internet", path: "/internet" },
        { name: "How it Works", path: "/how-its-work" },
        { name: "Contact Us", path: "/contact" },
        { name: "Internet Activation", path: "/activation-2" },
    ];

    return (
        <footer id="footer-component" className="border-t border-[#D1D1D1]">

            {/* TOP SECTION */}
            <div className="py-12 sm:pt-16 flex flex-col items-center gap-4 px-5">

                {/* LOGO */}
                <Link to="/">
                    <img
                        src="/assets/logo.png"
                        alt="Logo"
                        className="w-28 md:w-40 mb-2"
                    />
                </Link>

                {/* NAV LINKS (MAPPED) */}
                <ul className="flex flex-col md:flex-row items-center gap-5 md:gap-10">

                    {navLinks.map((item, index) => (
                        <li key={index}>
                            <Link
                                to={item.path}
                                className="font-bold text-[16px] tracking-wide text-black hover:text-(--primary-color) transition"
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}

                </ul>
            </div>

            {/* BOTTOM SECTION */}
            <div className="flex items-center">

                {/* Left curve */}
                <div className="hidden md:block w-[35%] rounded-tr-[100px] bg-(--primary-color) h-16" />

                {/* Center text */}
                <div className="w-full md:w-[30%] flex items-center justify-center py-4">
                    <p className="text-center text-[13px] sm:text-[16px] text-black leading-6">
                        ©2026 Uni-Movil. All rights reserved.
                    </p>
                </div>

                {/* Right curve */}
                <div className="hidden md:block w-[35%] rounded-tl-[100px] bg-(--primary-color) h-16" />
            </div>
        </footer>
    );
}