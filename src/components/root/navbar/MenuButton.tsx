type MenuButtonOptions = {
  isActivated: boolean;
  onClick: () => void;
  className?: string;
};

export default function MenuButton({
  isActivated = false,
  onClick,
  className = "",
  ...rest
}: MenuButtonOptions) {
  return (
    <button
      onClick={onClick}
      className={`flex h-[36px] w-[40px] flex-col items-center justify-between p-[10px] ${className}`}
      {...rest}
    >
      <span className="sr-only">Otevřít / zavřít menu</span>
      <span
        aria-hidden="true"
        className={`block h-[2px] w-[28px] transform-gpu rounded-full transition duration-300 ease-out-back ${
          isActivated ? "translate-y-[7px] -rotate-45 bg-white" : "bg-rich"
        }`}
      ></span>
      <span
        aria-hidden="true"
        className={`block h-[2px] w-[28px] transform-gpu rounded-full transition duration-300 ease-out-back ${
          isActivated ? "translate-x-1 bg-white opacity-0" : "bg-rich"
        }`}
      ></span>
      <span
        aria-hidden="true"
        className={`block h-[2px] w-[28px] transform-gpu rounded-full transition duration-300 ease-out-back ${
          isActivated ? "translate-y-[-7px] rotate-45 bg-white" : "bg-rich"
        }`}
      ></span>
    </button>
  );
}
