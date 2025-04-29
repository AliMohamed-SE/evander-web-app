"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Value } from "@/data/values";
import { ArrowRight, ArrowUpRight, SquarePen } from "lucide-react";
import EvanderButton from "../shared/EvanderButton";
import Image from "next/image";

const ValueCard = ({
  index,
  item,
  className,
}: {
  index: number;
  item: Value;
  className?: string;
}) => {
  return (
    <Card className="w-full p-6 flex md:flex-col flex-row gap-[22px] md:gap-4 relative overflow-hidden rounded-xl border border-primary shadow-primary shadow-[0_0_5px_2px] bg-background">
      <CardHeader
        className={`flex justify-center items-center gap-4 p-0 min-w-fit text-primary border-gray-500 ${
          index % 2 === 0
            ? "border-r pr-[22px] order-1"
            : "border-l pl-[22px] order-2"
        } md:border-none md:p-0 md:order-1`}
      >
        <div className="relative w-[40px] h-[40px] xl:w-[48px] xl:h-[48px]">
          <Image src={item.icon} alt="Value Icon" fill />
        </div>
        <CardTitle className="font-semibold text-[16px] md:text-[20px] xl:text-[24px] text-white">
          {item.title}
        </CardTitle>
      </CardHeader>
      <CardContent
        className={`p-0 ${
          index % 2 === 0 ? "order-2" : "order-1"
        } md:order-2 space-y-4`}
      >
        <p className="text-white text-xs xl:text-[16px] leading-relaxed w-[90%] md:w-full md:text-center">
          {item.description}
        </p>
        <EvanderButton
          variant="ghost"
          label="Read More"
          iconAfter={
            <ArrowUpRight className="transition-transform duration-300 group-hover:rotate-45" />
          }
          className="text-primary hover:bg-transparent group ml-auto md:mx-auto text-xs xl:text-[16px] flex justify-center items-center"
          link="/about"
        />
      </CardContent>
    </Card>
  );
};

export default ValueCard;
