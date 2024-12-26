import React from "react";
import { Phone, Video, MoreHorizontal, ChevronDown, X } from "lucide-react";
import { IoIosSearch, IoMdEye } from "react-icons/io";
import { RiGlobalFill, RiMoneyDollarCircleFill } from "react-icons/ri";
import { IoPersonSharp } from "react-icons/io5";
import { FaBoxArchive } from "react-icons/fa6";
import { HiClock } from "react-icons/hi";
import { TiShoppingCart } from "react-icons/ti";
import { MdAlternateEmail, MdLocalPhone } from "react-icons/md";
import { AiFillClockCircle } from "react-icons/ai";

const RighProfile = () => {
  return (
    <div className="w-80 border-l">
      <div className="p-4">
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-gray-200 mb-2" />
          <h3 className="font-medium">Oguz Yağız Kara</h3>
          <p className="text-sm text-gray-500">11:59pm in Ankara, Turkey</p>

          <div className="flex gap-8 my-4">
            <button className="flex flex-col items-center gap-1 text-sm">
              <Phone className="w-5 h-5" />
              <span>Call</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-sm">
              <Video className="w-5 h-5" />
              <span>Video</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-sm">
              <MoreHorizontal className="w-5 h-5" />
              <span>More</span>
            </button>
          </div>

          {/* Stats and Info */}
          <div className="w-full space-y-6">
            <div className="flex gap-4">
              {/* First Box */}
              <div className="flex flex-col items-center w-40 h-27 border rounded-md p-4">
                <div className="flex items-center justify-between w-full mb-4">
                  <span className="flex items-center gap-1 text-sm text-gray-600">
                    <IoMdEye /> Revenue
                  </span>
                </div>
                <span className="text-2xl font-semibold text-center">
                  $3,452
                </span>
                <span className="text-sm text-gray-500 text-center">
                  3 Orders
                </span>
              </div>

              {/* Second Box */}
              <div className="flex flex-col items-center w-40 h-27 border rounded-md p-4">
                <div className="flex items-center justify-between w-full mb-4">
                  <span className="flex items-center gap-1 text-sm text-gray-600">
                    <RiMoneyDollarCircleFill /> Web Visits
                  </span>
                </div>
                <span className="text-2xl font-semibold text-center">42</span>
                <span className="text-sm text-gray-500 text-center">
                  4 Link Clicks
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between  h-10 w-full border rounded-md p-1 mt-[-1S8px]">
              <IoPersonSharp className="text-lg bg-white" />
              <FaBoxArchive className="text-lg" />
              <HiClock className="text-lg" />
            </div>

            <div className="relative mt-2">
              <IoIosSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search in general.."
                className="w-full text-sm border rounded-md p-2 pl-9 focus:outline-none"
              />
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between items-center mb-3">
                <span className="font-medium">Information</span>
                <button className="text-blue-600 text-sm">Add</button>
              </div>
              <div className="space-y-2 text-sm">
                {/* Grid layout for table-like alignment */}
                <div className="grid grid-cols-2 gap-x-4 items-center">
                  <div className="flex items-center gap-2 text-gray-600">
                    <RiGlobalFill />
                    <span>Segments</span>
                  </div>
                  <span className="justify-self-end">Abandoned Cart</span>
                </div>
                <div className="grid grid-cols-2 gap-x-4 items-center">
                  <div className="flex items-center gap-2 text-gray-600">
                    <MdAlternateEmail />
                    <span>Email</span>
                  </div>
                  <span className="justify-self-end">
                    oguzyagizkara@gmail.com
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-x-4 items-center">
                  <div className="flex items-center gap-2 text-gray-600">
                    <MdLocalPhone />
                    <span>Phone</span>
                  </div>
                  <span className="justify-self-end">+90 535 444 81 77</span>
                </div>
                <div className="grid grid-cols-2 gap-x-4 items-center">
                  <div className="flex items-center gap-2 text-gray-600">
                    <AiFillClockCircle />
                    <span>Last Visited</span>
                  </div>
                  <span className="justify-self-end">8 Aug, 2021</span>
                </div>
              </div>
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-1 font-medium">
                  <ChevronDown className="w-3 h-3" />
                  <span>Tags</span>
                </div>
                <button className="text-blue-600 text-sm hover:text-blue-700">
                  + Add
                </button>
              </div>

              <div className="flex flex-wrap gap-2">
                <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-gray-100 text-gray-700 text-sm">
                  <span>Abandoned Cart User</span>
                  <button className="hover:text-gray-900">
                    <X className="w-3 h-3" />
                  </button>
                </div>

                <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-gray-100 text-gray-700 text-sm">
                  <span>Popup</span>
                  <button className="hover:text-gray-900">
                    <X className="w-3 h-3" />
                  </button>
                </div>

                <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-gray-100 text-gray-700 text-sm">
                  <span>Shop Error</span>
                  <button className="hover:text-gray-900">
                    <X className="w-3 h-3" />
                  </button>
                </div>

                <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-gray-100 text-gray-700 text-sm">
                  <span>Successful</span>
                  <button className="hover:text-gray-900">
                    <X className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RighProfile;
