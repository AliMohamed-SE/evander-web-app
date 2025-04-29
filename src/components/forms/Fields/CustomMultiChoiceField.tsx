"use client";
import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import { CustomFormFieldProps } from "@/lib/schemas";
import { FieldValues } from "react-hook-form";
import { BadgeCheck } from "lucide-react";

const services = ["Software Solution", "Graphic Design", "Full Package"];

const CustomMultiChoiceField = <T extends FieldValues>({
  form,
  name,
  label,
  required,
}: CustomFormFieldProps<T>) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="font-semibold text-[16px]">
            {label}
            {required && <span className="text-red-500">*</span>}
          </FormLabel>
          <FormControl>
            <div className="flex items-center px-3 py-2 h-fit">
              <div className="grid grid-cols-3 md:gap-4 gap-2 w-full">
                {services.map((service) => (
                  <div
                    key={service}
                    className={`flex flex-col justify-center items-center gap-2 p-4 rounded-lg cursor-pointer ${
                      field.value === service ? "border-primary border" : ""
                    }`}
                    onClick={() => field.onChange(service)}
                  >
                    <BadgeCheck className="text-primary w-8 h-8" />
                    <span className="text-nowrap md:text-[16px] text-xs">
                      {service}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CustomMultiChoiceField;
