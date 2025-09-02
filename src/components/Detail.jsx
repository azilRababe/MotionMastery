import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";

import { Button } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Detail = ({ exerciseDetail }) => {
  const {
    muscle_group,
    title,
    gif_url,
    overview,
    steps,
    faq,
    equipments,
    difficulties,
    image,
  } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      label: "Body Part",
      value: muscle_group,
    },
    {
      icon: TargetImage,
      label: "Equipment",
      value: Array.isArray(equipments)
        ? equipments.map((item) => item.toLowerCase()).join(", ")
        : equipments?.toLowerCase?.() || equipments,
    },
    {
      icon: EquipmentImage,
      label: "Difficulty",
      value: Array.isArray(difficulties)
        ? difficulties.map((item) => item.toLowerCase()).join(", ")
        : difficulties?.toLowerCase?.() || difficulties,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 md:p-12 space-y-12">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row gap-10 items-center">
        {/* Image */}
        <div className="flex-1 flex justify-center">
          <div className="bg-white rounded-xl p-4">
            <img
              src={gif_url ? gif_url : "/placeholder.jpg"}
              alt={title}
              loading="lazy"
              className="object-contain w-full max-w-md rounded-md"
            />
          </div>
        </div>

        {/* Details */}
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl font-bold capitalize text-gray-800">
            {title}
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed">{overview}</p>

          {/* Extra details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {extraDetail.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center justify-center bg-[#fff2db] w-14 h-14 rounded-full">
                  <img
                    src={item.icon}
                    alt={item.label}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <div>
                  <div className="text-sm text-gray-500">{item.label}</div>
                  <div className="text-md font-semibold capitalize text-gray-800">
                    {item.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Steps */}
      {steps && steps.length > 0 && (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold capitalize text-gray-800">
            How to perform {title}
          </h2>
          <ol className="space-y-3">
            {steps.map((step, index) => (
              <li
                key={index}
                className="flex gap-3 items-start text-gray-700 leading-relaxed"
              >
                <span className="bg-[#FCC757] text-white w-7 h-7 flex items-center justify-center rounded-full text-sm font-bold shrink-0">
                  {index + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      )}
      {/* FAQ */}
      {faq && faq.length > 0 && (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faq.map((item, index) => (
              <Accordion key={index} className="rounded-lg shadow-sm">
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <div className="text-gray-700 font-medium">
                    {item.question}
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="text-gray-600">{item.answer}</div>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </div>
      )}
      {/* Target Muscles */}
      {/* check for this pattern "image":{} */}
      {image && Object.keys(image).length > 0 && (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">Target Muscles</h2>
          <div className="flex justify-center items-center bg-gray-50 p-6 rounded-lg shadow-inner">
            <img
              src={image.src}
              alt={image.alt}
              className="object-contain max-w-md"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
