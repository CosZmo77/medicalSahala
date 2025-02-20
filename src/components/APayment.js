import { useState } from "react";
import { FaArrowCircleLeft } from "react-icons/fa"; // Import back arrow icon
import { useNavigate } from "react-router-dom";

const Payment = () => {
        const navigate = useNavigate();
    
    const [billingName, setBillingName] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("");

    const isFormComplete = billingName && paymentMethod;

    return (
        <div className="max-w-md mx-auto  p-6   rounded-lg">
            <FaArrowCircleLeft
                className="text-xl cursor-pointer text-4xl absolute left-4 top-4 text-gray-600 hover:text-gray-800"
                onClick={() => navigate(-1)}
            />
            <h2 className="text-xl font-bold  text-center mb-4">Secure Your Payments</h2>
            <p className="mb-4 my-32 text-gray-600">Complete the transaction through our encrypted payment gateway.</p>

            <input
                type="text"
                placeholder="Billed To"
                className="w-full p-2 border rounded bg-blue-100 mb-2"
                onChange={(e) => setBillingName(e.target.value)}
            />

            <div className="flex gap-2 mb-4">
                {["Credit Card", "Bank Transfer", "UPI Payments"].map((method) => (
                    <button
                        key={method}
                        className={`p-2 border rounded w-1/3 ${paymentMethod === method ? "bg-blue-500 text-white" : "bg-gray-100"
                            }`}
                        onClick={() => setPaymentMethod(method)}
                    >
                        {method}
                    </button>
                ))}
            </div>

            <button className="w-full p-2 bg-gray-300 text-white rounded cursor-not-allowed" disabled>
                Cancel
            </button>

            <button
                className={`w-full p-2 mt-2 text-white rounded ${isFormComplete ? "bg-blue-500" : "bg-gray-300 cursor-not-allowed"
                    }`}
                disabled={!isFormComplete}
            >
                Proceed to Pay
            </button>
        </div>
    );
};

export default Payment;
