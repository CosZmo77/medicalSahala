import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa"; // Import back arrow icon

const AppointmentDetails = () => {
    const { state } = useLocation();

    const navigate = useNavigate();
    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100">
            <div className="w-full max-w-lg p-6 rounded-lg space-y-4 flex flex-col justify-between h-[97vh]">
                {/* Header - Sticks at the Top */}

                <div className="flex items-center space-x-28">
                    <FaArrowCircleLeft 
                        className="text-xl cursor-pointer text-4xl absolute left-4 top-4 text-gray-600 hover:text-gray-800"
                        onClick={() => navigate(-1)}
                    />
                    <h2 className="text-xl font-bold text-center">Appointment Details</h2>
                </div>
                {/* Main Content with Gap */}
                <div className="flex-1 overflow-auto space-y-8 mt-4">
                    {/* Patient Details */}
                    <div className="mt-8 ">
                        <h2 className="text-xl font-bold mb-4">Patient Details        <div className='w-full border-t border-gray-200 my-2' />
                        </h2>
                        <div className="space-y-2">
                            <p className="flex justify-between"><strong>Name:</strong>{state.name}</p>
                            <p className="flex justify-between"><strong>Age:</strong> {state.age}</p>
                            <p className="flex justify-between"><strong>Gender:</strong> {state.gender}</p>
                            <p className="flex justify-between"><strong>Contact:</strong> {state.contact}</p>
                        </div>
                    </div>

                    {/* Doctor Details */}
                    <div>
                        <h2 className="text-xl font-bold mb-4">Doctor Details        <div className='w-full border-t border-gray-200 my-2' />
                        </h2>
                        <div className="space-y-2">
                            <p className="flex justify-between"><strong>Doctor:</strong> {state.doctor}</p>
                            <p className="flex justify-between"><strong>Hospital:</strong> {state.hospital}</p>
                            <p className="flex justify-between"><strong>Date & Slot:</strong> {state.date} - {state.slot}</p>
                            <p className="flex justify-between"><strong>Consultation Fee:</strong> ₹500</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Button - Sticks at the Bottom */}
                <button
                    className="w-full p-3 bg-blue-500 text-white rounded mt-4"
                    onClick={() => navigate("/Apayment")}
                >
                    Proceed to Payment
                </button>
            </div>
        </div >
    );
};

export default AppointmentDetails;
