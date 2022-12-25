import { Link } from "react-router-dom"
import { pngAsset } from "../assets/asset"

const BackArrow = ({ text }) => {
  return (
    <div className="flex items-center cursor-pointer mb-5 mt-7">
      <Link to="/" className="flex items-center">
        <img className="object-contain w-7 mr-2.5" alt="back_arrow" src={pngAsset.global.back_arrow}/>
        <span className="text-xl font-bold">{text}</span>
      </Link>
    </div>
  )
}

export default BackArrow