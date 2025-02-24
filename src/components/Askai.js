import React, { useState } from "react";

const Askai = () => {


  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { sender: "doctor", text: "How to operate xrays using diafragm and intersteller with 2 diagnostic components along with small fibers ,plz do f urself.", time: "09:15", image: "https://randomuser.me/api/portraits/men/3.jpg" },
    {
      sender: "patient", text: "Mild narrowing of the medial joint space, suggestive of early osteoarthritis.Bone alignment is normal, with no fractures or dislocations.No visible soft tissue swelling or calcifications.Patella is well- positioned without subluxation.", time: "09:00", image: "https://cdn-icons-png.flaticon.com/512/11698/11698467.png"
    },

  ]);



  const sendMessage = () => {
    if (message.trim() !== "") {
      setMessages([...messages, { sender: "doctor", text: message, time: "Now", image: "https://randomuser.me/api/portraits/men/3.jpg" }]);
      setMessage("");
    }
  };




  return (
    <div>
      {/* Chat Window (Only Visible When a Patient is Selected on Small Screens) */}
      <div className={'w-full  flex flex-col h-screen'}>
        {/* Top Bar with Back Button for Mobile */}
        

        {/* Messages List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((msg, index) => (
            <div key={index} className={`flex items-start ${msg.sender === "doctor" ? "justify-end" : "justify-start"}`}>
              {msg.sender !== "doctor" && (
                <img src={msg.image} alt="Profile" className="w-8 h-8 rounded-full mr-2" />
              )}
              <div className={`p-3 max-w-xs rounded-lg ${msg.sender === "doctor" ? "bg-gray-200" : "bg-blue-100"}`}>
                {msg.text}
                <span className="block text-xs text-gray-500 text-right">{msg.time}</span>
              </div>
              {msg.sender === "doctor" && (
                <img src={msg.image} alt="Profile" className="w-8 h-8 rounded-full ml-2" />
              )}
            </div>
          ))}
        </div>

        {/* Fixed Message Input */}
        <div className="border-t p-2 flex items-center sticky bottom-0 bg-white z-10">
          <input
            type="text"
            className="flex-1 p-2 border rounded-lg"
            placeholder="Type here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button onClick={sendMessage} className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg">
            Send
          </button>
        </div>
      </div>
    </div>
  )
}

export default Askai
