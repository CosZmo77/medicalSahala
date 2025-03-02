import React, { useState, useEffect } from "react";
import {  FaArrowLeft } from "react-icons/fa";

// Sample Patient Data
const allPatients = [
  { id: 1, name: "Aarav", gender: "Male", age: 40, contact: "824737346", blood: "B+", registered: "12 March, 2023", category: "Regular", image: "https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg=" },
  { id: 2, name: "Ishita", gender: "Female", age: 35, contact: "9876543210", blood: "O+", registered: "30 December, 2023", category: "New", image: "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=" },
  { id: 3, name: "Vihaan", gender: "Male", age: 50, contact: "7654321890", blood: "A-", registered: "14 April, 2022", category: "Regular", image: "https://t4.ftcdn.net/jpg/06/08/55/73/360_F_608557356_ELcD2pwQO9pduTRL30umabzgJoQn5fnd.jpg" },
  { id: 4, name: "Meera", gender: "Female", age: 28, contact: "9988776655", blood: "AB+", registered: "30 March, 2021", category: "New", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUN_JC7o9W8SJbHH9e5x7ntXUTo5DOy3GXWg&s" },
  { id: 5, name: "Aditya", gender: "Male", age: 45, contact: "8765432198", blood: "B-", registered: "22 June, 2020", category: "Regular", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZMe8-IQ_Ej4lptsFsuMcU81LqrVS5KutgPw&s" },
];

// Default Health History
const healthHistory = {
  1: [{ date: "15/01/2025", doctor: "Dr. Rajesh", diagnosis: "Routine Check", prescription: "Multivitamins", lab: "Blood Test", notes: "Follow-up needed" }],
  2: [{ date: "10/12/2024", doctor: "Dr. Priya", diagnosis: "Hypertension", prescription: "Amlodipine", lab: "ECG", notes: "BP monitored" }],
  3: [{ date: "05/11/2024", doctor: "Dr. Anjali", diagnosis: "Skin Allergy", prescription: "Antihistamine", lab: "Allergy Test", notes: "Mild reaction" }],
  4: [{ date: "20/09/2024", doctor: "Dr. Sanjay", diagnosis: "Oral Hygiene", prescription: "Fluoride Treatment", lab: "Dental X-ray", notes: "No cavities" }],
  5: [{ date: "05/10/2023", doctor: "Dr. Ravi", diagnosis: "Diabetes", prescription: "Metformin", lab: "Glucose Test", notes: "Diet control needed" }],
};

const History = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [patients, setPatients] = useState(allPatients);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filterPatients = (category) => {
    setSelectedCategory(category);
    setPatients(category === "All" ? allPatients : allPatients.filter((p) => p.category === category));
  };

  return (
    <div className="flex h-screen bg-gray-100 flex-col md:flex-row">
      {/* Sidebar (Patient List) */}
      <div className={`w-full md:w-1/4 border-r bg-white flex flex-col h-screen ${selectedPatient && isMobileView ? "hidden" : "flex"}`}>
        <div className="p-4 border-b">
          <input type="text" placeholder="Search patients" className="w-full p-2 border rounded" />
        </div>
        <div className="flex p-2 gap-2">
          {"All Regular New".split(" ").map((cat) => (
            <button key={cat} onClick={() => filterPatients(cat)}
              className={`flex-1 p-2 rounded ${selectedCategory === cat ? "bg-blue-600 text-white" : "bg-gray-200"}`}>
              {cat}
            </button>
          ))}
        </div>
        {patients.map((patient) => (
          <div key={patient.id} onClick={() => setSelectedPatient(patient)}
            className={`p-4 border-b cursor-pointer flex items-center gap-2 ${selectedPatient?.id === patient.id ? "bg-blue-100" : "hover:bg-gray-50"}`}>
            <img src={patient.image} alt="Profile" className="w-10 h-10 rounded-full" />
            <div className="flex-1">
              <p className="font-semibold w-full text-lg md:text-base">{patient.name}</p>
              <p className="text-sm text-gray-500">Registered: {patient.registered}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Patient Details */}
      <div className={`w-full md:w-3/4 flex flex-col h-screen ${selectedPatient ? "flex" : "hidden md:flex"}`}>
        {isMobileView && selectedPatient && (
          <button onClick={() => setSelectedPatient(null)} className="p-3 bg-blue-500 text-white flex items-center gap-2">
            <FaArrowLeft /> Back to Patients
          </button>
        )}
        {selectedPatient && (
          <div className="p-1">
            <div className="flex items-center justify-between bg-white p-2  rounded-lg">
              <div className="flex items-center gap-4 w-full">
                <img src={selectedPatient.image} alt="Profile" className="w-12 h-12 rounded-full" />
                <div className="w-full">
                  <h2 className="text-lg font-semibold text-center md:text-left">{selectedPatient.name}</h2>
                  <p className="text-sm text-gray-500 text-center md:text-left">Registered: {selectedPatient.registered}</p>
                </div>
              </div>
            </div>


            <div className=" p-2 rounded-lg w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Basic Information */}
                <div className="border border-gray-300 rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-3">Basic Information</h3>
                  <div className="space-y-2 text-gray-700">
                    <p className="flex items-center gap-2">
                      <span>👤</span> <span className="font-medium">Gender:</span> {selectedPatient.gender}
                    </p>
                    <p className="flex items-center gap-2">
                      <span>🎂</span> <span className="font-medium">Age:</span> {selectedPatient.age}
                    </p>
                    <p className="flex items-center gap-2">
                      <span>📞</span> <span className="font-medium">Contact:</span> {selectedPatient.contact}
                    </p>
                    <p className="flex items-center gap-2">
                      <span>🌿</span> <span className="font-medium">Allergies:</span> {selectedPatient.allergies ? 'Yes' : 'No'}
                    </p>
                    <p className="flex items-center gap-2">
                      <span>🩸</span> <span className="font-medium">Blood Group:</span> {selectedPatient.blood}
                    </p>
                  </div>
                </div>

                {/* Latest Diagnosis */}
                <div className="border border-gray-300 rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-3">Latest Diagnosis</h3>
                  <ul className="space-y-2 text-gray-700">
                    {healthHistory[selectedPatient.id]?.slice(0, 4).map((entry, index) => (
                      <li key={index} className="flex justify-between items-center border-b pb-2 last:border-b-0">
                        <span>{entry.diagnosis}</span>
                        <span className="text-sm text-gray-500">{entry.date}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>




            {/* Health History */}
            <div className="bg-white p-4  rounded-lg mt-4 overflow-x-auto max-w-full">
              <h3 className="text-lg font-semibold mb-2">Health History</h3>
              <table className="w-full min-w-[600px] border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-300 px-3 py-2">Date</th>
                    <th className="border border-gray-300 px-3 py-2">Doctor</th>
                    <th className="border border-gray-300 px-3 py-2">Diagnosis</th>
                    <th className="border border-gray-300 px-3 py-2">Prescription</th>
                    <th className="border border-gray-300 px-3 py-2">Lab Test</th>
                    <th className="border border-gray-300 px-3 py-2">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {healthHistory[selectedPatient.id]?.map((entry, index) => (
                    <tr key={index} className="border border-gray-300">
                      <td className="border border-gray-300 px-3 py-2">{entry.date}</td>
                      <td className="border border-gray-300 px-3 py-2">{entry.doctor}</td>
                      <td className="border border-gray-300 px-3 py-2">{entry.diagnosis}</td>
                      <td className="border border-gray-300 px-3 py-2">{entry.prescription}</td>
                      <td className="border border-gray-300 px-3 py-2">{entry.lab}</td>
                      <td className="border border-gray-300 px-3 py-2">{entry.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>


          </div>
        )}
      </div>
    </div>
  );
};

export default History;
