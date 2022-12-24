import BackArrow from "../components/BackArrow"
import CompanyDetail from "../components/jobDetails/CompanyDetail"
import Navbar from "../components/Navbar"

const JobDetail = () => {
  return (
    <>
      <Navbar />
      <div className="w-3/4 m-auto">
        <BackArrow text={'Back to Jobs'} />
        <CompanyDetail />
      </div>
    </>
  )
}

export default JobDetail