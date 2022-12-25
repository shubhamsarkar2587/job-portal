import BackArrow from "../components/BackArrow"
import CompanyDetail from "../components/jobDetails/CompanyDetail"
import JobDescription from "../components/jobDetails/JobDescription"
import JobOverview from "../components/jobDetails/JobOverview"
import RecruiterDetail from "../components/jobDetails/RecruiterDetail"
import Navbar from "../components/Navbar"

const JobDetail = () => {
  return (
    <>
      <Navbar />
      <div className="md:w-4/5 xl:w-3/4 m-auto">
        
        <BackArrow text={'Back to Jobs'} />
        <CompanyDetail />
        <JobOverview />
        <div className="grid lg:grid-cols-4 gap-5 mb-7">
          <JobDescription />
          <RecruiterDetail />
        </div>
      </div>
    </>
  )
}

export default JobDetail