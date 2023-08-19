"use client";
import React, { useState } from "react";
import useContract from "@/hooks/useBlock";

const DocumentPage = ({ currentMedication, updateCurrentMedication }) => {
  const [medicines, setMedicines] = useState([]);
  const [medicineName, setMedicineName] = useState("");
  const [quantity, setQuantity] = useState("");
    
  const [bpUpper, setBpUpper] = useState("");
  const [bpLower, setBpLower] = useState("");

  const [temperatureValue, setTemperatureValue] = useState("");

  const contractInstance = useContract();

  const handleAddMedicine = () => {
    if (medicineName && quantity !== "") {
      const newMedicine = [medicineName, parseInt(quantity)];
      const updatedMedicines = [...medicines, newMedicine];
      setMedicines(updatedMedicines);
      updateCurrentMedication(updatedMedicines);
      setMedicineName("");
      setQuantity("");
    }
  };
  const handleRemoveMedicine = (index) => {
    const updatedMedicines = medicines.filter((_, i) => i !== index);
    setMedicines(updatedMedicines);
    updateCurrentMedication(updatedMedicines);
  };

  const handleSubmit = () => {
    //to be written
  };
  return (
    <div>
      <div
        id="container"
        className="min-h-screen flex items-center justify-center bg-gray-100"
      >
        <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-2/3 lg:w-1/2">
          <h1 className="text-2xl font-semibold mb-4">Update Details</h1>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Blood Pressure
            </label>
            <div className="flex space-x-2 mb-4">
              <input
                type="number"
                placeholder="Upper BP (mmHg)"
                value={bpUpper}
                onChange={(e) => setBpUpper(e.target.value)}
                className="border p-2 rounded"
              />
              <input
                type="number"
                placeholder="Lower BP (mmHg)"
                value={bpLower}
                onChange={(e) => setBpLower(e.target.value)}
                className="border p-2 rounded"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Body Temperature
            </label>
            <div className="flex space-x-2 mb-4">
              <input
                type="number"
                step="0.1"
                placeholder="Temperature (°C)"
                value={temperatureValue}
                onChange={(e) => setTemperatureValue(e.target.value)}
                className="border p-2 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Add Medicines
              </label>
              <div className="flex space-x-2 mb-4">
                <input
                  type="text"
                  placeholder="Medicine name"
                  value={medicineName}
                  onChange={(e) => setMedicineName(e.target.value)}
                  className="border p-2 rounded"
                />
                <input
                  type="number"
                  placeholder="Quantity (mg)"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="border p-2 rounded"
                />
                <button
                  onClick={handleAddMedicine}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Add Medicine
                </button>
              </div>
              <div>
                {medicines.map((medicine, index) => (
                  <div key={index} className="flex items-center space-x-2 mb-2">
                    <button className="border p-2 rounded">
                      {`${medicine[0]} (${medicine[1]} mg)`}
                    </button>
                    <button
                      onClick={() => handleRemoveMedicine(index)}
                      className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <button
            onClick={handleSubmit}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default DocumentPage;
