import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { Box } from "@mui/material";

// import { exerciseOptions, fetchData, youtubeOptions } from "../utils/fetchData";
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";
import exerciseData from "../data/gifs.json";
const ExerciseDetail = () => {
  const { id } = useParams();
  const [exerciseDetail, setExerciseDetail] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Find the exercise by id from local JSON
    const detail = exerciseData.find((exercise) => exercise.id === id);
    setExerciseDetail(detail);
  }, [id]);

  if (!exerciseDetail) return <div>No Data</div>;

  return (
    <div sx={{ mt: { lg: "96px", xs: "60px" } }}>
      <Detail exerciseDetail={exerciseDetail} />
      {/* <ExerciseVideos
        exerciseVideos={exerciseDetail.src}
        name={exerciseDetail.title}
      /> */}
      {/* <SimilarExercises
        targetMuscleExercises={exerciseDetail.name}
        equipmentExercises={exerciseDetail.name}
      /> */}
    </div>
  );
};

export default ExerciseDetail;
