import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import WhatsAppButton from "@/components/custom/WhatsAppButton";
import ScrollTopToBottom from "@/components/custom/ScrollTopToBottom";
import CallButton from "@/components/custom/CallButton";
import { Toaster } from "react-hot-toast";
import KeepInTouch from "@/components/home/KeepInTouch";


export const metadata = {
  title: "AEROSPARES AEROSYSTEM",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <Header/>
        {children}
        <KeepInTouch/>
      <Footer/>
      {/* <WhatsAppButton/>
      <ScrollTopToBottom/>
      <CallButton/> */}
      <Toaster
        position="top-center"
        reverseOrder={false}
      />

      </body>
    </html>
  );
}
