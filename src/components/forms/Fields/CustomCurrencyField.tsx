"use client";
import React, { useState, useEffect } from "react";
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

const currencies = [
  { code: "USD", symbol: "$" },
  { code: "EUR", symbol: "€" },
  { code: "GBP", symbol: "£" },
  { code: "JPY", symbol: "¥" },
  { code: "CAD", symbol: "CA$" },
];

const CustomCurrencyField = <T extends FieldValues>({
  form,
  name,
  label,
  placeholder,
  icon,
  required,
}: CustomFormFieldProps<T>) => {
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);
  const [formattedValue, setFormattedValue] = useState("");

  // Format number with commas
  const formatNumber = (value: string) => {
    if (!value) return "";

    // Remove non-digit characters except decimal point
    const cleanValue = value.replace(/[^\d.]/g, "");

    // Handle decimal numbers
    if (cleanValue.includes(".")) {
      const parts = cleanValue.split(".");
      return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "." + parts[1];
    }

    return cleanValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // Update the formatted value when the field value changes
  useEffect(() => {
    if (form.getValues(name)) {
      setFormattedValue(formatNumber(form.getValues(name).toString()));
    }
  }, [form, name]);

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
              <div className="flex items-center w-full">
                <div className="flex-grow relative">
                  <div className="absolute left-0 top-1/2 transform -translate-y-[11px]">
                    {selectedCurrency.symbol}
                  </div>
                  <Input
                    placeholder={placeholder}
                    value={formattedValue}
                    onChange={(e) => {
                      const value = e.target.value;
                      const rawValue = value.replace(/[^\d.]/g, "");
                      field.onChange(`${selectedCurrency.symbol}${rawValue}`);
                      setFormattedValue(formatNumber(value));
                    }}
                    className="border-none focus-visible:ring-0 focus-visible:outline-none w-full pl-10"
                  />
                </div>
              </div>
              <select
                value={selectedCurrency.code}
                onChange={(e) => {
                  const selected = currencies.find(
                    (c) => c.code === e.target.value
                  );
                  if (selected) setSelectedCurrency(selected);
                }}
                className="py-1 px-3 text-[18px] focus-visible:ring-0 focus-visible:outline-none"
              >
                {currencies.map((currency) => (
                  <option
                    key={currency.code}
                    value={currency.code}
                    className="bg-background w-full rounded-none"
                  >
                    {currency.code}
                  </option>
                ))}
              </select>
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CustomCurrencyField;
