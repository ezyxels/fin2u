type Props = {
  as?: React.ElementType;
  id: string;
  name: string;
  label: string;
  cols?: number;
  rows?: number;
  isDisabled?: boolean;
  isRequired?: boolean;
  className?: string;
  [x: string]: any;
};

export default function Textarea({
  as: Tag = "div",
  id = "textarea-id",
  name = "textarea-name",
  label = "Textarea name",
  isDisabled = false,
  isRequired = false,
  className = "",
  cols = 30,
  rows = 8,
  ...rest
}: Props) {
  return (
    <Tag className={`block w-full ${className}`}>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        cols={cols}
        rows={rows}
        className={`h-auto w-full resize-y rounded-md
      border border-body bg-body-100 px-4 py-3
      text-base font-normal text-gray-900 transition duration-150
      placeholder:text-rich placeholder:opacity-60
      focus:border-primary/70 focus:bg-white focus:!outline-none focus:ring-4 focus:ring-primary ${
        isDisabled
          ? "pointer-events-none cursor-not-allowed opacity-60"
          : "cursor-text opacity-100"
      } ${className}`}
        placeholder={label}
        disabled={isDisabled}
        required={isRequired}
        {...rest}
      />
    </Tag>
  );
}
