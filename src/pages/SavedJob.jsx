import { pngAsset } from "../assets/asset"
import JobList from "../components/displayJobs/JobList"
import HandleJob from "../components/HandleJob"
import Navbar from "../components/Navbar"

const jobs = [
  {
    img: pngAsset.CompanyDetail.image4
  },
  {
    img: pngAsset.CompanyDetail.image1
  }
]

const SavedJob = () => {
  return (
    <>
      <Navbar />
      <div className="">
        <HandleJob selectedJob={'saved'} />
        <JobList jobs={jobs} />
      </div>
    </>
  )
}

export default SavedJob