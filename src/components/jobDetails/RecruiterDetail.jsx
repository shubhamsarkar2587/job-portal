import { pngAsset, svgAsset } from "../../assets/asset"

const RecruiterDetail = () => {
  return (
    <div className="bg-white py-10 px-5 col-span-1 rounded-md  place-self-start w-full">
      <h6 className="text-lg font-semibold mb-2.5">Job Poster</h6>
      <div className="flex items-center mb-5">
        <img className="object-contain mr-2.5" src={pngAsset.recruiterDetail.hr_image} alt="recruiter_img"></img>
        <div className="flex flex-col">
          <h6 className="capitalize text-lg">John Banner</h6>
          <span className="text-sm font-semibold capitalize">project manager</span>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button className="flex items-center px-5 py-1.5 bg-[#0F1521] text-white text-center font-semibold rounded-3xl mr-4">
          <img className="w-6 mr-2.5" src={svgAsset.recruiterDetail.mail} alt="message img" />
          <span className="mb-0.5">Message</span>
        </button>
      </div>
    </div>
  )
}

export default RecruiterDetail