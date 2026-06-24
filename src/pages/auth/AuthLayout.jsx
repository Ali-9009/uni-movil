import Button from "../../components/PrimaryBtn"
import { Link } from "react-router-dom";

export default function AuthLayout({
    title,
    highlight,
    subtitle,
    children,
    footer,
    onSubmit,
    submitText,
}) {
    return (
        <div className="relative flex items-center justify-center py-16 bg-linear-to-r from-[#033F95] to-[#34C3B9]">

            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Card */}
            <div className="py-8 px-6 rounded-2xl border border-white/30 w-90 max-w-90 relative z-10 backdrop-blur-md bg-white/10">

                {/* Title */}
                <h2 className="text-[28px] text-white font-bold italic">
                    {title}{" "}{highlight}
                </h2>

                {/* Subtitle */}
                <p className="text-sm font-medium text-white -mt-1">
                    {subtitle}
                </p>

                {/* Form */}
                <form onSubmit={onSubmit} className="flex flex-col gap-4 mt-5">

                    {children}

                    <Link
                        to="/dashboard"
                        className="inline-block text-center font-semibold text-sm text-white py-2 px-4 rounded-full bg-(--primary-color) hover:bg-black transition"
                    >
                        {submitText}
                    </Link>

                    {/* Footer */}
                    {footer}
                </form>
            </div>
        </div>
    );
}