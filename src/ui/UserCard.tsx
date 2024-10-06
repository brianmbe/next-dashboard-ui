import Image from "next/image";
import React from "react";

export default function UserCard({ type }: { type: string }) {
  return (
    <div className="flex-1 rounded-2xl odd:bg-toplinePurple even:bg-toplineYellow p-4 m-w-[100px]">
      <div className="flex justify-between items-center">
        <span>2024/25</span>
        <Image src={"/more.png"} alt="more" height={20} width={20} />
      </div>
      <h1>1,234</h1>
      <h2>{type}</h2>
    </div>
  );
}
