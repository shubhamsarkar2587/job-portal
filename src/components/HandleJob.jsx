import React from 'react'

const HandleJob = ({ selectedJob }) => {
  return (
    <div className="w-full py-8 bg-white">
      <div className="md:w-3/5 m-auto px-20 flex justify-around">
        <div className="text-xl text-center font-semibold relative cursor-pointer">
          <span className="text-[#0F1521]">Search Jobs</span>
          {
            selectedJob === '' || selectedJob === undefined || selectedJob === 'search' ? (
              <span className="h-[2.5px] w-[120px] bottom-[-7px] left-[-7px] bg-[#212224] absolute"></span>
            )
            : null
          }
        </div>
        <div className="text-xl text-center font-semibold relative cursor-pointer">
          <span className="text-[#0F1521]">Applied</span>
          {
            selectedJob === 'applied' ? (
              <span className="h-[2.5px] w-[90px] bottom-[-7px] left-[-7px] bg-[#212224] absolute"></span>
            )
            : null
          }
        </div>
        <div className="text-xl text-center font-semibold relative cursor-pointer">
          <span className="text-[#0F1521]">Saved Jobs</span>
          {
            selectedJob === 'save' ? (
              <span className="h-[2.5px] w-[120px] bottom-[-7px] left-[-7px] bg-[#212224] absolute"></span>
            )
            : null
          }
        </div>
      </div>
    </div>
  )
}

export default HandleJob;
