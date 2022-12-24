import { pngAsset } from "../assets/asset"

const BackArrow = ({ text }) => {
  return (
    <div className="flex items-center cursor-pointer mb-5">
      <img className="object-contain w-7 mr-2.5" alt="back_arrow" src={pngAsset.global.back_arrow}/>
      <span className="text-xl font-bold">{text}</span>
    </div>
  )
}

export default BackArrow