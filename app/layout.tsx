import type { Metadata } from "next";
import { Inter} from "next/font/google";
import "./globals.css";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap", // Prevents invisible text during load
});


export const metadata: Metadata = {
  title: "Customer Relationship Management (CRM) System",
  description:
    "A modern CRM system for managing customer complaints and interactions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}


// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";

// const inter = Inter({
//   variable: "--font-inter",
//   subsets: ["latin"],
//   display: "swap", // Prevents invisible text during load
// });

// export const metadata: Metadata = {
//   title: "Customer Relationship Management (CRM) System",
//   description: "A modern CRM system for managing customer complaints and interactions.",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" className={inter.variable}>
//       <body className="font-sans antialiased">
//         {children}
//       </body>
//     </html>
//   );
// }
