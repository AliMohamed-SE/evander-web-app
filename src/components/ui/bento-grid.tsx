import { cn } from "@/lib/utils";
import Image from "next/image";
import EvanderButton from "../shared/EvanderButton";
import { ArrowRight } from "lucide-react";
import { WorldMap } from "./world-map";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  index,
}: {
  className?: string;
  index: number;
}) => {
  return (
    <>
      {index === 0 && (
        <div
          className={cn(
            "bg-[url('/images/services/card1-bg.png')] bg-cover bg-center bg-no-repeat pt-[31px] pb-[12px] md:pl-[34px] md:pr-[82px] px-4 space-y-3",
            className
          )}
        >
          <h4 className="text-2xl font-semibold">
            Innovative Digital Solutions
          </h4>
          <ul className="list-disc md:ml-[115px] ml-4">
            <li>Web & Mobile App Development</li>
            <li>AI Integration & API Solutions</li>
            <li>E-commerce & SEO Optimization</li>
          </ul>

          <EvanderButton
            variant="secondary"
            label="View Our Work"
            iconAfter={<ArrowRight size={20} />}
            className="bg-transparent rounded-full text-white border border-white text-xs py-2 px-3 flex justify-center items-center float-right"
            link="/portfolio"
          />
        </div>
      )}
      {index === 1 && (
        <div
          className={cn(
            "bg-[url('/images/services/card2-bg.png')] bg-cover bg-center bg-no-repeat pt-[31px] pb-[12px] pl-[34px] pr-[82px] hidden lg:block",
            className
          )}
        />
      )}
      {index === 2 && (
        <div
          className={cn(
            "bg-gradient-to-b from-primary/25 to-background",
            className
          )}
        >
          <div className="rounded-xl w-full h-full overflow-hidden z-1 xl:px-[40px] px-[20px] pt-[61px] pb-[95px] bg-[url('/images/services/card3-bg.png')] bg-cover bg-center bg-no-repeat">
            <div className="flex flex-col gap-4">
              <div className="border border-primary bg-transparent py-5 px-4 rounded-full font-semibold text-2xl text-center">
                Branding & Visual Identity
              </div>
              <div className="mx-auto">
                <div className="flex gap-2 items-center">
                  <Image
                    src="/icons/logo-design.svg"
                    alt="Logo Design"
                    width={48}
                    height={48}
                  />
                  <span>Logo Design</span>
                </div>
                <div className="flex gap-2 items-center">
                  <Image
                    src="/icons/brand-identity.svg"
                    alt="Brand Identity"
                    width={48}
                    height={48}
                  />
                  <span>Brand Identity</span>
                </div>
                <div className="flex gap-2 items-center">
                  <Image
                    src="/icons/ui-ux-design.svg"
                    alt="UI/UX Design"
                    width={48}
                    height={48}
                  />
                  <span>UI/UX Design</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {index === 3 && (
        <div
          className={cn(
            "bg-[url('/images/services/card4-bg.png')] bg-cover bg-center bg-no-repeat py-[154px] px-[35px] text-xl font-semibold text-center",
            className
          )}
        >
          We’ve helped businesses turn concepts into thriving digital
          experiences
        </div>
      )}
      {index === 4 && (
        <div className={cn("relative grid grid-cols-2 gap-8", className)}>
          <div className="rounded-xl border border-primary shadow-primary shadow-[0_0_5px_2px] py-5 md:px-[75px] flex gap-2 justify-center items-center">
            <Image src="/icons/dream.svg" alt="Dream" width={30} height={32} />
            <p className="font-semibold md:text-[32px] text-2xl">
              <span className="text-primary">D</span>ream
            </p>
          </div>
          <div className="rounded-xl border border-primary shadow-primary shadow-[0_0_5px_2px] py-5 md:px-[75px]  flex gap-2 justify-center items-center">
            <Image src="/icons/design.svg" alt="Dream" width={30} height={32} />
            <p className="font-semibold md:text-[32px] text-2xl">
              <span className="text-primary">D</span>esign
            </p>
          </div>
          <div className="rounded-xl border border-primary shadow-primary shadow-[0_0_5px_2px] py-5 md:px-[75px] flex gap-2 justify-center items-center">
            <Image
              src="/icons/develop.svg"
              alt="Dream"
              width={30}
              height={32}
            />
            <p className="font-semibold md:text-[32px] text-2xl">
              <span className="text-primary">D</span>evelop
            </p>
          </div>
          <div className="rounded-xl border border-primary shadow-primary shadow-[0_0_5px_2px] py-5 md:px-[75px]  flex gap-2 justify-center items-center">
            <Image
              src="/icons/deliver.svg"
              alt="Dream"
              width={30}
              height={32}
            />
            <p className="font-semibold md:text-[32px] text-2xl">
              <span className="text-primary">D</span>eliver
            </p>
          </div>
          <div
            className="absolute inset-1/2 w-[110px] h-[110px] bg-[url('/images/services/bento-center-bg.png')] bg-cover bg-center bg-no-repeat rounded-full 
                -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      )}
      {index === 5 && (
        <div
          className={cn(
            "bg-[url('/images/services/card6-bg.png')] bg-contain bg-center bg-no-repeat lg:block hidden",
            className
          )}
        />
      )}
      {index === 6 && (
        <div
          className={cn(
            "bg-[url('/images/services/card7-bg.png')] bg-cover bg-center bg-no-repeat py-[20px] pl-[17px] md:pr-0 pr-[17px]",
            className
          )}
        >
          <div className="md:w-2/3">
            <h4 className="text-xl font-semibold">
              Let’s Build Something Extraordinary!
            </h4>

            <p className="text-sm mb-5 md:w-2/3">
              Your brand deserves to stand out. Let’s design, develop, and bring
              your vision to life.
            </p>

            <EvanderButton
              label="Contact Us"
              iconAfter={<ArrowRight size={16} />}
              className="bg-gradient-to-r from-[#131531] to-primary rounded-full text-white border border-primary py-2 px-3 flex justify-center items-center font-semibold md:mx-auto ml-auto"
              link="/contact"
            />
          </div>
        </div>
      )}
    </>
  );
};
