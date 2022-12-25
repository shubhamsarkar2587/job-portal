import { pngAsset } from "../assets/asset"
import JobList from "../components/displayJobs/JobList"
import HandleJob from "../components/HandleJob"
import JobInterest from "../components/JobInterest"
import Navbar from "../components/Navbar"

const jobs = [
  {
    img: pngAsset.CompanyDetail.image1
  },
  {
    img: pngAsset.CompanyDetail.image4
  },
]

const SearchJob = () => {
  return (
    <>
      <Navbar />
      <div className="">
        <HandleJob />
        <JobInterest />
        <JobList jobs={jobs} />
      </div>
    </>
  )
}

export default SearchJob