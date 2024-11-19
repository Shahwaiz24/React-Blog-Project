import React from "react";

export default function ButtonComponent({ children, className = "", bgColor = "bg-customNavGreen",onClick, ...props}) {
    return (
        <button className={`${className} w-full rounded-lg min-h-min ${bgColor}`} onClick={(e) => onClick(e)}>
            {children}
        </button>
    );
}