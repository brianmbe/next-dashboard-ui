import Menu from "@/components/menu/Menu";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <div className={"h-screen flex"}>
        {/* Left */}
        <div className={"w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%]"}>
          <Link
            href="/"
            className="flex justify-center items-center gap-2 lg:justify-start p-4"
          >
            <Image src="/logo.png" alt="Logo" width={32} height={32} />
            <span className="hidden lg:block font-bold uppercase">
              School Management
            </span>
          </Link>

          {/* Menu */}
          <Menu />
        </div>

        {/* Right */}
        <div
          className={
            "w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#d5ddee] overflow-scroll"
          }
        >
          <Navbar />
          {children}
        </div>
      </div>
    </html>
  );
}
