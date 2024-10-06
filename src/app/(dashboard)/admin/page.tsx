import UserCard from "@/ui/UserCard";

export default function AdminPage() {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* Left */}
      <div className="w-full lg:w-2/3">
        {/* User cards */}
        <div className="flex flex-wrap gap-4 justify-between ">
          <UserCard type="Students" />
          <UserCard type="Teachers" />
          <UserCard type="Parents" />
          <UserCard type="Satff" />
        </div>
      </div>

      {/* Right */}
      <div className="w-full lg:w-1/3">Right</div>
    </div>
  );
}
