import { pngAsset } from "../assets/asset"
import JobList from "../components/displayJobs/JobList"
import HandleJob from "../components/HandleJob"
import Navbar from "../components/Navbar"

const jobs = [
  {
    img: pngAsset.CompanyDetail.image1
  },
  {
    img: pngAsset.CompanyDetail.image4
  },
]

const AppliedJob = () => {
  return (
    <>
      <Navbar />
      <div className="">
        <HandleJob selectedJob={'applied'} />
        <JobList jobs={jobs} />
      </div>
    </>
  )
}

export default AppliedJob