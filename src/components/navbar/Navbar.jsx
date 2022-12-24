import { pngAsset } from "../../assets/asset";

const Navbar = () => {
  return (
    <div className="py-2.5 px-6 mb-5 flex items-center justify-between bg-white shadow-sm">
      <div className="flex">
        <img className="mr-3 object-contain cursor-pointer" alt="logo" src={pngAsset.navbar.logo} />
        <img className="object-contain cursor-pointer " alt="company_name" src={pngAsset.navbar.archslate} />
      </div>
      <div className="flex item-center justify-between ">
        <div className="flex flex-col items-center mx-5 cursor-pointer">
          <img className="object-contain w-7" alt="candidates_img" src={pngAsset.navbar.candidate} />
          <span className="text-xs font-semibold capitalize">candidates</span>
        </div>
        <div className="flex flex-col items-center mx-5 cursor-pointer">
          <img className="object-contain w-7" alt="candidates_img" src={pngAsset.navbar.company} />
          <span className="text-xs font-semibold capitalize">companies</span>
        </div>
        <div className="flex flex-col items-center mx-5 cursor-pointer">
          <img className="object-contain w-7" alt="candidates_img" src={pngAsset.navbar.job} />
          <span className="text-xs font-semibold capitalize">jobs</span>
        </div>
        <div className="flex flex-col items-center mx-5 cursor-pointer">
          <img className="object-contain w-7" alt="candidates_img" src={pngAsset.navbar.notification} />
          <span className="text-xs font-semibold capitalize">notifications</span>
        </div>
        <div className="flex flex-col items-center mx-5 cursor-pointer">
          <img className="object-contain w-7" alt="candidates_img" src={pngAsset.navbar.user} />
          <span className="text-xs font-semibold capitalize">user name</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar