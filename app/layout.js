import { Inter } from "next/font/google";
import "./styles/globals.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fresh Future Foundation",
  description: "Fresh Future Foundation is dedicated to helping underprivigled people all over the world and providing them with clean, drinkable water.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
