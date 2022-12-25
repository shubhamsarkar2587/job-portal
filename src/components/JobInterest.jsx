import { useState } from "react";

const jobInterest = [
  'Architecture',
  'Manager',
  'Computational Design',
  'Interior Architecture',
  'Exterior Architecture',
  'Urban Planning',
  'Residential Architecture',
  'Computational Design',
  'Interior Architecture'
];

const JobInterest = () => {
  const [fullTime, setFullTime] = useState(false);

  return (
    <div className="md:w-4/5 xl:w-3/4 m-auto flex flex-col items-center justify-center py-8">
      <div className="text-lg font-semibold mb-5">What types of jobs interest you?</div>
      <div className="flex items-center mb-7">
        <span className={`text-2xl font-bold subpixel-antialiased ${fullTime ? 'text-gray-300' : 'text-gray-700'}`}>Full Time</span>
        <label class="inline-flex relative items-center cursor-pointer mx-5">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={fullTime}
            readOnly
          />
          <div
            onClick={() => {setFullTime(!fullTime)}}
            className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#F27A62]"
          ></div>
        </label>
        <span className={`text-2xl font-bold subpixel-antialiased ${!fullTime ? 'text-gray-300' : 'text-gray-700'}`}>Freelance</span>
      </div>
      <div className="flex flex-wrap items-center justify-center lg:px-24">
        {
          jobInterest.map((el,index) => (
            <span key={`job_${index}`} className="px-5 py-1 mr-2.5 mb-2.5 border-2 border-[#0F1521] text-center font-semibold rounded-3xl">{el}</span>
          ))
        }
      </div>
    </div>
  )
}

export default JobInterest