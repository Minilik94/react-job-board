import { useState } from "react";
import { JOBS } from "../shared/types";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function JobListing({ job }: { job: JOBS }) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  let description = job.description;

  if (!showFullDescription) {
    description = description.substring(0, 90) + "...";
  }

  return (
    <div key={job.id} className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl shadow-lg relative p-4 hover:shadow-xl transition-shadow duration-300">
      <div className="mb-6">
        <div className="text-gray-400 my-2">{job.type}</div>
        <h3 className="text-2xl font-bold text-green-400">{job.title}</h3>
      </div>

      <div className="mb-5 text-gray-300">{description}</div>
      <button
        onClick={() => setShowFullDescription((prev) => !prev)}
        className="text-blue-500 mb-5 hover:text-blue-400 transition-colors duration-200"
      >
        {showFullDescription ? "Less" : "More"}
      </button>

      <h3 className="text-yellow-400 mb-2">{job.salary}</h3>

      <div className="border-t border-gray-700 mb-5"></div>

      <div className="flex flex-col lg:flex-row justify-between mb-4">
        <div className="text-orange-500 mb-3">
          <FaMapMarkerAlt className="inline text-lg mb-1 mr-1" />
          {job.location}
        </div>
        <Link
          to={`/jobs/${job.id}`}
          className="h-[36px] bg-green-500 hover:bg-green-400 text-white px-4 py-2 rounded-lg text-center text-sm transition-transform transform hover:scale-105"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}

export default JobListing;