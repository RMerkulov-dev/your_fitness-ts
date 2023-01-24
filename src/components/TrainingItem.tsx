import React from "react";

export interface TrainsProps {
  trains: Trains[];
}

export interface Trains {
  trainName: number;
  repeat: string;
  sets: string;
  fill: number;
}

const TrainingItem = ({ trains }: TrainsProps) => {
  return (
    <>
      {trains.map((train) => (
        <li className="bg-amber-50 w-full shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]">
          <span>{train.trainName}</span>
          <span>{train.repeat}</span>
          <span>{train.sets}</span>
          <span>{train.fill}</span>
        </li>
      ))}
    </>
  );
};

export default TrainingItem;
