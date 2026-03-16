import Image from "next/image";
import { lazy } from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-screen grid-cols-1 md:grid-cols-2 w-screen">
      {/* Left Panel */}
      <div className="hidden md:flex flex-col justify-between itece bg-primary text-white px-16 pt-8 gap-8 relative overflow-y-hidden">
      <img src="/assets/svg/bigDots.svg" className="absolute bottom-0 left-0" alt="" />
      <img src="/assets/svg/dots.svg" className="absolute top-0 right-0" alt="" />
        <div className="w-full">
          <h1 className="text-[1.5rem] font-semibold">
            Streamline Your Logistics Complaint Management.
          </h1>
          <p className="mt-4 text-[.9rem] opacity-80">
            Your trusted place to report delivery issues, track progress, and
            get real updates all in one place.
          </p>
        </div>

        <div className="flex flex-row justify-start items-center w-full h-full">
          <div className="h-full flex flex-col justify-center items-center border border-[#f7f7f7] border-b-0 rounded-t-[5%] lg:w-[60%] xl:w-[60%] relative">
            <Image
              src="/assets/png/customerImg.png"
              alt="happy customer"
              quality={100}
              height={800}
              width={800}
              className="absolute -right-[10%] top-[10%] w-[90%] lg:w-[95%] h-[97%] rounded-lg"
              preload
            />

            <img src="/assets/svg/secured.svg" className="absolute z-25 top-[1/4] -right-[35%] w-[60%] " alt="" />
            <img src="/assets/svg/response.svg" className="absolute z-25 top-[1/4] left-[35%] w-[60%] " alt="" />
            <img src="/assets/svg/circle.svg" className="absolute z-25 top-[20%] left-[10%] " alt="" />
          </div>
        </div>
      </div>

      {/* Right Panel (Auth Forms) */}
      <div className="w-full h-full flex flex-col items-stretch justify-stretch p-8 light-bg col-span-1">
        <div className="w-full h-full flex flex-col justify-stretch items-stretch px-8 py-6">{children}</div>
      </div>
    </div>
  );
}
