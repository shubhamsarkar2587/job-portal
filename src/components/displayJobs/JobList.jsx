import DisplayJob from "./DisplayJob"

const JobList = ({ jobs }) => {
  return (
    <div>
      {
        jobs.map((el,index) => (
          <DisplayJob jobDetail={el} key={index} />
        ))
      }
    </div>
  )
}

export default JobList