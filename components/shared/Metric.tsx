import Image from "next/image";
import Link from "next/link";

interface Props {
  imgUrl: string;
  alt: string;
  value: number | string;
  title: string;
  textStyles?: string;
  href?: string;
  isAuthor?: boolean;
}

const Metric = ({
  imgUrl,
  alt,
  textStyles,
  title,
  value,
  href,
  isAuthor,
}: Props) => {
  const renderMetricContent = () => {
    return (
      <>
        <Image
          alt={alt}
          src={imgUrl}
          width={16}
          height={16}
          className={`object-contain ${href ? "rounded-full" : ""}`}
        />
        <p className={`flex items-center gap-1 ${textStyles}`}>
          {value}{" "}
          <span
            className={`small-regular line-clamp-1 ${isAuthor ? "max-sm:hidden" : ""}`}
          >
            {title}
          </span>
        </p>
      </>
    );
  };

  if (href) {
    return (
      <Link href={href} className="flex-center gap-1">
        {renderMetricContent()}
      </Link>
    );
  }

  return (
    <div className="flex-center flex-wrap gap-1">{renderMetricContent()}</div>
  );
};

export default Metric;
