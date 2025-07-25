import { Link } from "react-router-dom";

const ExerciseCard = ({ exercise }) => (
  <Link
    // to={`/exercise/${exercise.id}`}
    to={"#"}
    className="flex flex-col items-center border-t-4 border-red-500 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300  text-center hover:scale-105 cursor-pointer"
  >
    <img
      src={exercise.src}
      alt={exercise.title}
      loading="eager"
      className="w-full h-80 object-cover"
    />

    <div className="flex flex-wrap gap-2 justify-center mt-4 px-4">
      <span className="bg-[#FFA9A9] text-white text-xs font-semibold px-3 py-1 rounded-full uppercase">
        {exercise.targetMuscle}
      </span>
      <span className="bg-[#FCC757] text-white text-xs font-semibold px-3 py-1 rounded-full uppercase">
        {exercise.bodyPart || exercise.category || "General"}
      </span>
    </div>

    <h3 className="mt-4 mb-2 text-center text-base font-semibold text-gray-800 px-4">
      {exercise.title}
    </h3>
  </Link>
);

export default ExerciseCard;
