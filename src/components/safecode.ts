// import React from 'react';
// import { MessageCircle, Phone, Video, MoreHorizontal, Search, ChevronLeft, Plus, Check, MoreVertical, Send, Image, Paperclip, ChevronDown, X} from 'lucide-react';
// import { Badge } from '../ui/badge';
// //import { Badge } from "@/components/ui/badge";

// const BlueChat = () => {
//   return (
//     <div className="h-screen flex flex-col bg-white">
//       {/* Browser Navigation */}
//       <div className="h-12 bg-gray-100 flex items-center px-4 gap-2">
//         <div className="w-3 h-3 rounded-full bg-red-500" />
//         <div className="w-3 h-3 rounded-full bg-yellow-500" />
//         <div className="w-3 h-3 rounded-full bg-green-500" />
//         <div className="flex items-center gap-2 ml-4">
//           <ChevronLeft className="w-4 h-4" />
//           <div className="flex items-center gap-2">
//             <div className="w-4 h-4 bg-gray-300 rounded" />
//             <div className="w-4 h-4 bg-gray-300 rounded" />
//           </div>
//         </div>
//         <input 
//           type="text" 
//           value="bluereceipt.com" 
//           className="w-32 bg-transparent text-sm px-2 flex-1"
//           readOnly
//         />
//       </div>

//       {/* App Header */}
//       <div className="border-b">
//         {/* Top Header */}
//         <div className="flex items-center justify-between p-4">
//           <div className="flex items-center gap-4">
//             <div className="flex items-center gap-2">
//               <ChevronLeft className="w-5 h-5" />
//               <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">B</div>
//               <span className="font-medium">BlueChat</span>
//               <Search className="w-5 h-5 text-gray-500" />
//               <Plus className="w-5 h-5 text-gray-500" />
//             </div>
//           </div>
          
//           <div className="flex items-center gap-4">
//             <img src="/api/placeholder/32/32" alt="User" className="w-8 h-8 rounded-full" />
//             <span className="text-sm text-gray-600">oguz@bluereceipt.com</span>
//             <Badge className="bg-blue-100 text-blue-600 hover:bg-blue-100">Messenger</Badge>
//             <Check className="w-4 h-4 text-gray-500" />
//             <MoreVertical className="w-4 h-4 text-gray-500" />
//           </div>
//         </div>

//         {/* Second Header - Chat Profile */}
//         <div className="flex items-center justify-between px-4 py-3 border-t">
//           <div className="flex items-center gap-3">
//             <img src="/api/placeholder/32/32" alt="Chat User" className="w-8 h-8 rounded-full" />
//             <div>
//               <div className="font-medium">Oguz Yağız Kara</div>
//               <div className="text-sm text-gray-500">oguz@bluereceipt.com</div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Content Area */}
//       <div className="flex flex-1">
//         {/* Left Sidebar */}
//         <div className="w-72 border-r flex flex-col">
//           <div className="flex border-b">
//             <button className="px-4 py-2 font-medium border-b-2 border-blue-600">Messages</button>
//             <button className="px-4 py-2 text-gray-500">Segments</button>
//           </div>
          
//           <div className="p-3">
//             <div className="flex items-center justify-between mb-4">
//               <div className="flex items-center gap-2">
//                 <MessageCircle className="w-4 h-4" />
//                 <span className="font-medium">All</span>
//                 <Badge variant="secondary">232</Badge>
//               </div>
//               <div className="flex items-center gap-2">
//                 <span className="text-sm text-gray-500">Oldest</span>
//                 <ChevronDown className="w-4 h-4" />
//               </div>
//             </div>

//             {/* Chat List */}
//             <div className="space-y-1">
//               <div className="p-2 hover:bg-gray-100 rounded-lg bg-blue-50">
//                 <div className="flex gap-3">
//                   <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0" />
//                   <div className="flex-1 min-w-0">
//                     <div className="flex justify-between items-center">
//                       <span className="font-medium">Oguz Yağız Kara</span>
//                       <span className="text-xs text-gray-500">+ 5m</span>
//                     </div>
//                     <p className="text-sm text-gray-600 truncate">
//                       I keep getting "error while creating a new pop up" for the first time setup...
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Chat Area */}
//         <div className="flex-1 flex flex-col">
//           <div className="flex-1 p-4 overflow-y-auto">
//             <div className="max-w-2xl mx-auto space-y-4">
//               <div className="flex gap-3 items-start">
//                 <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0" />
//                 <div className="flex flex-col gap-1">
//                   <div className="bg-gray-100 rounded-lg p-3 max-w-md">
//                     <p>I keep getting "error while creating a new pop up" for the first time setup, so I'm not able to create a pop-up. My shop name is PinkSweetHeart</p>
//                   </div>
//                   <span className="text-xs text-gray-500">12:52 PM</span>
//                 </div>
//               </div>

//               <div className="flex gap-3 items-start justify-end">
//                 <div className="flex flex-col gap-1 items-end">
//                   <div className="bg-blue-600 text-white rounded-lg p-3 max-w-md">
//                     <p>Hey, #firstname! I saw you were curious about our products. My name is X from StoreName, feel free to save my number and send me a text if you have any questions or concerns. If you're ready to</p>
//                   </div>
//                   <span className="text-xs text-gray-500">12:55 PM</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Message Input */}
//           <div className="border-t p-4">
//             <div className="max-w-2xl mx-auto flex items-center gap-3">
//               <button className="p-2 hover:bg-gray-100 rounded-full">
//                 <Image className="w-5 h-5 text-gray-500" />
//               </button>
//               <button className="p-2 hover:bg-gray-100 rounded-full">
//                 <Paperclip className="w-5 h-5 text-gray-500" />
//               </button>
//               <input 
//                 type="text" 
//                 placeholder="Message Oguz Yağız"
//                 className="flex-1 border rounded-lg px-4 py-2 text-sm"
//               />
//               <button className="p-2 hover:bg-gray-100 rounded-full">
//                 <Send className="w-5 h-5 text-gray-500" />
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Right Sidebar */}
//         <div className="w-80 border-l">
//           <div className="p-4">
//             <div className="flex flex-col items-center text-center">
//               <div className="w-16 h-16 rounded-full bg-gray-200 mb-2" />
//               <h3 className="font-medium">Oguz Yağız Kara</h3>
//               <p className="text-sm text-gray-500">11:59pm in Ankara, Turkey</p>
              
//               <div className="flex gap-8 my-4">
//                 <button className="flex flex-col items-center gap-1 text-sm">
//                   <Phone className="w-5 h-5" />
//                   <span>Call</span>
//                 </button>
//                 <button className="flex flex-col items-center gap-1 text-sm">
//                   <Video className="w-5 h-5" />
//                   <span>Video</span>
//                 </button>
//                 <button className="flex flex-col items-center gap-1 text-sm">
//                   <MoreHorizontal className="w-5 h-5" />
//                   <span>More</span>
//                 </button>
//               </div>

//               {/* Stats and Info */}
//               <div className="w-full space-y-6">
//                 <div>
//                   <div className="flex justify-between items-center mb-1">
//                     <span className="text-sm text-gray-600">Revenue</span>
//                     <span className="text-sm text-gray-500">3 Orders</span>
//                   </div>
//                   <span className="text-2xl font-semibold">$3,452</span>
//                 </div>

//                 <div>
//                   <div className="flex justify-between items-center mb-1">
//                     <span className="text-sm text-gray-600">Web Visits</span>
//                     <span className="text-sm text-gray-500">4 Link Clicks</span>
//                   </div>
//                   <span className="text-2xl font-semibold">42</span>
//                 </div>

//                 <div className="border-t pt-4">
//                   <div className="flex justify-between items-center mb-3">
//                     <span className="font-medium">Information</span>
//                     <button className="text-blue-600 text-sm">Add</button>
//                   </div>
//                   <div className="space-y-2 text-sm">
//                     <div className="flex justify-between">
//                       <span className="text-gray-600">Email</span>
//                       <span>oguzyagizkara@gmail.com</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span className="text-gray-600">Phone</span>
//                       <span>+90 535 444 81 77</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span className="text-gray-600">Last Visited</span>
//                       <span>8 Aug, 2021</span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="border-t pt-4">
//                   <div className="flex justify-between items-center mb-3">
//                     <span className="font-medium">Tags</span>
//                     <button className="text-blue-600 text-sm">Add</button>
//                   </div>
//                   <div className="flex flex-wrap gap-2">
//                     <Badge className="flex items-center gap-1 bg-gray-100 text-gray-700 hover:bg-gray-100">
//                       Abandoned Cart User
//                       <X className="w-3 h-3" />
//                     </Badge>
//                     <Badge className="flex items-center gap-1 bg-gray-100 text-gray-700 hover:bg-gray-100">
//                       Popup
//                       <X className="w-3 h-3" />
//                     </Badge>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlueChat;