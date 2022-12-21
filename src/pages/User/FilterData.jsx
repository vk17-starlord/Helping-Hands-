import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import { getFilteredJobs } from "../../api/JobApi";

function FilterData({ setjobs }) {
  const modeOptions = ["Work From Home", "Offline", "Hybrid"];
  const whoCanApply = [
    "Locomotor Disability",
    "Visual Impairment",
    "Hearing Impairment",
    "Intellectual Disability",
    "Multiple Disabilities",
  ];


  const [salary, setsalary] = useState(1000);
  const [mode, setmode] = useState(null);
  const [disability, setdisability] = useState(null);

  const addMode = (ev) => {
    const val = ev.target.value;
    console.log(val);
    setmode(val);
  };

  const addDisability = (ev) => {
    const val = ev.target.value;
    setdisability(val);
  };

  const applyFilter =async () => {
    if (disability && mode && salary >=0 ) {
      console.log(salary, disability, mode);
      const params = {
        "j_salary[gt]":salary,
        "j_whocanapply[]":disability.toString(),
        "j_mode":mode
      };
      console.log(params)
      const res=await getFilteredJobs(params)
      console.log(res.data)
      setjobs(res.data)
    } else {
      toast("Please Select All Valid Filter Options");
    }
  };

  return (
    <div className="w-full">
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <h1 className="text-[16px] text-left  font-medium font-Poppins">
        Type of Job Mode
      </h1>

      <div class="flex flex-col py-2.5">
        {modeOptions.map((ele) => {
          return (
            <div class="flex items-center mr-4 ">
              <input
                onChange={(ev) => {
                  addMode(ev);
                }}
                id="mode-option"
                type="radio"
                value={ele}
                name="mode-option-group"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
              />
              <label
                for="mode-option"
                class="ml-2 text-sm font-medium text-gray-900 my-1"
              >
                {ele}
              </label>
            </div>
          );
        })}
      </div>

      <h1 className="text-[16px] text-left  font-medium font-Poppins">
        Disability
      </h1>
      <div class="flex flex-col py-2.5">
        {whoCanApply.map((ele) => {
          return (
            <div class="flex items-center mr-4 ">
              <input
                onChange={(ev) => {
                  addDisability(ev);
                }}
                id="disability"
                type="radio"
                value={ele}
                name="disability-group"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
              />
              <label
                for="disability"
                class="ml-2 text-sm font-medium text-gray-900 my-1"
              >
                {ele}
              </label>
            </div>
          );
        })}
      </div>

      <div class="flex justify-center items-start flex-col">
        <h1 className="text-[16px] my-2 text-left  font-medium font-Poppins">
          Minimum Salary
        </h1>
        <input
          value={salary}
          onChange={(ev) => setsalary(ev.target.value)}
          type="text"
          id="default-input"
          class=" border border-gray-300 px-5 text-gray-900 w-full py-2.5 bg-white text-sm rounded-lg "
        />
      </div>
      {/* 
    <div class="flex justify-center items-start flex-col">
            
            <h1 className="text-[16px] my-2 text-left  font-medium font-Poppins">
           Location
          </h1>
        <input type="text" id="default-input" class=" border border-gray-300 text-gray-900 w-full py-2.5 bg-white text-sm rounded-lg "/>
        
        </div> */}

      <button
        onClick={() => {
          applyFilter();
        }}
        className="my-4 py-2.5 rounded-md px-5 w-full bg-primary text-white "
      >
        Apply Filter
      </button>
    </div>
  );
}

export default FilterData;
