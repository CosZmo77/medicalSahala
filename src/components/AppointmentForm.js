import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa"; // Import back arrow icon

const AppointmentForm = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        age: "",
        gender: "",
        reason: "",
        doctor: "",
        hospital: "",
        date: "",
        slot: "",
        contact: "",
    });

    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        const isValid = Object.values(formData).every((value) => value.trim() !== "");
        setIsFormValid(isValid);
    }, [formData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        navigate("/Adetails", { state: formData });
    };

    return (
        <div className="max-w-2xl mx-auto p-8  shadow-lg rounded-lg">
            {/* Header */}
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
                <FaArrowCircleLeft
                    className="text-xl inline cursor-pointer text-4xl absolute left-4 top-4 text-gray-600 hover:text-gray-800"
                    onClick={() => navigate(-1)}
                />Schedule Appointment
            </h2>

            {/* Patient Details */}
            <div className="mb-6">
                <label className="block font-medium text-gray-700">Patient's Name</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-md bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter Patient's Name"
                />
            </div>

            <div className="mb-6 flex gap-6">
                <div className="w-1/2">
                    <label className="block font-medium text-gray-700">Age</label>
                    <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        className="w-full p-3 border rounded-md bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter Age"
                    />
                </div>
                <div className="w-1/2">
                    <label className="block font-medium text-gray-700">Gender</label>
                    <div className="flex items-center gap-4">
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="gender"
                                value="Male"
                                checked={formData.gender === "Male"}
                                onChange={handleChange}
                                className="mr-2"
                            />
                            Male
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="gender"
                                value="Female"
                                checked={formData.gender === "Female"}
                                onChange={handleChange}
                                className="mr-2"
                            />
                            Female
                        </label>
                    </div>
                </div>
            </div>

            <div className="mb-6">
                <label className="block font-medium text-gray-700">Reason for Appointment</label>
                <textarea
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-md bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter reason for appointment"
                ></textarea>
            </div>

            {/* Doctor Details */}
            <div className="mb-6">
                <label className="block font-medium text-gray-700">Doctor's Name</label>
                <select
                    name="doctor"
                    value={formData.doctor}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-md bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    <option value="">Select Doctor</option>
                    <option value="Dr. Smith">Dr. Smith</option>
                    <option value="Dr. John">Dr. John</option>
                </select>
            </div>

            <div className="mb-6">
                <label className="block font-medium text-gray-700">Hospital's Name</label>
                <select
                    name="hospital"
                    value={formData.hospital}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-md bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    <option value="">Select Hospital</option>
                    <option value="City Hospital">City Hospital</option>
                    <option value="Green Medical Center">Green Medical Center</option>
                </select>
            </div>

            <div className="mb-6 flex gap-6">
                <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-1/2 p-3 border rounded-md bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <select
                    name="slot"
                    value={formData.slot}
                    onChange={handleChange}
                    className="w-1/2 p-3 border rounded-md bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    <option value="">Select Slot</option>
                    <option value="9:00 AM - 10:00 AM">9:00 AM - 10:00 AM</option>
                    <option value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</option>
                </select>
            </div>

            {/* Contact Number */}
            <div className="mb-6">
                <label className="block font-medium text-gray-700">Contact Number</label>
                <input
                    type="tel"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-md bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="+91 00000 00000"
                />
            </div>

            {/* Assistance Section */}
            <div className="p-4 border rounded-lg bg-gray-100 mb-6 flex items-center justify-between">
                <p className="text-sm text-gray-600">
                    Our support team is here to help you with appointment scheduling.
                </p>
                <button className="text-blue-500 text-xl">📞</button>
            </div>

            {/* Submit Button */}
            <button
                className={`w-full p-3 rounded-md ${isFormValid
                        ? "bg-blue-500 hover:bg-blue-600 text-white cursor-pointer"
                        : "bg-gray-400 text-gray-200 cursor-not-allowed"
                    }`}
                disabled={!isFormValid}
                onClick={handleSubmit}
            >
                Schedule Appointment
            </button>
        </div>
    );
};

export default AppointmentForm;
