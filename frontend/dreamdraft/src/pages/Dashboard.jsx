import React, { useEffect, useState } from "react";
import axios from "../config/axiosConfig";
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const [message, setMessage] = useState("");
  const navigate = useNavigate()

  const handlecreateNew = (path) => {
    navigate('/BuildingPlanEditor'); // Navigate to the specified path
  };

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/dashboard/"
        );
        setMessage(response.data.message);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchDashboardData();
  }, []);
  return (
    <section className="flex">
      <aside className="min-h-screen min-w-[300px] bg-inherit border-r-2 border-gray-200 p-5 flex flex-col justify-between">
        <div className="flex flex-col gap-3 p-5 ml-4 text-gray-800 font-semibold">
          <div className="w-28 h-28 rounded-full bg-slate-200 flex justify-center items-center mb-5">
            DP
          </div>
          <h3 className="px-3 py-1 text-xl">User Name</h3>
          <p className="px-3 py-1 bg-slate-50 rounded-md text-gray-700 cursor-pointer ">Profile</p>
          <p className="px-3 py-1 bg-slate-50 rounded-md text-gray-700 cursor-pointer">Settings</p>
          <hr />
          <div className="flex flex-col gap-3">
            <p className="px-3 py-1 bg-slate-50 rounded-md text-gray-700 cursor-pointer">Create New</p>
            <p className="px-3 py-1 bg-slate-50 rounded-md text-gray-700 cursor-pointer">Load Sketch</p>
            <p className="px-3 py-1 bg-slate-50 rounded-md text-gray-700 cursor-pointer">Connect Teams</p>
          </div>
        </div>
        <p className="font-semibold text-gray-700 pl-10">Logout</p>
      </aside>
      <main className="p-2 bg-slate-100 flex-grow">
        <h2 className="text-xl font-serif font-semibold text-black/80 my-5">
          Welcome
        </h2>
        <div className=" flex gap-4 w-full p-5 border-b-2">
          <div className="h-52 w-40 bg-slate-50 shadow-md rounded shadow-slate-200 flex flex-col justify-center items-center text-gray-600"
            onClick={()=>handlecreateNew()}
          >
            <p className="text-4xl text-gray-600">+</p>
            <p>Create new</p>
          </div>
          <div className="h-52 w-40 bg-slate-200 rounded shadow-md shadow-slate-200 flex flex-col justify-center items-center text-gray-600">
            <p>Existing Templates</p>
          </div>
          <div className="h-52 w-40 bg-slate-200 rounded shadow-md shadow-slate-200 flex flex-col justify-center items-center text-gray-600">
            <p>Existing Templates</p>
          </div>
          <div className="h-52 w-40 bg-slate-200 rounded shadow-md shadow-slate-200 flex flex-col justify-center items-center text-gray-600">
            <p>Existing Templates</p>
          </div>
        </div>
      </main>
    </section>
  );
}
