import classNameMerge from "@/shared/utils/classNameMerge";

type IconProps = {
  src: string;
  alt: string;
  className?: string;
  onClick?: () => void;
};

const Icon = ({ src, alt, className, onClick }: IconProps) => {
  return (
    <img
      src={src}
      alt={alt}
      className={classNameMerge("cursor-pointer", className)}
      onClick={onClick}
    />
  );
};

export default Icon;
