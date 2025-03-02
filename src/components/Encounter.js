import React, { useState } from "react";
import { FaFileMedical, FaStickyNote, FaCode, FaComments, FaPen } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";

const Encounter = () => {
  const [activeTab, setActiveTab] = useState("CDs");

  const tabs = [
    { id: "CDs", label: "CDs", icon: <FaFileMedical /> },
    { id: "Notes", label: "Notes", icon: <FaStickyNote /> },
    { id: "Codes", label: "Codes", icon: <FaCode /> },
    { id: "Conversation", label: "Conversation", icon: <FaComments /> },
    { id: "Jotting", label: "Jotting", icon: <FaPen /> },
  ];

  return (
    <div className="max-w-7xl mx-auto ">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Left Section - Tabs */}
        <div className="w-full md:w-2/3 bg-white shadow-md rounded-lg p-2">
          {/* Tabs */}
          <div className="border-b flex flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`flex items-center gap-2 py-2 px-4 w-full md:w-auto ${
                  activeTab === tab.id
                    ? "border-b-2 border-blue-500 text-blue-500 font-bold"
                    : "text-gray-600"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>

          {/* Content for active tab */}
          <div className="mt-4">
            {/* Mobile View */}
            <div className="md:hidden">
              {activeTab === "CDs" && (
                <div>
                  <div className="bg-white p-2 shadow rounded-lg mb-4">
                    <h3 className="font-bold text-gray-800">Suggested Interventions</h3>
                    <ul className="list-disc list-inside text-gray-700">
                      <li>Start physical therapy sessions to improve mobility and reduce joint pain.</li>
                      <li>Prescribe antibiotics to treat bacterial throat infections and provide symptom relief.</li>
                      <li>Initiate a controlled diet and exercise plan for managing Type 2 Diabetes.</li>
                      <li>Administer bronchodilators to alleviate acute asthma symptoms.</li>
                    </ul>
                    <button className="mt-2 flex items-center text-blue-500">
                      <FiPlus className="mr-1" /> Add
                    </button>
                  </div>
                  <div className="bg-white p-2 shadow rounded-lg mb-4">
                    <h3 className="font-bold text-gray-800">Suggested Tests</h3>
                    <ul className="list-disc list-inside text-gray-700">
                      <li>Perform an MRI scan to assess soft tissue and ligament damage.</li>
                      <li>Conduct a throat culture test to confirm the presence of streptococcal bacteria.</li>
                      <li>Perform an HbA1c test to monitor long-term blood sugar levels.</li>
                      <li>Conduct a pulmonary function test (spirometry) to evaluate lung capacity and airflow.</li>
                    </ul>
                    <button className="mt-2 flex items-center text-blue-500">
                      <FiPlus className="mr-1" /> Add
                    </button>
                  </div>
                  <div className="bg-white p-2 shadow rounded-lg">
                    <h3 className="font-bold text-gray-800">Suggested Questions</h3>
                    <button className="mt-2 flex items-center text-blue-500">
                      <FiPlus className="mr-1" /> Add
                    </button>
                  </div>
                </div>
              )}

              {activeTab === "Notes" && (
                <div>
                  <h3 className="text-gray-800 font-bold">Doctor's Notes</h3>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Possible infection detected.</li>
                    <li>Follow-up required after 1 week.</li>
                  </ul>
                </div>
              )}

              {activeTab === "Codes" && (
                <div>
                  <h3 className="text-gray-800 font-bold">Medical Codes</h3>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>ICD-10: E11.9 (Type 2 Diabetes Mellitus)</li>
                    <li>CPT: 99214 (Office Visit)</li>
                  </ul>
                </div>
              )}

              {activeTab === "Conversation" && (
                <div>
                  <h3 className="text-gray-800 font-bold">Doctor-Patient Conversation</h3>
                  <p><strong>PT:</strong> Doctor, I've been having severe stomach pain for the past two days.</p>
                  <p><strong>DR:</strong> I understand. I'll examine your abdomen and ask a few questions.</p>
                </div>
              )}

              {activeTab === "Jotting" && (
                <div>
                  <h3 className="text-gray-800 font-bold">Quick Notes</h3>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Check blood sugar levels.</li>
                    <li>Patient complains of dizziness.</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Desktop View */}
            <div className="hidden md:block">
              {activeTab === "CDs" && (
                <div>
                  <div className="bg-white p-2 shadow rounded-lg mb-4">
                    <h3 className="font-bold text-gray-800">Suggested Interventions</h3>
                    <ul className="list-disc list-inside text-gray-700">
                      <li>Start physical therapy sessions to improve mobility and reduce joint pain.</li>
                      <li>Prescribe antibiotics to treat bacterial throat infections and provide symptom relief.</li>
                      <li>Initiate a controlled diet and exercise plan for managing Type 2 Diabetes.</li>
                      <li>Administer bronchodilators to alleviate acute asthma symptoms.</li>
                    </ul>
                    <button className="mt-2 flex items-center text-blue-500">
                      <FiPlus className="mr-1" /> Add
                    </button>
                  </div>
                  <div className="bg-white p-2 shadow rounded-lg mb-4">
                    <h3 className="font-bold text-gray-800">Suggested Tests</h3>
                    <ul className="list-disc list-inside text-gray-700">
                      <li>Perform an MRI scan to assess soft tissue and ligament damage.</li>
                      <li>Conduct a throat culture test to confirm the presence of streptococcal bacteria.</li>
                      <li>Perform an HbA1c test to monitor long-term blood sugar levels.</li>
                      <li>Conduct a pulmonary function test (spirometry) to evaluate lung capacity and airflow.</li>
                    </ul>
                    <button className="mt-2 flex items-center text-blue-500">
                      <FiPlus className="mr-1" /> Add
                    </button>
                  </div>
                  <div className="bg-white p-2 shadow rounded-lg">
                    <h3 className="font-bold text-gray-800">Suggested Questions</h3>
                    <button className="mt-2 flex items-center text-blue-500">
                      <FiPlus className="mr-1" /> Add
                    </button>
                  </div>
                </div>
              )}

              {activeTab === "Notes" && (
                <div>
                  <h3 className="text-gray-800 font-bold">Doctor's Notes</h3>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Possible infection detected.</li>
                    <li>Follow-up required after 1 week.</li>
                  </ul>
                </div>
              )}

              {activeTab === "Codes" && (
                <div>
                  <h3 className="text-gray-800 font-bold">Medical Codes</h3>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>ICD-10: E11.9 (Type 2 Diabetes Mellitus)</li>
                    <li>CPT: 99214 (Office Visit)</li>
                  </ul>
                </div>
              )}

              {activeTab === "Conversation" && (
                <div>
                  <h3 className="text-gray-800 font-bold">Doctor-Patient Conversation</h3>
                  <p><strong>PT:</strong> Doctor, I've been having severe stomach pain for the past two days.</p>
                  <p><strong>DR:</strong> I understand. I'll examine your abdomen and ask a few questions.</p>
                </div>
              )}

              {activeTab === "Jotting" && (
                <div>
                  <h3 className="text-gray-800 font-bold">Quick Notes</h3>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Check blood sugar levels.</li>
                    <li>Patient complains of dizziness.</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Section - Patient Info */}
        <div className="w-full md:w-1/3 bg-white shadow-md rounded-lg p-2">
          <h3 className="text-lg font-semibold">Aarav</h3>
          <p className="text-gray-600">PT23212 | 30, Male | Visited 1 month ago</p>
          <div className="mt-2">
            <h4 className="text-blue-600 font-semibold">Diagnostic Overview</h4>

            {/* Diabetes Mellitus Section */}
            <div className="bg-gray-100 p-3 rounded-lg mt-2">
              <h4 className="font-semibold text-gray-700">DIABETES MELLITUS</h4>
              <p className="text-sm text-gray-500">Type 2 diabetes mellitus</p>
              <div className="mt-2 text-sm">
                <p className="text-red-500">eGFR NAA=55</p>
                <p className="text-green-500">HbA1c=6.2</p>
                <p className="text-red-500">Fasting blood sugar=123 mg/dL</p>
                <p className="text-red-500">Post prandial blood sugar=165</p>
              </div>
            </div>

            {/* Hypertension Section */}
            <div className="bg-gray-100 p-3 rounded-lg mt-2">
              <h4 className="font-semibold text-gray-700">HYPERTENSION</h4>
              <p className="text-sm text-gray-500">Extension Hypertension</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Encounter;
