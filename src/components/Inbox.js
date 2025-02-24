import React, { useState } from "react";

const Inbox = () => {
  const patients = [
    { name: "Aarav", priority: "High", lastMessage: "You: Of course, I'll do...", image: "https://randomuser.me/api/portraits/men/10.jpg" },
    { name: "Ishita", priority: "High", lastMessage: "I've been experiencing...", image: "https://randomuser.me/api/portraits/women/11.jpg" },
    { name: "Vihaan", priority: "High", lastMessage: "Can you please confirm...", image: "https://randomuser.me/api/portraits/men/12.jpg" },
    { name: "Meera", priority: "Medium", lastMessage: "Is it safe to continue...", image: "https://randomuser.me/api/portraits/women/13.jpg" },
    { name: "Aditya", priority: "Low", lastMessage: "The prescribed oint...", image: "https://randomuser.me/api/portraits/men/14.jpg" },
  ];

  const [selectedPatient, setSelectedPatient] = useState(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { sender: "patient", text: "Doctor, the pain in my shoulder hasn’t gone away even after applying the ointment you prescribed. Should I get an X-ray?", time: "09:00", image: "https://randomuser.me/api/portraits/men/15.jpg" },
    { sender: "doctor", text: "Of course, I'll do a detailed evaluation. If necessary, we'll arrange for an X-ray.", time: "09:15", image: "https://randomuser.me/api/portraits/men/3.jpg" },
  ]);

  const sendMessage = () => {
    if (message.trim() !== "") {
      setMessages([...messages, { sender: "doctor", text: message, time: "Now", image: "https://randomuser.me/api/portraits/men/3.jpg" }]);
      setMessage("");
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar (Patient List) */}
      <div className={`w-full md:w-1/4 border-r bg-white flex flex-col h-screen ${selectedPatient ? "hidden md:flex" : "flex"}`}>
        {/* Sticky Header */}
        <div className="sticky top-16 bg-white z-10 p-4 border-b">
          <h2 className="text-lg font-semibold">Patient Chats</h2>
        </div>

        {/* Scrollable Patient List */}
        <div className="overflow-y-auto flex-1 p-4">
          {patients.map((patient, index) => (
            <div
              key={index}
              className={`p-3 mb-2 rounded-lg cursor-pointer flex items-center ${selectedPatient?.name === patient.name ? "bg-blue-100" : "hover:bg-gray-100"}`}
              onClick={() => setSelectedPatient(patient)}
            >
              <img src={patient.image} alt="Profile" className="w-10 h-10 rounded-full mr-3" />
              <div className="flex-1">
                <div className="flex justify-between">
                  <span className="font-semibold">{patient.name}</span>
                  <span className={`text-sm ${patient.priority === "High" ? "text-red-500" : patient.priority === "Medium" ? "text-yellow-500" : "text-green-500"}`}>
                    {patient.priority}
                  </span>
                </div>
                <p className="text-sm text-gray-600 truncate">{patient.lastMessage}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Window (Only Visible When a Patient is Selected on Small Screens) */}
      <div className={`w-full md:w-3/4 flex flex-col h-screen ${selectedPatient ? "flex" : "hidden md:flex"}`}>
        {/* Top Bar with Back Button for Mobile */}
        <div className="border-b p-4 flex items-center justify-between sticky top-16 bg-white z-10">
          <button onClick={() => setSelectedPatient(null)} className="md:hidden px-2 py-1 bg-gray-200 rounded-lg">
            ← Back
          </button>
          <h2 className="text-lg font-semibold">{selectedPatient?.name}</h2>

          {/* Filters (Hidden on Small Screens) */}
          <div className="md:flex">
            <select className=" hidden md:flex border p-1 rounded-md mr-2">
              <option>All Types</option>
            </select>
            <select className=" hidden md:flex border p-1 rounded-md">
              <option>All Departments</option>
            </select>
          </div>
        </div>

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
  );
};

export default Inbox;
