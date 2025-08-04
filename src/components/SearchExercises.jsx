import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import exercisesData from "../data/exercises_data.json";

const SearchExercises = ({ setExercises }) => {
  const [exerciseName, setExerciseName] = useState(null);
  const [bodyPart, setBodyPart] = useState(null);
  const [difficulty, setDifficulty] = useState(null);
  const [equipment, setEquipment] = useState(null);
  const [category, setCategory] = useState(null);

  const exerciseNames = [...new Set(exercisesData.map((item) => item.title))];
  const bodyParts = [...new Set(exercisesData.map((item) => item.body_part))];
  const difficulties = [
    ...new Set(
      exercisesData
        .map((item) => item.difficulty_level)
        .filter((level) => level && level !== "Other")
    ),
  ];
  const equipments = [
    ...new Set(exercisesData.map((item) => item.equipment || "Other")),
  ];
  const categories = [
    ...new Set(
      exercisesData
        .map((item) => item.category)
        .filter((category) => category && category !== "Other")
    ),
  ];

  const handleSearch = () => {
    const filtered = exercisesData.filter((item) => {
      const matchesName = !exerciseName || item.title === exerciseName;
      const matchesBodyPart = !bodyPart || item.body_part === bodyPart;
      const matchesDifficulty =
        !difficulty || (item.difficulty_level || "Other") === difficulty;
      const matchesEquipment =
        !equipment || (item.equipment || "Other") === equipment;
      const matchesCategory =
        !category || (item.category || "Other") === category;

      return (
        matchesName &&
        matchesBodyPart &&
        matchesDifficulty &&
        matchesEquipment &&
        matchesCategory
      );
    });

    setExercises(filtered);
    // scroll down
    window.scrollTo({ top: 1500, left: 0, behavior: "smooth" });
  };

  const handleClear = () => {
    setExerciseName(null);
    setBodyPart(null);
    setDifficulty(null);
    setEquipment(null);
    setCategory(null);
    setExercises(exercisesData);
  };

  useEffect(() => {
    setExercises(exercisesData);
  }, [setExercises]);

  return (
    <div className="flex flex-col items-center justify-center px-10 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">
        {/* Left side: Text */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-[#ff5722] mb-4">
            Find the Perfect Move in Seconds
          </h2>
          <p className="text-gray-700 text-md">
            Whether you're crushing leg day or just starting your fitness
            journey, our visual library of exercise GIFs has your back. Use the
            filters to search by name, category, difficulty, or equipment — and
            master every rep.
          </p>
        </div>

        {/* Right side: Filters */}
        <div className="flex flex-col gap-4">
          <Autocomplete
            options={exerciseNames}
            value={exerciseName}
            onChange={(e, value) => setExerciseName(value)}
            renderInput={(params) => (
              <TextField {...params} label="Exercise Name" color="error" />
            )}
            sx={{
              "& label.Mui-focused": {
                color: "#ff5722",
              },
              "& .MuiInput-underline:after": {
                borderBottomColor: "#ff5722",
              },
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "#ff5722",
                },
              },
            }}
          />

          <Autocomplete
            options={bodyParts}
            value={bodyPart}
            onChange={(e, value) => setBodyPart(value)}
            renderInput={(params) => (
              <TextField {...params} label="Body Part" color="error" />
            )}
            sx={{
              "& label.Mui-focused": {
                color: "#ff5722",
              },
              "& .MuiInput-underline:after": {
                borderBottomColor: "#ff5722",
              },
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "#ff5722",
                },
              },
            }}
          />

          <Autocomplete
            options={difficulties}
            value={difficulty}
            onChange={(e, value) => setDifficulty(value)}
            renderInput={(params) => (
              <TextField {...params} label="Difficulty" color="error" />
            )}
            sx={{
              "& label.Mui-focused": {
                color: "#ff5722",
              },
              "& .MuiInput-underline:after": {
                borderBottomColor: "#ff5722",
              },
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "#ff5722",
                },
              },
            }}
          />

          <Autocomplete
            options={equipments}
            value={equipment}
            onChange={(e, value) => setEquipment(value)}
            renderInput={(params) => (
              <TextField {...params} label="Equipment" color="error" />
            )}
            sx={{
              "& label.Mui-focused": {
                color: "#ff5722",
              },
              "& .MuiInput-underline:after": {
                borderBottomColor: "#ff5722",
              },
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "#ff5722",
                },
              },
            }}
          />

          <Autocomplete
            options={categories}
            value={category}
            onChange={(e, value) => setCategory(value)}
            renderInput={(params) => (
              <TextField {...params} label="Category" color="error" />
            )}
            sx={{
              "& label.Mui-focused": {
                color: "#ff5722",
              },
              "& .MuiInput-underline:after": {
                borderBottomColor: "#ff5722",
              },
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "#ff5722",
                },
              },
            }}
          />

          {/* Buttons */}
          <div className="flex gap-4 mt-2">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#ff5722",
                "&:hover": { backgroundColor: "#ff5722cc" },
              }}
              onClick={handleSearch}
              className="hover:scale-105"
            >
              Apply Filters
            </Button>
            <Button
              variant="outlined"
              sx={{
                color: "#ff5722",
                borderColor: "#ff5722",
                "&:hover": { borderColor: "#ff5722cc", color: "#ff5722cc" },
              }}
              onClick={handleClear}
              className="hover:scale-105"
            >
              Clear Filters
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchExercises;
