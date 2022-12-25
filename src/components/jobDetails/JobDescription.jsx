import { svgAsset } from "../../assets/asset"

const JobDescription = () => {
  return (
    <div className="col-span-3 rounded-md bg-white py-10 px-5 lg:px-20 ">
      <div className="mb-5">
        <h6 className="text-lg font-semibold mb-2.5">About this role</h6>
        <p className="font-medium text-slate-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque error sapiente ex, dolore magni architecto quibusdam aspernatur in iste recusandae? Laborum iure dolorum, sequi architecto quam provident, minus aliquid molestiae, voluptatibus incidunt aliquam aut repellendus?</p>
      </div>

      <div className="mb-7">
        <h6 className="text-lg font-semibold mb-2.5">Responsibilities</h6>
        <ul className="list-disc list-inside font-medium text-slate-600">
          <li>Lorem, ipsum dolor sit amet consectetur </li>
          <li>Lorem, ipsum dolor sit amet consectetur </li>
          <li>Lorem, ipsum dolor sit amet consectetur </li>
          <li>Lorem, ipsum dolor sit amet consectetur </li>
        </ul>
      </div>

      <div className="mb-7">
        <h6 className="text-lg font-semibold mb-2.5">Skills</h6>
        <div className="mb-2.5">
          <span>Required</span>
          <ul className="list-disc list-inside font-medium text-slate-600 pl-2.5">
            <li>Lorem, ipsum  </li>
            <li>Lorem, ipsum  </li>
            <li>Lorem, ipsum  </li>
          </ul>
        </div>

        <div>
          <span>Bonus</span>
          <ul className="list-disc list-inside font-medium text-slate-600 pl-2.5">
            <li>Lorem, ipsum  </li>
            <li>Lorem, ipsum  </li>
            <li>Lorem, ipsum  </li>
          </ul>
        </div>
      </div>

      <div className="mb-7">
        <h6 className="text-lg font-semibold mb-2.5">Qualifications</h6>
        <ul className="list-disc list-inside font-medium text-slate-600">
          <li>Lorem, ipsum dolor sit amet consectetur </li>
          <li>Lorem, ipsum dolor sit amet consectetur </li>
          <li>Lorem, ipsum dolor sit amet consectetur </li>
          <li>Lorem, ipsum dolor sit amet consectetur </li>
        </ul>
      </div>

      <div className="mb-7">
        <h6 className="text-lg font-semibold mb-2.5">Rate</h6>
        <ul className="list-disc list-inside font-medium text-slate-600">
          <li>if available</li>
        </ul>
      </div>

      <div className="mb-7">
        <h6 className="text-lg font-semibold mb-2.5">Time Estimate</h6>
        <ul className="list-disc list-inside font-medium text-slate-600">
          <li>if applicable</li>
        </ul>
      </div>

      <div className="mb-7">
        <h6 className="text-lg font-semibold mb-2.5">Work Authorization</h6>
        <ul className="list-disc list-inside font-medium text-slate-600">
          <li>tbd</li>
        </ul>
      </div>

      <div className="mb-10">
        <h6 className="text-lg font-semibold mb-2.5">About the Company</h6>
        <p className="font-medium text-slate-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </div>

      <div className="flex flex-wrap items-center mb-5">
        <button className="pt-2 pb-2.5 px-8 mr-5 mb-5 rounded-3xl bg-gradient-to-r from-[#F26A5D] to-[#F39469] focus:outline-none text-white text-xl text-center font-semibold ">
          Apply to Archslate
        </button>

        <button className="flex items-center pt-2 pb-2.5 px-7 mr-5 mb-5 rounded-3xl bg-[#0F1521] focus:outline-none text-white text-xl text-center font-semibold">
          <img className="w-6 mr-2.5" src={svgAsset.jobOverview.star} alt="star_img" ></img>
          <span className="">Save</span>
        </button>

        <button className="flex items-center pt-2 pb-2.5 px-7 mr-5 mb-5 rounded-3xl bg-[#0F1521] focus:outline-none text-white text-xl text-center font-semibold">
          <img className="w-6 mr-2.5" src={svgAsset.jobOverview.share} alt="star_img" ></img>
          <span className="">Share & Refer</span>
        </button>
      </div>

    </div>
  )
}

export default JobDescription