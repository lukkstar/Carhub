"use client";

import { useState } from "react";
import Image from "next/image";
import { CarProps } from "@/types";
import { CustomButton } from ".";

interface CarCardsProps {
  car: CarProps;
}

const CarCards = ({ car }: CarCardsProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="card-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p>
        <span></span>
      </p>
    </div>
  );
};

export default CarCards;
