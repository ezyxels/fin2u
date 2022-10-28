import React from "react";

type Props = {
  as?: React.ElementType;
  id: string;
  name: string;
  label: string;
  isDisabled?: boolean;
  isRequired?: boolean;
  className?: string;
  children: React.ReactNode;
  [x: string]: any;
};

export default function Checkbox({
  as: Tag = "div",
  id = "checkbox-id",
  name = "checkbox-name",
  isDisabled = false,
  isRequired = false,
  className = "",
  children,
  ...rest
}: Props) {
  return (
    <Tag className={`flex h-auto ${className}`}>
      <input
        type="checkbox"
        id={id}
        name={name}
        className={`h-5 w-5 rounded border-2
          border-body-200 bg-white transition-shadow duration-150
          checked:bg-primary checked:hover:bg-primary
          focus:border-body focus:!outline-none focus:ring-4 focus:ring-primary/70 focus:ring-offset-0
          checked:focus:bg-primary
          ${
            isDisabled
              ? "pointer-events-none cursor-not-allowed opacity-60"
              : "cursor-pointer opacity-100"
          }`}
        disabled={isDisabled}
        required={isRequired}
        {...rest}
      />
      <label htmlFor={id} className="ml-3 text-muted">
        {children}
      </label>
    </Tag>
  );
}
