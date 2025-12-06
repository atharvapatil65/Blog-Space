import React from "react";

export default function Button({
    children,
    type = "button",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    className = "",
    ...props
}) {
    // Determine hover color based on bgColor
    const getHoverColor = () => {
        if (bgColor.includes("red")) return "hover:bg-red-700";
        if (bgColor.includes("green")) return "hover:bg-green-700";
        if (bgColor.includes("blue")) return "hover:bg-blue-700";
        return "hover:opacity-90";
    };

    return (
        <button 
            type={type}
            className={`
                px-6 py-2.5 rounded-lg font-medium text-sm
                ${bgColor} ${textColor} 
                ${getHoverColor()}
                shadow-md hover:shadow-lg
                transform active:scale-95
                transition-all duration-200
                disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
                ${className}
            `} 
            {...props}
        >
            {children}
        </button>
    );
}