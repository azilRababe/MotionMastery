import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";

import { Button } from "@mui/material";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, src, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-8 p-4 min-h-screen">
      <img
        src={src}
        alt={name}
        loading="lazy"
        className="object-cover rounded-lg shadow-lg border-x-4 border-red-500 "
      />
      <div>
        <div>{name}</div>
        <div>
          Exercises keep you strong. <span>{name}</span> bup is one of the best{" "}
          <br /> exercises to target your {target}. It will help you improve
          your <br /> mood and gain energy.
        </div>
        {extraDetail?.map((item) => (
          <div key={item.name}>
            <Button>
              <img
                src={item.icon}
                alt={bodyPart}
                style={{ width: "50px", height: "50px" }}
              />
            </Button>
            <div>{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Detail;
