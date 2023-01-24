import React from "react";

export interface TrainsProps {
  trains: Trains[];
}

export interface Trains {
  trainName: number;
  repeat: string;
  sets: string;
  fill: number;
  id: string;
}

const TrainingItem = ({ trains }: TrainsProps) => {
  // console.log(trains);
  return (
    <>
      {trains.map((train) => (
        <li
          key={train.id}
          className="bg-amber-50 w-full flex rounded-md mb-[10px] p-3 gap-2"
        >
          <p className="font-bold text-[12px] text-gray-700 w-[150px]">
            <span className="text-gray-400 mr-1">train</span>
            {train.trainName}
          </p>
          <p className="font-bold text-[12px] text-gray-700">
            <span className="text-gray-400 mr-1">repeats</span>
            {train.repeat}
          </p>
          <p className="font-bold text-[12px] text-gray-700">
            <span className="text-gray-400 mr-1">sets</span>
            {train.sets}
          </p>
          <p className="font-bold text-[12px] text-gray-700">
            <span className="text-gray-400 mr-1">fill</span>
            {train.fill}
          </p>
        </li>
      ))}
    </>
  );
};

export default TrainingItem;
