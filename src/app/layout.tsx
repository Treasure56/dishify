import type { Metadata } from "next";
import "./globals.css";

const title = "Dishify";
const description = "Unlock unlimited premium recipes and transform your cooking experience with step-by-step guidance, personalized recommendations, and a vibrant cooking community.";




export const metadata: Metadata = {
  title,
  description,
  openGraph:{
    type: "website",
    url: "https://dishify.vercel.app/",
    title,
    description,
    images: [
      {
        url: "https://dishify-app.vercel.app/images/dishify-homepage.png",
        width: 800,
        height: 600,
      },
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-roboto antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
