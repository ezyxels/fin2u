import { useState } from "react";

type SelectOptions = {
  as?: React.ElementType;
  title?: string;
  id: string;
  className?: string;
  values: string[];
  changeData?: any;
  [x: string]: any;
};

export default function SelectTemp({
  as: Tag = "div",
  title,
  id,
  values,
  className = "",
  changeData,
  ...rest
}: SelectOptions) {
  const [value, setValue] = useState<string>();

  function setValueAndInputData(e: string) {
    changeData !== undefined && changeData(id, e);
    setValue(e);
  }

  return (
    <Tag className={`${className}`} {...rest}>
      <div className="flex flex-row justify-between">
        <label htmlFor={id}>{title}</label>
      </div>
      <select
        id={id}
        name={id}
        onChange={(e) => setValueAndInputData(e.target.value)}
        className="z-50 mt-6 w-full rounded-md border-primary text-gray-700 duration-300 hover:bg-primary/25 focus-visible:ring-4 focus-visible:ring-primary/70"
      >
        {values.map((value: string, key: number) => (
          <option className="my-5 bg-white py-1" key={key} value={value}>
            {value}
          </option>
        ))}
      </select>
    </Tag>
  );
}
