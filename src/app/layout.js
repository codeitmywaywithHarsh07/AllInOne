import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "All In One",
  description: "Your unified search aggregator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-gray-100">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans text-gray-900 antialiased`}
      >
        {/* Navbar
        <header className="w-full bg-white shadow-md">
          <div className="container mx-auto px-3 py-3 flex justify-between items-center">
            <div className="w-28 h-16 flex justify-center items-center">
              <img src="/media/logo/logo-new.png" alt="Logo" />
            </div>
            <nav className="space-x-4">
              <a
                href="#"
                className="text-gray-600 hover:text-blue-500 transition"
              >
                Home
              </a>
              <a
                href="#features"
                className="text-gray-600 hover:text-blue-500 transition"
              >
                Features
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-blue-500 transition"
              >
                Contact
              </a>
            </nav>
          </div>
        </header> */}

        {/* Main Content */}
        <main className=" w-full">{children}</main>

        {/* Footer */}
        <footer className="w-full bg-gray-200 py-4">
          <div className="container mx-auto text-center">
            <p className="text-sm text-gray-600">
              © 2024 OneApp. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
