import React from "react";

export default function ButtonComponent({ children, type = "button",  className = "", bgColor = "bg-customNavGreen",onClickbtn, ...props}) {
    return (
        <button type={type} className={`${className} w-full rounded-lg min-h-min ${bgColor}`} onClick={onClickbtn ? (e) => onClickbtn(e) : undefined}>
            {children}
        </button>
    );
}