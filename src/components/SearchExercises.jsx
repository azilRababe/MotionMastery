import React, { useEffect, useState, useMemo } from "react";
// import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";

// import { exerciseOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";
import exercisesData from "../data/gifs.json";
const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    // Get all unique targetMuscle values for the scrollbar
    const allBodyParts = [
      // "all",
      ...Array.from(new Set(exercisesData.map((item) => item.targetMuscle))),
    ];
    setBodyParts(allBodyParts);

    // Set all exercises initially
    setExercises(exercisesData);
  }, [setExercises]);

  const handleSearch = async () => {
    if (search) {
      const searchedExercises = exercisesData.filter(
        (item) =>
          item.targetMuscle.toLowerCase().includes(search) ||
          item.title.toLowerCase().includes(search)
      );

      window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });

      setSearch("");
      setExercises(searchedExercises);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="text-2xl font-bold mb-5 text-center text-red-500">
        Find the Perfect Move in Seconds
      </div>
      <p className="text-center text-gray-700 mb-5 max-w-2xl">
        Whether you're crushing leg day or just starting your fitness journey,
        our visual library of exercise GIFs has your back . Search by category
        and master every rep with perfect form.
      </p>
      <div className="flex justify-center items-center mb-5 max-w-xl w-full">
        <Autocomplete
          // onChange={(e) => setSearch(e.target.value.toLowerCase())}
          // onClick={handleSearch}
          disableClearable
          disabledItemsFocusable
          fullWidth
          options={bodyParts}
          // sx={{ width: "350" }}
          value={bodyPart}
          onChange={(event, newValue) => {
            setBodyPart(newValue);
            setExercises(
              newValue === "all"
                ? exercisesData
                : exercisesData.filter(
                    (exercise) => exercise.targetMuscle === newValue
                  )
            );
            // Scroll to the exercises section
            window.scrollTo({ top: 1500, left: 0, behavior: "smooth" });
          }}
          className="w-80"
          renderInput={(params) => (
            <TextField {...params} label="Target Muscle" color="error" />
          )}
        />
        {/* <input
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        /> */}
        {/* <button
          onClick={handleSearch}
          className="bg-[#FF2625] text-white py-2 px-4 rounded hover:bg-[#FF2625]/80 transition duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
        >
          Search
        </button> */}
      </div>
      {/* <Box
        sx={{ position: "relative", width: "100%", p: "20px" }}
        color={"red"}
      >
        <HorizontalScrollbar
          data={bodyParts}
          bodyParts
          setBodyPart={setBodyPart}
          bodyPart={bodyPart}
        />
      </Box> */}
    </div>
  );
};

export default SearchExercises;
