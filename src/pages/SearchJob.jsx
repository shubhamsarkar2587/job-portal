import HandleJob from "../components/HandleJob"
import JobInterest from "../components/JobInterest"
import Navbar from "../components/Navbar"

const SearchJob = () => {
  return (
    <>
      <Navbar />
      <div className="">
        <HandleJob />
        <JobInterest />
      </div>
    </>
  )
}

export default SearchJob