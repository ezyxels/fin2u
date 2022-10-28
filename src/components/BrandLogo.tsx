type BrandLogoOptions = {
  className?: string;
  isInverted?: boolean;
};

export default function BrandLogo({
  className = "",
  isInverted = false,
}: BrandLogoOptions) {
  return (
    <div className={`h-[46px] w-[128px] ${className}`}>
      {isInverted ? (
        <img
          src="/logos/fin2u-logo-light.svg"
          alt="Logo značky"
          width="128"
          height="46"
          className={`h-full w-full transition duration-200`}
        />
      ) : (
        <img
          src="/logos/fin2u-logo-dark.svg"
          alt="Logo značky"
          width="128"
          height="46"
          className={`h-full w-full transition duration-200`}
        />
      )}
    </div>
  );
}
