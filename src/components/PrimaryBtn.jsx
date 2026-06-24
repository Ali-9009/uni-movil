import { Link } from "react-router-dom";

export default function Button({
    text,
    icon,
    iconPosition = "right",
    to,
    onClick,
    type = "button",
    className = "",
    state, // 👈 added
}) {
    const baseClass = `px-6 py-2 rounded-lg cursor-pointer
    bg-(--primary-color) text-white font-medium
    hover:bg-(--secondary-color)
    transition-all duration-300 
    flex items-center justify-center gap-2 ${className}`;

    const content = (
        <>
            {icon && iconPosition === "left" && icon}
            {text}
            {icon && iconPosition === "right" && icon}
        </>
    );

    if (to) {
        return (
            <Link to={to} state={state} className={baseClass}>
                {content}
            </Link>
        );
    }

    return (
        <button type={type} onClick={onClick} className={baseClass}>
            {content}
        </button>
    );
}   