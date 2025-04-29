"use client";
import React from "react";
import { Button } from "../ui/button";
import { ButtonProps } from "@/lib/schemas";
import clsx from "clsx";
import Link from "next/link";

const EvanderButton = ({
  variant,
  label,
  iconBefore,
  iconAfter,
  onClick,
  disabled,
  className,
  link,
  size = "custom",
  type = "button",
  target = "_self",
}: ButtonProps) => {
  const sizeStyles = {
    sm: "py-2 px-3 md:py-3 md:px-4",
    md: "py-3 px-4 md:py-4 md:px-5",
    lg: "py-4 px-5",
    custom: "",
  };

  const sharedProps = {
    className: clsx(
      "flex gap-2 hover:bg-primary-hover hover:text-primary-foreground transition-all duration-700 linear h-fit w-fit",
      sizeStyles[size],
      className
    ),
    children: (
      <>
        {iconBefore && iconBefore}
        {label}
        {iconAfter && iconAfter}
      </>
    ),
  };

  return link ? (
    <Link href={link} {...sharedProps} target={target} />
  ) : (
    <Button
      type={type}
      variant={variant}
      onClick={onClick}
      disabled={disabled}
      {...sharedProps}
    />
  );
};

export default EvanderButton;
