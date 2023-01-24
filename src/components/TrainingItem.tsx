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
  console.log(trains);
  return (
    <div className="bg-amber-50 w-full shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]"></div>
  );
};

export default TrainingItem;
