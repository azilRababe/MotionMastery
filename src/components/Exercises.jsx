import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
// import { Box, Stack, Typography } from "@mui/material";

// import { exerciseOptions, fetchData } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";
import Loader from "./Loader";
import exercisesData from "../data/gifs.json";
const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(10);

  useEffect(() => {
    // Filter exercises by bodyPart (targetMuscle in JSON)
    let filteredExercises = [];
    if (bodyPart === "all") {
      filteredExercises = exercisesData;
    } else {
      filteredExercises = exercisesData.filter(
        (exercise) => exercise.targetMuscle === bodyPart
      );
    }
    setExercises(filteredExercises);
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

  if (!currentExercises.length) return <Loader />;

  return (
    <div id="exercises" className="mt-5">
      <div className="text-2xl font-bold mb-5 text-center">Showing Results</div>
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
            sx={{
              "& .MuiPaginationItem-root": {
                color: "#fff",
                borderColor: "#fff",
              },
              "& .Mui-selected": {
                backgroundColor: "#fff",
                color: "#FF2625",
              },
            }}
            color="standard"
            shape="rounded"
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
