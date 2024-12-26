import React from 'react'
import {
    MessageCircle,
    Phone,
    Video,
    MoreHorizontal,
    Search,
    ChevronLeft,
    Plus,
    Check,
    MoreVertical,
    Send,
    Image,
    Paperclip,
    ChevronDown,
    X,
    AppWindow,
    RotateCw,
    MoveRight,
    MoveLeft,
    LockKeyhole,
    Link,
    ArrowDownToLine,
    Badge,
    Users,
    Filter,
  } from "lucide-react";

const LeftArea = () => {
  return (
    <div className="w-72 border-r flex flex-col">



      <div className="flex items-center justify-between p-4">
  {/* Left Side: Back Arrow and BlueChat */}
  <div className="flex items-start gap-2">
    {/* Left Arrow */}
    <MoveLeft className="w-3 h-4 translate-y-2" />

    {/* BlueChat Section */}
    <div>
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
          B
        </div>
        <span className="font-medium">BlueChat</span>
      </div>
      {/* Inbox Text */}
      <span className="text-gray-500 text-sm pl-10 -mt-1 block">Inbox</span>
    </div>
  </div>

  {/* Right Side: Search and Plus Icons */}
  <div className="flex items-center gap-3">
    <Search className="w-5 h-5 text-gray-500" />
    <div className="border border-gray-500 w-8 h-8 flex items-center justify-center rounded-sm">
  <Plus className="w-5 h-5 text-gray-500" />
</div>
  </div>
</div>




<div className="flex border-b border-gray-300">
  <button className="px-4 py-2 font-medium bg-white text-black w-full border border-gray-300">
    Messages
  </button>
  <button className="px-4 py-2 text-gray-500 bg-gray-100 w-full">
    Segments
  </button>
</div>


          <div className="p-3">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Users className="w-3 h-3" />
                <span className="font-medium text-sm">All</span>
                <p className="text-sm text-green-600 bg-green-50 p-1 rounded">
                   232</p>
                      

                <ChevronDown className="w-3 h-3" />
              </div>
              <div className="flex items-center gap-2">
                <Filter className="w-3 h-3" />
                <span className="text-sm text-gray-500">Oldest</span>
                <ChevronDown className="w-3 h-3" />
              </div>
            </div>

            {/* Chat List */}
            <div className="space-y-2">
  {/* Dummy Data 1 */}
  <div className="p-2 hover:bg-gray-100 rounded-lg bg-blue-50">
    <div className="flex gap-3">
      <div className="w-6 h-6 rounded-full bg-gray-200 flex-shrink-0 self-start" />
      <div className="flex-1">
        <div className="flex justify-between items-baseline">
          <span className="font-medium">John Doe</span>
          <span className="text-xs text-gray-500">10m</span>
        </div>
        <p className="text-sm text-gray-600 mt-1">
          Just wondering if the system update will affect older versions...
        </p>
      </div>
    </div>
  </div>

  {/* Dummy Data 2 */}
  <div className="p-2 hover:bg-gray-100 rounded-lg bg-blue-50">
    <div className="flex gap-3">
      <div className="w-6 h-6 rounded-full bg-gray-200 flex-shrink-0 self-start" />
      <div className="flex-1">
        <div className="flex justify-between items-baseline">
          <span className="font-medium">Jane Smith</span>
          <span className="text-xs text-gray-500">1h</span>
        </div>
        <p className="text-sm text-gray-600 mt-1">
          Can someone explain how to reset the configuration settings?
        </p>
      </div>
    </div>
  </div>

  {/* Dummy Data 3 */}
  <div className="p-2 hover:bg-gray-100 rounded-lg bg-blue-50">
    <div className="flex gap-3">
      <div className="w-6 h-6 rounded-full bg-gray-200 flex-shrink-0 self-start" />
      <div className="flex-1">
        <div className="flex justify-between items-baseline">
          <span className="font-medium">Alex Turner</span>
          <span className="text-xs text-gray-500">15m</span>
        </div>
        <p className="text-sm text-gray-600 mt-1">
          Are there any updates on the project timeline for next week?
        </p>
      </div>
    </div>
  </div>

  {/* Dummy Data 4 */}
  <div className="p-2 hover:bg-gray-100 rounded-lg bg-blue-50">
    <div className="flex gap-3">
      <div className="w-6 h-6 rounded-full bg-gray-200 flex-shrink-0 self-start" />
      <div className="flex-1">
        <div className="flex justify-between items-baseline">
          <span className="font-medium">Chris Martin</span>
          <span className="text-xs text-gray-500">30m</span>
        </div>
        <p className="text-sm text-gray-600 mt-1">
          I’m experiencing issues with the dashboard loading slowly.
        </p>
      </div>
    </div>
  </div>
</div>



















            {/* <div className="space-y-1">

  {Array(4)
    .fill(0)
    .map((_, index) => (
      <div key={index} className="p-2 hover:bg-gray-100 rounded-lg bg-blue-50">
        <div className="flex gap-3 items-center">
          <div className="w-4 h-8 rounded-full bg-gray-200 flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-center">
              <span className="font-medium">Oguz Yağız Kara</span>
              <span className="text-[10px] text-gray-500">+ 5m</span>
            </div>
            <p className="text-sm text-gray-600 mt-1">
              I keep getting "error while creating a new pop up" for the first
              time setup...
            </p>
          </div>
        </div>
      </div>
    ))}
</div> */}







          </div>
        </div>

  )
}

export default LeftArea