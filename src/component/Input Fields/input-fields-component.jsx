import React from "react";

export default function InputFieldsComponent({
    placeholder,
    value,
    onChanged,
    className = "",
    required = true
}) {
    return (
        <input
            className={`w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-yellow-500 transition-all duration-200 ${className}`}
            value={value}
            required={required}
            type="text"
            onChange={(e) => onChanged(e)}
            placeholder={placeholder}
        />
    );
}
