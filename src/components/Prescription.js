import { useState } from "react";

const PrescriptionPage = () => {
  const [formData, setFormData] = useState({
    doctorName: "",
    hospitalName: "",
    date: "",
    time: "",
    patientName: "",
    age: "",
    gender: "",
    visitReason: "",
    medication: [{ name: "", days: "", dosage: "" }],
    followUp: "None",
  });
  const [medications, setMedications] = useState([
    { name: "", days: "", dosage: "", quantity: "" },
  ]);
  const [selectedFollowUp, setSelectedFollowUp] = useState("None");


  const handleMedicationChange = (index, field, value) => {
    const updatedMedications = [...medications];
    updatedMedications[index][field] = value;
    setMedications(updatedMedications);
    checkFormValidity();
  };

  const addMedication = () => {
    setMedications([...medications, { name: "", days: "", dosage: "", quantity: "" }]);
  };

  const removeMedication = (index) => {
    const updatedMedications = medications.filter((_, i) => i !== index);
    setMedications(updatedMedications);
    checkFormValidity();
  };

  const [isFormValid, setIsFormValid] = useState(false);

  // Function to handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateForm();
  };

  const checkFormValidity = () => {
    const isValid = medications.every(
      (med) => med.name && med.days && med.dosage && med.quantity
    );
    setIsFormValid(isValid);
  };

  // Function to validate form
  const validateForm = () => {
    const isValid =
      formData.doctorName &&
      formData.hospitalName &&
      formData.date &&
      formData.time &&
      formData.patientName &&
      formData.age &&
      formData.gender &&
      formData.visitReason &&
      formData.medication.every(
        (med) => med.name && med.days && med.dosage
      );
    setIsFormValid(isValid);
  };

  return (
    <div className="min-h-screen p-2 bg-gray-100 flex justify-center">
      <div className="  rounded-lg  w-full">

        {/* Doctor Details */}

        <div className="mb-6">
          <h3 className="text-lg font-bold mb-2">Doctor Details</h3>
          <div className="border-2 border-gray-300 rounded-lg p-2 space-y-3  shadow-sm">

            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="doctorName"
                placeholder="Doctor's Name"
                className="input-field"
                value={formData.doctorName}
                onChange={handleChange}
              />
              <input
                type="text"
                name="hospitalName"
                placeholder="Hospital's Name"
                className="input-field"
                value={formData.hospitalName}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4 mt-4">

              <input
                type="date"
                name="date"
                className="input-field"
                value={formData.date}
                onChange={handleChange}
              />
              <input
                type="time"
                name="time"
                className="input-field"
                value={formData.time}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {/* Patient Details */}
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-2">Patient Details</h3>
          <div className="border-2 border-gray-300 rounded-lg p-2 space-y-3  shadow-sm">

            <div className="flex flex-col md:flex-row md:items-center gap-4">
              {/* Patient Name Input */}
              <input
                type="text"
                name="patientName"
                placeholder="Patient's Name"
                className="input-field"
                value={formData.patientName}
                onChange={handleChange}
              />
              <div className="flex flex-col md:flex-row md:items-center gap-4 w-full">

                {/* Age Input */}
                <input
                  type="number"
                  name="age"
                  placeholder="Age"
                  className="input-field w-20"
                  value={formData.age}
                  onChange={handleChange}
                />

                {/* Gender Selection */}
                <div className="flex items-center gap-4">
                  <span className="font-medium">Gender:</span>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      className="mr-1 accent-blue-500"
                      onChange={handleChange}
                    />
                    Male
                  </label>
                  <label className="flex items-center ml-4">
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      className="mr-1 accent-blue-500"
                      onChange={handleChange}
                    />
                    Female
                  </label>
                </div></div>
            </div>
            <textarea
              name="visitReason"
              placeholder="Reason for visit"
              className="input-field mt-3"
              value={formData.visitReason}
              onChange={handleChange}
            ></textarea>

          </div>
        </div>

        {/* Medication Details */}
        <div className="border rounded-lg space-y-3">
          <h3 className="font-semibold">Medication Details</h3>
          <div className="border-2 border-gray-300 rounded-lg p-2 space-y-3  shadow-sm">

            {medications.map((med, index) => (
              <div key={index} className="flex flex-col md:flex-row md:items-center gap-4">
                <input
                  type="text"
                  placeholder="Medication Name"
                  value={med.name}
                  onChange={(e) => handleMedicationChange(index, "name", e.target.value)}
                  className="input-field w-full"
                />
                <div className="flex flex-col md:flex-row md:items-center gap-4 w-full">
                  <input
                    type="number"
                    placeholder="Days"
                    value={med.days}
                    onChange={(e) => handleMedicationChange(index, "days", e.target.value)}
                    className="input-field w-20"
                  />
                  <input
                    type="text"
                    placeholder="0 - 0 - 0"
                    value={med.dosage}
                    onChange={(e) => handleMedicationChange(index, "dosage", e.target.value)}
                    className="input-field w-full"
                  />
                  {/* Before/After Meal Selection */}
                  <select
                    value={med.meal}
                    onChange={(e) => handleMedicationChange(index, "meal", e.target.value)}
                    className="input-field w-32"
                  >
                    <option value="">Meal Timing</option>
                    <option value="Before Meal">Before Meal</option>
                    <option value="After Meal">After Meal</option>
                  </select>

                  <button
                    onClick={() => removeMedication(index)}
                    className="text-red-500 text-lg hover:text-red-700"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            ))}
            <button onClick={addMedication} className="text-blue-500">
              ➕ Add More
            </button>
            <textarea placeholder="Notes" className="input-field h-16"></textarea>
          </div></div>


        {/* Follow-up Appointment */}
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-2">Follow-up Appointment</h3>
          <div className="flex flex-wrap gap-2">
            {["None", "After 3 days", "After a week", "After 2 weeks", "After a month", "Customize"].map(
              (option) => (
                <button
                  key={option}
                  className={`px-3 py-1 rounded-md border ${selectedFollowUp === option ? "bg-blue-500 text-white" : "bg-gray-200"
                    }`}
                  onClick={() => setSelectedFollowUp(option)}
                >
                  {option}
                </button>
              )
            )}
          </div>
        </div>

        {/* Save Button */}
        <button
          className={`w-full py-2 rounded-lg text-white font-semibold ${isFormValid ? "bg-green-500" : "bg-gray-400 cursor-not-allowed"
            }`}
          disabled={!isFormValid}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default PrescriptionPage;
