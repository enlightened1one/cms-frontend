import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-screen grid-cols-1 md:grid-cols-2 w-screen">
      {/* Left Panel */}
      <div className="hidden md:flex flex-col justify-between bg-[#026451] text-white px-12 py-8 gap-8">
        <div className="w-full">
          <h1 className="text-[1.5rem] font-semibold">
            Welcome to CMS — Where Logistics Complaints Are Managed with
            Efficiency
          </h1>
          <p className="mt-4 text-[.9rem] opacity-80">
            Your trusted place to report delivery issues, track progress, and
            get real updates all in one place.
          </p>
        </div>

        <div className="flex flex-row justify-start items-center w-full h-full">
          <div className="h-full flex flex-col justify-center items-center border border-[#f7f7f7] rounded-lg w-[40%] relative">
            <Image
              src="/assets/png/customer.png"
              alt="happy customer"
              height={200}
              width={200}
              className="absolute -right-[10%] "
            />
          </div>
        </div>
      </div>

      {/* Right Panel (Auth Forms) */}
      <div className="flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-md">{children}</div>
      </div>
    </div>
  );
}
