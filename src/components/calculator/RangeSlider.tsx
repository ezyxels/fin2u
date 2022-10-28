import { useEffect, useRef, useState } from "react";
import { HiMinus, HiPlus } from "react-icons/hi";

interface RangeSliderProps {
  changeData?: any;
  id: string;
  min: number;
  max: number;
  skip: number;
  title: string;
  unit?: string;
}

export default function RangeSlider({
  changeData,
  id,
  min,
  max,
  skip,
  title,
  unit,
}: RangeSliderProps) {
  const [value, setValue] = useState<any>(min);
  const [contentShown, setContentShown] = useState<"span" | "input">("span");
  const inputRef: any = useRef();

  useEffect(() => {
    changeData(id, min);
    min > value && setValue(min);
    max < value && setValue(max);
  }, [min, max]);

  function setValueAndInputData(e: number) {
    changeData(id, e);
    setValue(e);
  }

  return (
    <div id={id} className="mx-auto mb-10 flex w-full flex-col">
      <div className="flex flex-row justify-between">
        <p>{title}</p>
        <span
          className={`c-link-3-a hidden h-fit min-w-[120px] text-right ${
            contentShown === "span" && "!block"
          }`}
          onClick={() => {
            setContentShown("input");
            setTimeout(() => {
              inputRef.current.focus();
            }, 50);
          }}
        >
          {unit?.includes("Kč")
            ? value.toLocaleString() + " " + unit
            : value + " " + unit}
        </span>
        <input
          name={id}
          type="number"
          ref={inputRef}
          className={`hidden h-fit w-28 rounded-sm px-2 text-right outline-none ring-primary focus:ring-2
           ${contentShown === "input" && "!block"}`}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          onBlur={() => {
            if (value < min) {
              setValueAndInputData(min);
            } else if (value > max) {
              setValueAndInputData(max);
            } else {
              setValueAndInputData(value);
            }
            setContentShown("span");
          }}
        ></input>
      </div>
      <div className="mt-6 flex w-full justify-between">
        <button
          className="flex items-center justify-center rounded-full bg-primary/10 p-3 text-base text-secondary outline-none transition-colors duration-300 hover:bg-primary/25 focus-visible:ring-4 focus-visible:ring-primary/70"
          onClick={() =>
            value >= min + skip && setValueAndInputData(parseInt(value) - skip)
          }
        >
          <HiMinus />
        </button>
        <div className="relative flex w-4/5 items-center">
          <input
            type="range"
            min={min}
            max={max}
            value={value}
            className="slider h-2 w-full appearance-none rounded-lg bg-body-200 opacity-70 outline-none transition duration-200 hover:opacity-100"
            onChange={(e) => setValueAndInputData(parseInt(e.target.value))}
          />
        </div>
        <button
          className="flex items-center justify-center rounded-full bg-primary/10 p-3 text-base text-secondary outline-none transition-colors duration-300 hover:bg-primary/25 focus-visible:ring-4 focus-visible:ring-primary/70"
          onClick={() =>
            value <= max - skip && setValueAndInputData(parseInt(value) + skip)
          }
        >
          <HiPlus />
        </button>
      </div>
    </div>
  );
}
