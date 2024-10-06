import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between p-4 border-b-2 bg-gray-600">
      {/* Searchbar */}
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-white px-2">
        <FaSearch size={15} color="white" />
        <input
          type="text"
          placeholder="Search......................"
          className="bg-transparent text-white w-[200px] p-2 outline-none"
        />
      </div>

      {/* Action-Icons */}
      <div className="flex w-full justify-end items-center gap-4">
        <div className="bg-white rounded-full w-10 h-10  md:w-10 md:h-10 xl:w-10 xl:h-10 flex items-center justify-center cursor-pointer border-purple-500 border-2">
          <FaMessage size={20} className="text-gray-500" />
        </div>
        <div className="relative bg-white border-purple-500 border-2 rounded-full w-10 h-10  md:w-10 md:h-10 xl:w-10 xl:h-10 flex items-center justify-center cursor-pointer">
          <Image
            src="/announcement.png"
            alt="announcement"
            width={20}
            height={20}
          />
          <div className="absolute -top-2 -right-1 bg-purple-500 text-white text-xs w-5 h-5 flex justify-center items-center rounded-full">
            3
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-sm leading-3 font-medium uppercase text-purple-400">
            Nyingambe
          </span>
          <span className="text-[10px] text-gray-200 text-right">Admin</span>
        </div>
        <Image
          src="/avatar.png"
          alt="avatar"
          width={36}
          height={36}
          className="rounded-full"
        />
      </div>
    </div>
  );
}
