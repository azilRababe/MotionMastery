import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow

const ExerciseCard = ({ exercise }) => (
  <Link
    to={`/exercise/${exercise.id}`}
    className="flex flex-col items-center border-t-4 border-[#ff5722]  duration-300  text-center hover:scale-105 cursor-pointer"
  >
    {/* <img
      src={exercise.gif_url ? exercise.gif_url : "public/placeholder.jpg"}
      alt={exercise.title}
      loading="eager"
      className="w-full h-80 object-cover"
    />

    <div className="flex flex-wrap gap-2 justify-center mt-4 px-4">
      <span className="bg-[#FFA9A9] text-white text-xs font-semibold px-3 py-1 rounded-full uppercase">
        {exercise.muscle_group}
      </span>
      <span className="bg-[#FCC757] text-white text-xs font-semibold px-3 py-1 rounded-full uppercase">
        {exercise.equipments?.[0] || "No equipment"}
      </span>
    </div>

    <h3 className="mt-4 mb-2 text-center text-base font-semibold text-gray-800 px-4">
      {exercise.title}
    </h3> */}
    <Card
      sx={{
        width: 300, // fixed width
        height: 400, // fixed height
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <CardMedia
        component="img"
        image={exercise.gif_url ? exercise.gif_url : "public/placeholder.jpg"}
        alt={exercise.title}
        sx={{
          height: 180, // bigger than before
          objectFit: "contain", // keeps the image ratio intact
          p: 2, // padding around image to keep it centered
        }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{ textAlign: "center", fontWeight: "bold" }}
        >
          {exercise.title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            display: "-webkit-box",
            WebkitLineClamp: 3, // limit to 3 lines
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {exercise.overview ? exercise.overview : "No description available."}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button size="small">
          <span className="bg-[#FCC757] text-white text-xs font-semibold px-3 py-1 rounded-full uppercase">
            {exercise.equipments?.[0] || "No equipment"}
          </span>
        </Button>
        <Button size="small">
          <span className="bg-[#FFA9A9] text-white text-xs font-semibold px-3 py-1 rounded-full uppercase">
            {exercise.muscle_group}
          </span>
        </Button>
      </CardActions>
    </Card>
  </Link>
);

export default ExerciseCard;
