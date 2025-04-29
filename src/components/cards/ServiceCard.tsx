import React from "react";

const ServiceCard = ({
  title,
  position,
}: {
  title: string;
  position?: string;
}) => {
  return (
    <div
      className={`border border-primary rounded-full px-4 xl:px-11 text-xs md:text-lg xl:text-2xl flex justify-center items-center text-center h-[50px] md:h-[60px] xl:h-[100px] w-[100px] md:w-[160px] xl:w-[250px] ${position}`}
    >
      {title}
    </div>
  );
};

export default ServiceCard;
