// export default function AuthLayout({

    

//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   console.log("AUTH LAYOUT LOADED")
//   return (
//     <div className="auth-layout bg-[black] border-2 border-blue-700 h-screen w-screen items-center justify-center">
//     <div className="flex flex-col w-[50%] bg-[--primaryColor] h-full border-green-600"></div>
//     <div className="flex flex-col w-[50%] bg-[--primaryColor] h-full border-green-600">
//       {children}
//     </div>
      
//     </div>
//   );
// }


export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="grid min-h-screen grid-cols-1 md:grid-cols-2">

      {/* Left Panel */}
      <div className="hidden md:flex flex-col justify-between bg-[#026451] text-white p-12">

        <div>
          <h1 className="text-4xl font-bold">Welcome to CMS — Where Logistics Complaints Are Managed with Efficiency </h1>
          <p className="mt-4 text-lg opacity-80">
            Your trusted place to report delivery issues, track progress, and get real updates all in one place.
          </p>
        </div>

        <div className="space-y-4 text-sm opacity-80">
          <p>⚡ Fast authentication</p>
          <p>🔐 Secure by default</p>
          <p>🚀 Built for modern apps</p>
        </div>

        <div className="text-xs opacity-50">
          © {new Date().toLocaleTimeString()} YourApp
        </div>

      </div>

      {/* Right Panel (Auth Forms) */}
      <div className="flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-md">
          {children}
        </div>
      </div>

    </div>
  )
}