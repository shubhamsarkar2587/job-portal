import { pngAsset } from "../../assets/asset"

const JobOverview = () => {
  return (
    <div className="w-full grid grid-cols-4 gap-5	mb-7">

      <div className="bg-white p-5 rounded-md">
        <div className="flex items-center mb-5">
          <img className="mr-4 object-contain w-8" alt="skills" src={pngAsset.jobOverview.skill} />
          <span className="text-lg font-medium">Software Skills</span>
        </div>
        <div className="flex flex-wrap justify-center">
          <span className="bg-black rounded-3xl text-white px-3 py-1 mb-2.5 mr-2.5">Tailwind Css</span>
          <span className="bg-black rounded-3xl text-white px-3 py-1 mb-2.5 mr-2.5">Sketchup</span>
          <span className="bg-black rounded-3xl text-white px-3 py-1 mb-2.5 mr-2.5">VectorWorks</span>
        </div>
      </div>

      <div className="bg-white p-5 rounded-md">
        <div className="flex items-center mb-5">
          <img className="mr-5 object-contain w-8" alt="skills" src={pngAsset.jobOverview.star} />
          <span className="text-lg font-medium">Experience</span>
        </div>
        <div className="flex flex-wrap justify-center">
          <span className="text-wrap text-3xl	text-center font-light">Associate <br></br> 3+ years</span>
        </div>
      </div>

      <div className="bg-white p-5 rounded-md">
        <div className="flex items-center mb-5">
          <img className="mr-5 object-contain w-8" alt="skills" src={pngAsset.jobOverview.rate} />
          <span className="text-lg font-medium">Software Skills</span>
        </div>
        <div className="flex flex-wrap justify-center">
          <span className="text-wrap text-3xl	text-center font-light">$55 - $66 <br></br> / hour</span>
        </div>
      </div>

      <div className="bg-white p-5 rounded-md">
        <div className="flex items-center mb-5">
          <img className="mr-5 object-contain w-8" alt="skills" src={pngAsset.jobOverview.location} />
          <span className="text-lg font-medium">Software Skills</span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span className="text-wrap text-2xl	text-center mb-5 font-light">sahibzada mohali Punjab, India</span>
          <span className="bg-[#FCCCEC] rounded-3xl px-3 py-1 mb-2.5 mr-2.5 font-semibold w-fit text-center">On-Site</span>
        </div>
      </div>

    </div>
  )
}

export default JobOverview