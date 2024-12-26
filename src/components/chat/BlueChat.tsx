import React from "react";

import Header from "./Header";
import LeftArea from "./LeftArea";
import Middle from "./Middle";
import RighProfile from "./RighProfile";
//import { Badge } from "@/components/ui/badge";

const BlueChat = () => {
  return (
    <div className="h-screen flex flex-col bg-white">
  <Header />

  {/* Container with border around the sections */}
  <div className="border border-gray-300 rounded-lg px-2 pt-4 pb-2 mx-2 mb-2 flex-1">
    <div className="flex flex-1">
      {/* Left Section */}
      <div className="w-1/4 p-2">
        <LeftArea />
      </div>

      {/* Middle Section */}
      <div className="w-2/4 p-2">
        <Middle />
      </div>

      {/* Right Section */}
      <div className="w-1/4 p-2">
        <RighProfile />
      </div>
    </div>
  </div>
</div>

  );
};

export default BlueChat;
