"use client";
import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import { Input } from "../../ui/input";
import { CustomFormFieldProps } from "@/lib/schemas";
import { FieldValues } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import countries from "@/data/countries";

const CustomFormField = <T extends FieldValues>({
  form,
  name,
  label,
  placeholder,
  icon,
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
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-1 h-fit">
              {icon}
              {name === "country" ? (
                <select
                  {...field}
                  className="py-1 px-3 text-[18px] focus-visible:ring-0 focus-visible:outline-none md:w-full"
                >
                  <option value="" disabled>
                    country
                  </option>
                  {countries.map((country, idx) => (
                    <option
                      key={idx}
                      value={country.phone}
                      className="bg-background w-full rounded-none"
                    >
                      {country.code} ({country.phone})
                    </option>
                  ))}
                </select>
              ) : name === "details" ? (
                <Textarea
                  placeholder={placeholder}
                  className="resize-none"
                  {...field}
                />
              ) : (
                <Input
                  placeholder={placeholder}
                  {...field}
                  className="border-none focus-visible:ring-0 focus-visible:outline-none w-full"
                />
              )}
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;
