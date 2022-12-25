import React from 'react';
import { useNavigate } from "react-router-dom";


const HandleJob = ({ selectedJob }) => {
  const navigate = useNavigate();

  const handleJobCategory = (jobPage) => {
    navigate(`/${jobPage}`);
  }

  return (
    <div className="w-full py-7 bg-white">
      <div className="md:w-3/5 m-auto md:px-20 flex justify-around">
        <div
          className="text-xl text-center font-semibold relative cursor-pointer"
          onClick={() => handleJobCategory('')}
        >
          <span className="text-[#0F1521] text-lg font-semibold">Search Jobs</span>
          {
            selectedJob === '' || selectedJob === undefined || selectedJob === 'search' ? (
              <span className="h-[2.5px] w-[120px] bottom-[-7px] left-[-11px] bg-[#212224] absolute"></span>
            )
            : null
          }
        </div>
        <div
          className="text-xl text-center font-semibold relative cursor-pointer"
          onClick={() => handleJobCategory('applied-job')}
        >
          <span className="text-[#0F1521] text-lg font-semibold">Applied</span>
          {
            selectedJob === 'applied' ? (
              <span className="h-[2.5px] w-[90px] bottom-[-7px] left-[-11px] bg-[#212224] absolute"></span>
            )
            : null
          }
        </div>
        <div
          className="text-xl text-center font-semibold relative cursor-pointer"
          onClick={() => handleJobCategory('save-job')}
        >
          <span className="text-[#0F1521] text-lg font-semibold">Saved Jobs</span>
          {
            selectedJob === 'save' ? (
              <span className="h-[2.5px] w-[120px] bottom-[-7px] left-[-11px] bg-[#212224] absolute"></span>
            )
            : null
          }
        </div>
      </div>
    </div>
  )
}

export default HandleJob;
