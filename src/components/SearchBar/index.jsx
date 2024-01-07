import React, { useState } from "react";

const SearchBar = (props) => {
   const[jobCriteria, setJobCriteria] = useState({
      title: "",
      location: "",
      experience: "",
      type: "",
   })

   const handleChange = (e) => {
      setJobCriteria((prevState) => ({
         ...prevState,
         [e.target.name] : e.target.value
      }))
   }
   
   const search = async() => {
        await props.fetchJobsCustom(jobCriteria);
   }

  return (
    <div className="flex gap-4 my-10 justify-center px-10">
         <select onChange={handleChange} name = "title" value={jobCriteria.title} className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md outline-none">
            <option value="" selected hidden disabled>Job Role</option>
            <option value="iOS Developer" className="bg-gray-800 text-white">iOS Developer</option>
            <option value="Frontend Developer" className="bg-gray-800 text-white">Frontend Developer</option>
            <option value="Backend Developer" className="bg-gray-800 text-white">Backend Developer</option>
            <option value="Android Developer" className="bg-gray-800 text-white">Android Developer</option>
            <option value="Developer Advocate" className="bg-gray-800 text-white">Developer Advocate</option>
            <option value="Full-Satck Advocate" className="bg-gray-800 text-white">Full-Satck Advocate</option>
         </select>
         <select onChange={handleChange} name = "type" value={jobCriteria.type} className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md outline-none">
            <option value="" selected hidden disabled>Job Type</option>
            <option value="Full Time" className="bg-gray-800 text-white">Full Time</option>
            <option value="Part Time" className="bg-gray-800 text-white">Part Time</option>
            <option value="Contract" className="bg-gray-800 text-white">Contract</option>
         </select>
         <select onChange={handleChange} name = "location" value={jobCriteria.location} className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md outline-none">
            <option value="" selected hidden disabled>Location</option>
            <option value="Remote" className="bg-gray-800 text-white">Remote</option>
            <option value="In-Office" className="bg-gray-800 text-white">In-Office</option>
            <option value="Hybrid" className="bg-gray-800 text-white">Hybrid</option>
         </select>
         <select onChange={handleChange} name = "experience" value={jobCriteria.experience} className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md outline-none">
            <option value="" selected hidden disabled>Experience</option>
            <option value="Fresher"  className="bg-gray-800 text-white">Fresher</option>
            <option value="Junior Level"  className="bg-gray-800 text-white">Junior Level</option>
            <option value="Mid Level"  className="bg-gray-800 text-white">Mid Level</option>
            <option value="Senior Level"  className="bg-gray-800 text-white">Senior Level</option>
         </select>
         <button onClick={search} className="w-64 bg-blue-500 text-white font-bold py-3 rounded-md outline-none">Search</button>
    </div>
  )
}
export default SearchBar;