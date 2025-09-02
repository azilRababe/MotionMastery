import { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";

import ExerciseCard from "./ExerciseCard";
import Loader from "./Loader";
import exercisesData from "../data/exercises_data.json";
import { fetchExerciseImage } from "../utils/fetchData";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(10);
  const [imageUrl, setImageUrl] = useState("/placeholder.jpg");

  useEffect(() => {
    let filteredExercises = [];
    if (bodyPart === "all") {
      filteredExercises = exercisesData;
    } else {
      filteredExercises = exercisesData.filter(
        (exercise) => exercise.body_part === bodyPart
      );
    }
  }, [bodyPart, setExercises]);

  // Pagination
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (event, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  if (!currentExercises.length) {
    return (
      <div className="flex flex-col items-center justify-center min-h-80 text-center  p-6 mt-10 mx-4">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">
          No Exercises Found
        </h3>
        <p className="text-gray-600 text-base max-w-md">
          It looks like this combination doesn't match any exercises. Try
          adjusting your filters or search with different muscle groups or
          equipment.
        </p>
      </div>
    );
  }

  return (
    <div id="exercises" className="mt-5">
      <div className="w-full flex flex-col items-center justify-center my-10 px-4">
        <h2 className="text-3xl font-bold text-[#ff5722] mb-2">
          Exercise Results
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl text-center">
          Browse exercises based on your current filters. You can update the
          filters or scroll down to explore more workouts tailored to your
          goals.
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-4">
        {currentExercises.map((exercise, idx) => (
          <ExerciseCard key={idx} exercise={exercise} />
        ))}
      </div>
      <div sx={{ mt: { lg: "114px", xs: "70px" } }} alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            variant="outlined"
            className="flex justify-center mt-10 pb-20"
            color="standard"
            // shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </div>
    </div>
  );
};

export default Exercises;
