"use client";

import { Input } from "@/components/ui/input";
import Image from "next/image";

interface Props {
  route: string;
  iconPosition: "left" | "right";
  imgSrc: string;
  placeholder: string;
  additionalClasses?: string;
}

const LocalSearchBar = ({
  iconPosition,
  imgSrc,
  placeholder,
  route,
  additionalClasses,
}: Props) => {
  return (
    <div
      className={`background-light800_darkgradient relative flex min-h-14 grow items-center gap-4 rounded-lg px-4 ${additionalClasses}`}
    >
      {iconPosition === "left" && (
        <Image
          alt="search"
          width={24}
          height={24}
          className="cursor-pointer"
          src={imgSrc}
        />
      )}

      <Input
        type="text"
        value=""
        placeholder={placeholder}
        className="paragraph-regular no-focus placeholder background-light800_darkgradient border-none shadow-none outline-none"
        onChange={() => {}}
      />

      {iconPosition === "right" && (
        <Image
          alt="search"
          width={24}
          height={24}
          className="cursor-pointer"
          src={imgSrc}
        />
      )}
    </div>
  );
};

export default LocalSearchBar;
