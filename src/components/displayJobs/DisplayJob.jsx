import React from 'react';
import { useNavigate } from "react-router-dom";
import { pngAsset } from '../../assets/asset'

const DisplayJob = ({ jobDetail }) => {
  const navigate = useNavigate();

  const handleApply = () => {
    navigate('/job-details');
  }

  return (
    <div className="bg-white w-full rounded-md p-7 my-4 flex justify-between md:w-4/5 xl:w-3/4 m-auto max-lg:flex-wrap">
      <div className="flex flex-col max-md:items-center ">
        <div className="flex mb-7 max-md:flex-wrap  ">
          <img className="object-contain mr-7 max-md:mb-5" alt="company_logo" src={jobDetail.img} />
          <div className="flex flex-col ">
            <div className="flex max-md:flex-wrap mb-1.5">
              <span className="px-4 py-1 bg-[#0F1521] text-white text-center font-semibold rounded-3xl mr-2.5 max-md:mb-2.5">Architecture</span>
              <span className="px-4 py-1 bg-[#E7FECC] text-center font-semibold rounded-3xl mr-2.5 max-md:mb-2.5">Freelance</span>
              <span className="px-4 py-1 bg-[#CCE7FE] text-center font-semibold rounded-3xl max-md:mb-2.5">Long-term</span>
            </div>
            <h1 className="text-2xl font-bold">Architectural Designer</h1>
            <div className="font-semibold mb-1.5 flex flex-wrap items-center">
              <span>Black Mountain Architecture </span>
              <span className="text-gray-700"> | Mohali,Punjab | $50-$60/hour</span>
            </div>
            <span className="font-semibold mb-1">Skill Requirements</span>
            <div className="flex max-lg:flex-wrap mb-1.5">
              <span className="px-4 py-1 bg-[#0F1521] text-white text-center font-semibold rounded-3xl mr-2.5 ">Rhino</span>
              <span className="px-4 py-1 bg-[#0F1521] text-white text-center font-semibold rounded-3xl mr-2.5 ">Rhino</span>
              <span className="px-4 py-1 bg-[#0F1521] text-white text-center font-semibold rounded-3xl mr-2.5 ">Rhino</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col max-lg:flex-wrap max-lg:flex-row-reverse max-lg:items-center max-lg:justify-between max-lg:w-full">
        <div className="flex items-center justify-end mb-8 max-lg:mb-5">
          <img className="object-contain w-6 mr-5 cursor-pointer" alt="share_img" src={pngAsset.CompanyDetail.share} />
          <img className="object-contain w-6 cursor-pointer" alt="bookmark" src={pngAsset.CompanyDetail.bookmark} />
        </div>
        <div className="mb-7">
          <p className="font-semibold text-gray-700">Posted: 08/12/2022</p>
        </div>
        <div className="flex items-center justify-end max-lg:mb-5">
          <button
            className="py-1.5 px-6 rounded-3xl bg-gradient-to-r from-[#F26A5D] to-[#F39469] focus:outline-none text-white text-xl text-center font-semibold hover:from-white hover:to-white hover:border-2 hover:border-[#F26A5D] hover:text-[#F26A5D]"
            onClick={() => handleApply()}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  )
}

export default DisplayJob