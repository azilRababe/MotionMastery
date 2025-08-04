import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";

import { Button } from "@mui/material";

const Detail = ({ exerciseDetail }) => {
  const {
    body_part,
    title,
    gif_url,
    description,
    category,
    equipment,
    difficulty_level,
  } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      label: "Body Part",
      value: body_part,
    },
    {
      icon: TargetImage,
      label: "Category",
      value: category,
    },
    {
      icon: EquipmentImage,
      label: "Equipment",
      value: equipment,
    },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-10 p-6 md:p-12 min-h-screen items-center justify-center">
      <div className="flex-1 flex justify-center items-center">
        <div className="flex justify-center items-center rounded-xl">
          <img
            src={gif_url}
            alt={title}
            loading="lazy"
            className="object-contain w-full max-w-md"
          />
        </div>
      </div>

      <div className="flex-1 space-y-6">
        <h1 className="text-3xl font-bold capitalize text-gray-800">{title}</h1>

        <p className="text-gray-600 text-base leading-relaxed">{description}</p>

        <div className="space-y-4">
          {extraDetail.map((item) => (
            <div key={item.label} className="flex items-center gap-4">
              <Button
                sx={{
                  backgroundColor: "#fff2db",
                  borderRadius: "50%",
                  width: "60px",
                  height: "60px",
                  minWidth: "unset",
                }}
              >
                <img
                  src={item.icon}
                  alt={item.label}
                  className="w-8 h-8 object-contain"
                />
              </Button>
              <div>
                <div className="text-sm text-gray-500">{item.label}</div>
                <div className="text-md font-medium capitalize text-gray-800">
                  {item.value}
                </div>
              </div>
            </div>
          ))}

          <div className="flex items-center gap-4 mt-4">
            <div className="text-sm text-gray-500">Difficulty</div>
            <div className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium capitalize text-gray-800">
              {difficulty_level || "Unknown"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
