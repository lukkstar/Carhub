"use client";

import { CustomButtonProps } from "@/types";
import React from "react";

const CustomButton = ({
  title,
  handleClick,
  containerStyles,
  btnType,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={"button" || btnType}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomButton;
