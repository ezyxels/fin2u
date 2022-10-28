type DropdownOptions = {
  as?: React.ElementType;
  children?: React.ReactNode;
  className?: string;
  [x: string]: any;
};

export default function Dropdown({
  as: Tag = "div",
  className = "",
  // children,
  ...rest
}: DropdownOptions) {
  // Logic goes here
  return (
    <Tag className={`group relative ${className}`} {...rest}>
      <button className="inline-flex items-center rounded bg-gray-300 py-2 px-4 font-semibold text-gray-700">
        <span className="mr-1">Dropdown</span>
        <svg
          className="h-4 w-4 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </button>
      <ul className="absolute hidden pt-1 text-gray-700 group-hover:block">
        <li className="">
          <a
            className="whitespace-no-wrap block rounded-t bg-gray-200 py-2 px-4 hover:bg-gray-400"
            href="#"
          >
            One
          </a>
        </li>
        <li className="">
          <a
            className="whitespace-no-wrap block bg-gray-200 py-2 px-4 hover:bg-gray-400"
            href="#"
          >
            Two
          </a>
        </li>
        <li className="">
          <a
            className="whitespace-no-wrap block rounded-b bg-gray-200 py-2 px-4 hover:bg-gray-400"
            href="#"
          >
            Three is the magic number
          </a>
        </li>
      </ul>
    </Tag>
  );
}
