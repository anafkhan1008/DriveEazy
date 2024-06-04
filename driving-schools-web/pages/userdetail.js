import { useSession, signIn, signOut } from "next-auth/react";
import axios from 'axios';
import { useEffect, useState } from 'react'; // Import useState
import baseurl from "../config";
import Image from "next/image";
import personIcon from '../public/img/person_icon.png'; // Import default person icon
import Navbar from "../components/navbar";
import AddSchool from "../components/addschool";


export default function UserDetailPage() {
  const { data: session } = useSession(); // Access user session data
  const [drivingSchoolData, setDrivingSchoolData] = useState(null); // State to store driving school data
  const [showAddSchoolModal, setShowAddSchoolModal] = useState(false); // State to control the visibility of the modal

  useEffect(() => {
    if (session) {
      const userId = session.user.id; 
    }
  }, [session]); 
  
  const handleAddSchoolClick = () => {
    setShowAddSchoolModal(true); 
  };

  return (
    <>
      <Navbar />

      <div className="py-4 flex flex-col items-center">
        <div>
          <h2>{session ? session.user.email : "No user found"}</h2>
          <h2>{session ? session.user.name : ""}</h2>
        </div>
        <button onClick={handleAddSchoolClick} className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5" >
          Add School
        </button>
        {showAddSchoolModal && <AddSchool onClose={() => setShowAddSchoolModal(false)} />}
      </div>
    </>
  );
}

