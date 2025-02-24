import React, { useState } from "react";

const Encounter = () => {
  const [activeTab, setActiveTab] = useState("Conversation");

  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Left Section - Tabs and Content */}
        <div className="w-full md:w-2/3 bg-white shadow-md rounded-lg p-4">
          {/* Tabs */}
          <div className="flex border-b mb-4 space-x-4">
            {["CDs", "Notes", "Codes", "Conversation", "Jotting"].map((tab) => (
              <button
                key={tab}
                className={`py-2 px-4 ${
                  activeTab === tab
                    ? "border-b-2 border-blue-500 text-blue-500 font-bold"
                    : "text-gray-600"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="h-80 overflow-y-auto p-4 bg-gray-50 rounded-lg border">
            {activeTab === "Conversation" && (
              <div className="space-y-4">
                <p className="text-gray-800">
                  <strong>PT:</strong> Doctor, I've been having severe stomach
                  pain for the past two days. It feels like it's getting worse.
                </p>
                <p className="text-gray-800">
                  <strong>DR:</strong> I understand. I'll examine your abdomen
                  and ask a few questions to narrow down the cause.
                </p>
              </div>
            )}
            {activeTab !== "Conversation" && (
              <p className="text-gray-600">Content for {activeTab}</p>
            )}
          </div>
        </div>

        {/* Right Section - Patient Info & Diagnostic Overview */}
        <div className="w-full md:w-1/3 bg-white shadow-md rounded-lg p-4 border">
          <h3 className="text-lg font-semibold">Patient Details</h3>
          <p className="text-gray-600">Aarav | 26, Male | Visited 1 month ago</p>

          {/* Diagnostic Overview */}
          <div className="mt-4 border-t pt-3">
            <h4 className="text-blue-600 font-semibold">DIABETES MELLITUS</h4>
            <p className="text-sm text-gray-500">Type 2 diabetes mellitus</p>

            <h4 className="text-blue-600 font-semibold mt-3">
              Diagnostic Overview
            </h4>
            <ul className="list-disc list-inside text-gray-700 text-sm">
              <li>
                <strong>eGFR NAA:</strong> 45 (05/2024)
              </li>
              <li>
                <strong>HbA1c:</strong> 8.2% (05/2024)
              </li>
              <li>
                <strong>Fasting Blood Sugar:</strong> 126 mg/dL
              </li>
              <li>
                <strong>Post Prandial Blood Sugar:</strong> 192 mg/dL
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Suggested Actions - Inside a Box */}
      <div className="mt-4 bg-white shadow-md rounded-lg p-4 border">
        <h3 className="text-lg font-semibold">Suggested Actions</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
          {/* Suggested Interventions */}
          <div className="bg-gray-50 p-3 rounded-md border">
            <h4 className="text-blue-600 font-semibold">Interventions</h4>
            <ul className="list-disc list-inside text-gray-700 text-sm mt-2">
              <li>Start physical therapy for mobility improvement</li>
              <li>Prescribe antibiotics for throat infections</li>
              <li>Monitor blood sugar levels regularly</li>
            </ul>
          </div>

          {/* Suggested Tests */}
          <div className="bg-gray-50 p-3 rounded-md border">
            <h4 className="text-blue-600 font-semibold">Tests</h4>
            <ul className="list-disc list-inside text-gray-700 text-sm mt-2">
              <li>Perform an ECG test</li>
              <li>Conduct a throat culture test</li>
              <li>Check for HbA1c levels</li>
            </ul>
          </div>

          {/* Suggested Questions */}
          <div className="bg-gray-50 p-3 rounded-md border">
            <h4 className="text-blue-600 font-semibold">Questions</h4>
            <ul className="list-disc list-inside text-gray-700 text-sm mt-2">
              <li>Have you had a history of diabetes in your family?</li>
              <li>Do you experience frequent dizziness?</li>
              <li>How often do you exercise?</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Encounter;
