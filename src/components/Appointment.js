import React from "react";
import { FaUserPlus, FaVideo, FaEllipsisV, FaClock } from "react-icons/fa";
import AppointmentSummary from "./AppointmentSummary";
import {  useNavigate } from "react-router-dom";

const appointments = [
  {
    id: 1,
    name: "Aarav",
    time: "10:00 AM",
    status: "ONGOING",
    statusColor: "text-green-500",
    img: "https://randomuser.me/api/portraits/men/10.jpg",
    age: 30,
    gender: "Male",
    visit: "Visited 1 month ago",
  },
  {
    id: 2,
    name: "Ishita",
    time: "10:30 AM",
    status: "UPCOMING",
    statusColor: "text-blue-500",
    img: "https://randomuser.me/api/portraits/women/11.jpg",
    age: 28,
    gender: "Female",
    visit: "Visited 1 month ago",
  },
  {
    id: 3,
    name: "Kavya",
    time: "11:00 AM",
    status: "UPCOMING",
    statusColor: "text-blue-500",
    img: "https://randomuser.me/api/portraits/women/12.jpg",
    age: 24,
    gender: "Female",
    visit: "Visited 1 month ago",
  },
  {
    id: 4,
    name: "Aditya",
    time: "11:30 AM",
    status: "UPCOMING",
    statusColor: "text-blue-500",
    img: "https://randomuser.me/api/portraits/men/13.jpg",
    age: 27,
    gender: "Male",
    visit: "Visited 2 months ago",
  },
];




const Appointment = () => {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <div className=" input-field p-2 gap-4 rounded-lg  flex flex-col sm:flex-row justify-between items-center">
        <div className="text-center sm:text-left">
          <h2 className="text-2xl font-bold">24</h2>
          <p className="text-gray-500">ALL PATIENTS</p>
        </div>

        <AppointmentSummary total={24} upcoming={12} completed={8} missed={4} />

        <div className="flex space-x-4">
          <div className="text-center">
            <h2 className="text-xl font-bold text-purple-500">12</h2>
            <p className="text-gray-500">UPCOMING</p>
          </div>
          <div className="text-center">
            <h2 className="text-xl font-bold text-green-500">8</h2>
            <p className="text-gray-500">COMPLETED</p>
          </div>
          <div className="text-center">
            <h2 className="text-xl font-bold text-pink-500">4</h2>
            <p className="text-gray-500">MISSED</p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 justify-between mt-4">
        <button className="flex items-center bg-green-500 text-white px-4 py-2 rounded-md" onClick={()=>navigate("/Aform")}>
          <FaUserPlus className="mr-2" /> Add Appointment
        </button>
        <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-md">
          <FaVideo className="mr-2" /> Video Consultation
        </button>
      </div>

      {/* Date and Filters */}
      <div className="mt-4 flex justify-between items-center">
        <p className="text-gray-600 font-medium">Today, 10 Jan 2024</p>
        <div className="flex space-x-2">
          <select className="border p-2 rounded-md">
            <option>All Records</option>
            <option>Upcoming</option>
            <option>Completed</option>
          </select>
          <select className="border p-2 rounded-md">
            <option>Daily</option>
            <option>Weekly</option>
          </select>
        </div>
      </div>

      {/* Appointment List */}
      <div className="mt-4 space-y-4">
        {appointments.map((appointment) => (
          <div
            key={appointment.id}
            className="bg-white p-2 rounded-lg shadow-md flex items-center justify-between"
          >
            {/* Patient Image */}
            <div className="flex items-center space-x-4">
              <img
                src={appointment.img}
                alt={appointment.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className={`${appointment.statusColor} font-bold`}>
                  {appointment.time} • {appointment.status}
                </p>
                <p className="font-semibold">{appointment.name}</p>
                <div className="text-gray-500 text-sm flex items-center space-x-2">
                  <span>👤 {appointment.age}, {appointment.gender}</span>
                  <span className="flex gap-2 items-center "> <FaClock /> {appointment.visit}</span>
                </div>
              </div>
            </div>
            {/* More Options */}
            <FaEllipsisV className="text-gray-500 cursor-pointer" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Appointment;
