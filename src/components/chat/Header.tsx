import {
  AppWindow,
  RotateCw,
  MoveRight,
  MoveLeft,
  LockKeyhole,
  Link,
  ArrowDownToLine,
  Plus,
} from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <div className="h-12 bg-gray-100 flex items-center px-4">
      {/* Left Section */}
      <div className="flex items-center gap-4 ml-0">
        <div className="w-3 h-3 rounded-full bg-gray-500" />
        <div className="w-3 h-3 rounded-full bg-gray-500" />
        <div className="w-3 h-3 rounded-full bg-gray-500" />
        <AppWindow className="w-4 h-4" />
        <MoveLeft className="w-4 h-4" />
        <MoveRight className="w-4 h-4" />
        <RotateCw className="w-4 h-4" />
      </div>

      {/* Center Section */}
      <div className="flex items-center gap-2 mx-auto">
        <LockKeyhole className="w-3 h-3" />
        <input
          type="text"
          value="bluereceipt.com"
          className="w-32 bg-transparent text-sm px-2 flex-1"
          readOnly
        />
        <Link className="w-3 h-3" />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4 mr-0">
        <ArrowDownToLine className="w-3 h-3" />
        <Plus className="w-3 h-3" />
      </div>
    </div>
  );
};

export default Header;
