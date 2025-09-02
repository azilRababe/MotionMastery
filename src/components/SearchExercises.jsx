import React, { useEffect, useState } from "react";
import {
  TextField,
  Autocomplete,
  Button,
  Card,
  CardContent,
  Typography,
  Chip,
  Stack,
} from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import exercisesData from "../data/exercises_data.json";

const SearchExercises = ({ setExercises }) => {
  const [exerciseName, setExerciseName] = useState(null);
  const [bodyPart, setBodyPart] = useState(null);

  const exerciseNames = [...new Set(exercisesData.map((item) => item.title))];
  const bodyParts = [
    ...new Set(exercisesData.map((item) => item.muscle_group)),
  ];

  const handleSearch = () => {
    const filtered = exercisesData.filter((item) => {
      const matchesName = !exerciseName || item.title === exerciseName;
      const matchesBodyPart = !bodyPart || item.muscle_group === bodyPart;
      return matchesName && matchesBodyPart;
    });

    setExercises(filtered);
    window.scrollTo({ top: 1500, left: 0, behavior: "smooth" });
  };

  const handleClear = () => {
    setExerciseName(null);
    setBodyPart(null);
    setExercises(exercisesData);
  };

  useEffect(() => {
    setExercises(exercisesData);
  }, [setExercises]);

  return (
    <div className="flex flex-col items-center justify-center px-6 py-12 min-h-screen">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Intro */}
        <div className="space-y-4">
          <h2 className="font-bold text-gray-900 leading-snug text-2xl">
            Find Your Next Move Instantly
          </h2>
          <p className="text-gray-600">
            Browse our library of exercise GIFs and filter by name, body part,
            difficulty, or equipment to quickly discover the perfect fit for
            your training.
          </p>
        </div>

        {/* Right: Filter Card */}
        <Card>
          <CardContent className="flex flex-col gap-6">
            <Autocomplete
              sx={{
                "& label.Mui-focused": { color: "#ff5722" },
                "& .MuiInput-underline:after": { borderBottomColor: "#ff5722" },
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": { borderColor: "#ff5722" },
                },
              }}
              options={exerciseNames}
              freeSolo
              value={exerciseName}
              onChange={(e, value) => setExerciseName(value)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Exercise Name"
                  color="error"
                  InputProps={{
                    ...params.InputProps,
                    startAdornment: <FitnessCenterIcon sx={{ mr: 1 }} />,
                  }}
                />
              )}
            />

            <Autocomplete
              sx={{
                "& label.Mui-focused": { color: "#ff5722" },
                "& .MuiInput-underline:after": { borderBottomColor: "#ff5722" },
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": { borderColor: "#ff5722" },
                },
              }}
              options={bodyParts}
              freeSolo
              value={bodyPart}
              onChange={(e, value) => setBodyPart(value)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Body Part"
                  color="error"
                  InputProps={{
                    ...params.InputProps,
                    startAdornment: <AccessibilityNewIcon sx={{ mr: 1 }} />,
                  }}
                />
              )}
            />

            {/* Active filters preview */}
            <Stack direction="row" spacing={1} flexWrap="wrap">
              {exerciseName && (
                <Chip
                  label={exerciseName}
                  // color="error"
                  onDelete={() => setExerciseName(null)}
                />
              )}
              {bodyPart && (
                <Chip
                  label={bodyPart}
                  // color="error"
                  onDelete={() => setBodyPart(null)}
                />
              )}
            </Stack>

            {/* Buttons */}
            <div className="flex gap-4">
              <Button
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: "#ff5722",
                  "&:hover": { backgroundColor: "#e64a19" },
                  transition: "0.2s",
                }}
                onClick={handleSearch}
              >
                Apply Filters
              </Button>
              <Button
                fullWidth
                variant="outlined"
                sx={{
                  color: "#ff5722",
                  borderColor: "#ff5722",
                  "&:hover": { borderColor: "#e64a19", color: "#e64a19" },
                  transition: "0.2s",
                }}
                onClick={handleClear}
              >
                Clear
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SearchExercises;
