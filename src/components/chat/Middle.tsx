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
    Zap,
    Star,
    ShoppingCart,
  } from "lucide-react";
  import { RiInformation2Fill } from "react-icons/ri"

const Middle = () => {
  return (
    <div className="flex-1 flex flex-col">
          <div className="flex-1 p-4 overflow-y-auto">



          <div className="flex items-center justify-between p-1 bg-white shadow-sm">
      {/* Left side with profile */}
      <div className="flex items-center gap-3">
        <img 
          src="/man.jpeg" 
          alt="User" 
          className="w-7 h-7 rounded-full"
        />
        <div className="flex flex-col">
          <span className="text-sm font-medium">Yoge vege kara</span>
          <span className="text-xs text-gray-500">oguz@bluereceipt.com</span>
        </div>
      </div>

      {/* Right side with icons */}
      <div className="flex items-center gap-3">
        {/* Messenger with border */}
        <div className="flex items-center gap-1 border rounded-md px-2 py-1">
          <span className="text-xs">Messenger</span>
          <ChevronDown className="w-3 h-3 text-gray-500" />
        </div>

        {/* Other icons */}
        <div className="flex items-center gap-2">
          <Check className="w-3.5 h-3.5 text-gray-500" />
          <MoreVertical className="w-3.5 h-3.5 text-gray-500" />
          <img 
            src="/man.jpeg" 
            alt="User" 
            className="w-3.5 h-3.5 rounded-full"
          />
          <ChevronDown className="w-3 h-3 text-gray-500" />
          <RiInformation2Fill className="w-3.5 h-3.5 text-gray-500" />
        </div>
      </div>
    </div>
 

        

            <div className="max-w-2xl mx-auto space-y-4">

            <div className="flex items-start px-4 py-3 pt-2 border-t">
    <div className="flex-shrink-0">
      <img
        src="/man.jpeg"
        alt="User"
        className="w-7 h-7 rounded-full"
      />
    </div>
    <div className="flex flex-col gap-1 ml-3">
      <div className="flex flex-col">
        <span className="text-sm font-medium">Yoge vege kara</span>
        <span className="text-xs text-gray-500">oguz@bluereceipt.com</span>
      </div>
      <span className="text-xs mt-2 pt-0">
        This is the very beginning of your direct message history with{' '}
        <p className="inline-block text-blue-500 bg-blue-100 px-1 py-0.5 rounded">
          @Yoge vege kara
        </p>
      </span>
    </div>
  </div>





  <div className="w-full max-w-2xl mx-auto p-4 space-y-4 bg-gray-50">
      {/* First message with avatar */}
      <div className="flex items-start gap-2">
        <div className="w-8 h-8 rounded-full bg-gray-300 flex-shrink-0" />
        <div className="bg-white rounded-lg p-3 shadow-sm max-w-md">
          <p className="text-sm text-gray-700">
            I keep getting "error while creating a new pop up" for the first time setup, so I'm not able to create a pop up. My shop name is PinkSweetHeart
          </p>
        </div>
      </div>

      {/* Smart Response section */}
      <div className="flex items-center gap-2 text-sm ml-10">
        <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
          <span className="text-white text-xs">⚡</span>
        </div>
        <span className="text-gray-700">Smart Response Detected!</span>
        <div className="flex gap-2 ml-4">
          <button className="text-gray-600 px-3 py-1">Cancel</button>
          <button className="bg-blue-600 text-white px-4 py-1 rounded">Select</button>
        </div>
      </div>

      {/* Time stamp */}
      <div className="text-xs text-gray-500 ml-10">12:52 PM</div>

      {/* Blue message with star */}
      <div className="flex justify-end relative">
        <div className="bg-blue-600 text-white p-3 rounded-lg max-w-md pr-8">
          <p className="text-sm">
            Hey, #firstname! I saw you were curious about our products. My name is X from StoreName, feel free to save my number and send me a text if you have any questions or concerns. If you're ready to
          </p>
          <Star className="absolute -right-6 top-2 h-5 w-5 text-gray-400" />
          <div className="text-xs text-gray-200 text-right mt-1">12:53 PM</div>
        </div>
      </div>

      {/* Purchase notification */}
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 flex-shrink-0">
          🛒
        </div>
        <div className="flex items-center text-sm gap-2">
          <span className="text-blue-600">@Ekrem Kenter</span>
          <span>Product purchased!</span>
          <span className="font-bold">$99</span>
          <span>SNOW® TEETH WHITENING KIT</span>
          <span className="text-gray-500 text-xs">2m ago</span>
        </div>
      </div>
    </div>



            </div>
          </div>




          {/* Message Input */}
          <div className="border-t p-4">
            <div className="max-w-2xl mx-auto flex items-center gap-2">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Image className="w-5 h-5 text-gray-500" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Paperclip className="w-5 h-5 text-gray-500" />
              </button>
              <input
                type="text"
                placeholder="Message Oguz Yağız"
                className="flex-1 border rounded-lg px-4 py-2 text-sm"
              />
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Send className="w-5 h-5 text-gray-500" />
              </button>
              <ChevronDown className="w-3 h-3 text-gray-500" />
            </div>
          </div>
        </div>
  )
}

export default Middle