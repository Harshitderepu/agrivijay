import { FC, useState } from "react";
import style from "./main.module.scss";
import { Avatar, useTheme } from "@mui/material";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
const Counter: FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const details: Record<string, string>[] = [
    {
      unit: "100%",
      text: "Organic",
    },
    {
      unit: "285",
      text: "Active Product",
    },
    {
      unit: "350+",
      text: "Organic Orchads",
    },
    {
      unit: "25+",
      text: "Year of farm",
    },
  ];
  const theme = useTheme();
  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
  };
  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };
  const handleChange = (step: number) => {
    setActiveStep(step);
  };
  return (
    <div id={style.main} className="bg-green-600">
      <div className="mb-auto flex size-full flex-col p-10">
      <div className="flex justify-center px-4 py-2  ">
            <iframe
              width="1200"
              height="560"
              src="https://www.youtube.com/embed/E7wJTI-1dvQ"
              title="YouTube video player"
              allow="accelerometer; 
              "
            ></iframe>
          </div>
        <div className="flex flex-col items-center">
        
       
        </div>
        
      </div>
      <img
      alt=""
        src="/Home/Counter/Photo.png"
        className="absolute left-[-30%] top-0 z-0 w-[46%] scale-[-1] bg-[#FCFCFC]"
      />
      <img alt=""
        src="/Home/Counter/Photo.png"
        className="absolute right-[-30%] top-0 z-0 w-[46%] bg-[#FCFCFC]"
      />
    </div>
  );
};
export default Counter ;
