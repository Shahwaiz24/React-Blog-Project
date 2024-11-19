import React from "react";

export default function InputFieldsComponent({
    placeholder,
    value,
    onChanged,
    className = "",
    type = "text",
    required = true,
    onInputValidation = () =>{}
}) {
    return (
        <input
        onInput={onInputValidation}
            className={`w-full rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-yellow-500 transition-all duration-200 ${className}`}
            value={value}
            required={required}
            type={type}
            onChange={(e) => onChanged(e)}
            placeholder={placeholder}
        />
    );
}
