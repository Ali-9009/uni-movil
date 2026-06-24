import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown, LogIn, UserPlus } from "lucide-react";
import Button from "./PrimaryBtn";
import LanguageSelector from "./LanguageSelector";

export default function Header() {
    const [open, setOpen] = useState(false);
    const [signOpen, setSignOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const dropdownRef = useRef(null);
    const location = useLocation();

    // ACTIVE LINK STYLE
    const linkClass = ({ isActive }) =>
        isActive
            ? "text-(--primary-color) font-semibold"
            : "text-gray-700 hover:text-(--secondary-color) transition";

    // CLOSE ON ROUTE CHANGE
    useEffect(() => {
        setOpen(false);
        setSignOpen(false);
    }, [location]);

    // CLOSE DROPDOWN ON OUTSIDE CLICK
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setSignOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // HEADER SCROLL EFFECT
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* HEADER */}
            <header
                className={`sticky top-0 w-full z-50 border border-gray-300 transition-all duration-300
  ${scrolled
                        ? "bg-white/70 backdrop-blur-lg shadow-md border-b border-gray-200 h-16"
                        : "bg-transparent h-20"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
                    {/* LOGO */}
                    <Link to="/">
                        <img
                            src="/assets/logo.png"
                            alt="logo"
                            className={`transition-all duration-300 object-contain ${scrolled ? "h-10" : "h-14"
                                }`}
                        />
                    </Link>

                    {/* DESKTOP NAV */}
                    <nav className="hidden md:flex gap-8 font-medium">
                        <NavLink to="/plan" className={linkClass}>Plans</NavLink>
                        <NavLink to="/internet" className={linkClass}>Internet</NavLink>
                        <NavLink to="/how-its-work" className={linkClass}>How It Works</NavLink>
                        <NavLink to="/contact" className={linkClass}>Contact Us</NavLink>
                    </nav>

                    {/* RIGHT SIDE */}
                    <div className="flex items-center gap-3">

                        {/* SIGN IN DROPDOWN */}
                        <div ref={dropdownRef} className="relative hidden md:block">

                            <Button
                                text="Sign In"
                                icon={<ChevronDown size={18} />}
                                onClick={() => setSignOpen((prev) => !prev)}
                            />

                            {signOpen && (
                                <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-100 shadow-xl rounded-xl p-2 space-y-2 animate-fadeIn">
                                    <Button text="Login" icon={<LogIn size={16} />} to="/signin" />
                                    <Button text="Register" icon={<UserPlus size={16} />} to="/signup" />
                                </div>
                            )}
                        </div>

                        {/* LANGUAGE */}
                        <LanguageSelector />

                        {/* MOBILE MENU */}
                        <button
                            className="md:hidden text-2xl"
                            onClick={() => setOpen(true)}
                        >
                            ☰
                        </button>
                    </div>
                </div>
            </header>

            {/* OVERLAY */}
            {open && (
                <div
                    className="fixed inset-0 bg-black/50 z-40"
                    onClick={() => setOpen(false)}
                />
            )}

            {/* SIDEBAR */}
            <div
                className={`fixed top-0 left-0 h-full w-72 z-50 
                bg-white shadow-2xl border-r border-gray-100
                transform transition-transform duration-300 ease-out
                ${open ? "translate-x-0" : "-translate-x-full"}`}
            >
                {/* SIDEBAR HEADER */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200">
                    <img src="/assets/logo.png" className="h-8" />
                    <button
                        onClick={() => setOpen(false)}
                        className="text-xl"
                    >
                        ✕
                    </button>
                </div>

                {/* LINKS */}
                <div className="flex flex-col p-4 space-y-4 font-medium">
                    <NavLink to="/plan" className={linkClass}>Plans</NavLink>
                    <NavLink to="/internet" className={linkClass}>Internet</NavLink>
                    <NavLink to="/how-its-work" className={linkClass}>How It Works</NavLink>
                    <NavLink to="/contact" className={linkClass}>Contact Us</NavLink>
                </div>

                {/* BUTTONS */}
                <div className="p-4 border-t border-gray-200 space-y-3">
                    <Button text="Login" icon={<LogIn size={16} />} to="/signin" />
                    <Button text="Register" icon={<UserPlus size={16} />} to="/signup" />
                </div>
            </div>
        </>
    );
}