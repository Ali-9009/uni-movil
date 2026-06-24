import { useState } from "react";

export default function ImageWithLoader({ src, alt, className }) {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className="relative flex items-center justify-center">

            {/* Skeleton */}
            {!loaded && (
                <div className="absolute w-full h-full bg-gray-300 rounded-xl animate-pulse" />
            )}

            {/* Image */}
            <img
                src={src}
                alt={alt}
                onLoad={() => setLoaded(true)}
                className={`
                    transition-all duration-700 ease-out
                    ${loaded ? "opacity-100 scale-100" : "opacity-0 scale-105"}
                    ${className}
                `}
            />
        </div>
    );
}