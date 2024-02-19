import { FC } from "react";
import style from "./main.module.scss";
import { ProductCardModel } from "@/models";
import { Button } from "@mui/material";
import { FaStar } from "react-icons/fa6";
import Image from "next/image";
const ProductCard: FC<ProductCardModel> = (props) => {
  const image  = props.imageSrc == undefined ? "" : props.imageSrc;
  return (
    <Button
      variant="contained"
      className="flex flex-col items-center overflow-clip rounded-[30px] bg-alabaster p-0 pt-[15px] hover:bg-alabaster"
    >
      <div className="flex size-fit w-full items-start">
       
      </div>
      <img
        alt=""
        src={image}
        className="mt-[13px] bg-blend-multiply size-[250px]"
      />
      <div className="flex w-full flex-col items-start gap-y-[13px] px-[20px] pb-[17px] pt-[2px]">
        <label className="text-center font-roboto text-[15px] font-semibold capitalize text-green-600">
          {props.productName}
        </label>
        <div
          style={{
            backgroundColor: "#DEDDDD",
            height: "1px",
            width: "100%",
          }}
        ></div>
        <div className="flex w-full flex-row">
          <s className="font-sans mr-2 text-[15px] font-semibold text-black">
            {props.originalPrice}
          </s>
          <label className="font-sans font-bold text-green-600">
            {props.currentPrice}
          </label>
          <div className="flex grow flex-row items-center justify-end ">
            {Array(props.rating)
              .fill(0)
              .map((val, index) => {
                return (
                  <FaStar
                    className="size-[17px] text-sunset_pearl"
                    key={index}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </Button>
  );
};

export { ProductCard };
