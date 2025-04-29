import { ReactNode } from "react";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";

export interface ButtonProps {
  label?: string;
  iconBefore?: ReactNode;
  iconAfter?: ReactNode;
  onClick?: () => void;
  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "ghost"
    | "destructive"
    | "link"
    | "borderMagic";
  disabled?: boolean;
  className?: string;
  link?: string;
  size?: "sm" | "md" | "lg" | "custom";
  type?: "button" | "submit" | "reset";
  target?: string;
}

export interface NavLinkProps {
  link: string;
  name: string;
}

export interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  index: number;
  currentHover?: number;
  setHovered: (index: number) => void;
}

export interface CustomFormFieldProps<T extends FieldValues> {
  form: UseFormReturn<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
  icon?: React.ReactNode;
  required?: boolean;
  selectedCurrency?: { code: string; symbol: string };
  setSelectedCurrency?: (currency: { code: string; symbol: string }) => void;
}
