"use client"
import React, { useEffect, useState } from 'react';
import useContract from '@/hooks/useBlock';

const UserDashboard = () => {
  const contractInstance = useContract();
  const [userDetails, setUserDetails] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    dob: '',
    aadharNumber: ''
  });

  const getDetails = async () => {
    if (contractInstance) {
      try {
        const response = await contractInstance.methods.getPatientDetailsByPatient().call();
        setUserDetails({
          firstName: response.firstName,
          lastName: response.lastName,
          gender: response.gender,
          dob: response.dob,
          aadharNumber: response.aadharNumber
        });
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    }
  };

  useEffect(() => {
    if (contractInstance) {
      getDetails();
    }
  }, [contractInstance]);

  return (
    <div id="container" className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-semibold mb-4">User Dashboard</h2>
        <div>
          <p className="mb-2">Name: {userDetails.firstName} {userDetails.lastName}</p>
          <p className="mb-2">Gender: {userDetails.gender}</p>
          <p className="mb-2">Date of Birth: {userDetails.dob}</p>
          <p className="mb-2">Aadhar Card Number: {userDetails.aadharNumber}</p>
        </div>
        <div className="flex justify-center mt-6">
          <div className="mr-4">
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Button 1</button>
          </div>
          <div>
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Button 2</button>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <div className="mr-4">
            <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Button 3</button>
          </div>
          <div>
            <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Button 4</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
