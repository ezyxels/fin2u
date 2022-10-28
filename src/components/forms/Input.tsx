import React from "react";

type Props = {
  as?: React.ElementType;
  type?: "text" | "tel" | "email" | "password" | "search" | "url";
  id: string;
  name: string;
  label: string;
  isDisabled?: boolean;
  isRequired?: boolean;
  className?: string;
  [x: string]: any;
};

export default function Input({
  as: Tag = "div",
  type = "text",
  id = "input-id",
  name = "input-field",
  label = "input-label",
  isDisabled = false,
  isRequired = false,
  className = "",
  ...rest
}: Props) {
  return (
    <Tag className={`block w-full ${className}`}>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        className={`focus:z-1 h-auto w-full rounded-md
          border border-body bg-body-100 px-4 
          py-3 text-base font-normal text-gray-900 
          transition placeholder:text-rich 
          placeholder:opacity-60 focus:relative focus:border-primary/70 focus:bg-white
          focus:!outline-none focus:ring-4 focus:ring-primary ${
            isDisabled
              ? "pointer-events-none cursor-not-allowed opacity-60"
              : "cursor-text opacity-100"
          }`}
        placeholder={label}
        disabled={isDisabled}
        required={isRequired}
        {...rest}
      />
    </Tag>
  );
}
