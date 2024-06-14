import { Inter } from "next/font/google";
import "./globals.css";
import Loading from "./loading"; // Corrected import
import { Suspense } from "react"; // Changed import

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Include meta tags, title, and fonts */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
        {/* Load Inter font */}
      </head>
      <body className={inter.className}>
        {/* Render children wrapped in Suspense for potential future loading */}
        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>
      </body>
    </html>
  );
}
