import { pngAsset } from "../../assets/asset";

const CompanyDetail = () => {
  return (
    <div className="bg-white w-full rounded-md p-7 mb-7 flex justify-between max-lg:flex-wrap">
      <div className="flex flex-col max-lg:mb-5">
        <div className="flex mb-7 max-lg:flex-wrap">
          <img className="object-contain mr-7" alt="company_logo" src={pngAsset.CompanyDetail.image1} />
          <div className="flex flex-col py-5">
            <h1 className="text-4xl font-bold mb-3.5">Architectural Designer</h1>
            <p className="text-xl font-normal mb-2.5">Black Mountain Architecture</p>
            <span className="text-lg font-medium">Posted 13/01/2023</span>
          </div>
        </div>
        <div className="flex max-lg:flex-wrap">
          <span className="px-5 py-1.5 bg-[#0F1521] text-white text-center font-semibold rounded-3xl mr-4 max-lg:mb-5">Architecture</span>
          <span className="px-5 py-1.5 bg-[#E7FECC] text-center font-semibold rounded-3xl mr-4 max-lg:mb-5">Freelance</span>
          <span className="px-5 py-1.5 bg-[#CCE7FE] text-center font-semibold rounded-3xl max-lg:mb-5">Long-term</span>
        </div>
      </div>

      <div className="flex flex-col max-lg:flex-wrap max-lg:flex-row-reverse max-lg:items-center max-lg:justify-between max-lg:w-full">
        <div className="flex items-center justify-end mb-8 max-lg:mb-5">
          <img className="object-contain w-6 mr-5 cursor-pointer" alt="share_img" src={pngAsset.CompanyDetail.share}/>
          <img className="object-contain w-6 cursor-pointer" alt="bookmark" src={pngAsset.CompanyDetail.bookmark} />
        </div>
        <div className="mb-7 py-2.5 px-3 bg-[#BBFEB5] rounded-md max-lg:mb-5">
          <p className="text-xl font-semibold">Status: Accepting Applications</p>
        </div>
        <div className="flex items-center justify-end max-lg:mb-5">
          <button className="pt-2 pb-2.5 px-8 rounded-3xl bg-gradient-to-r from-[#F26A5D] to-[#F39469] focus:outline-none text-white text-xl text-center font-semibold hover:from-white hover:to-white hover:border-2 hover:border-[#F26A5D] hover:text-[#F26A5D]">
            Apply to Archslate
          </button>
        </div>
      </div>
    </div>
  )
}

export default CompanyDetail;
