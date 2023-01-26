import React from "react";
import { BsFillEmojiFrownFill } from "react-icons/bs";
import { BsFillEmojiNeutralFill } from "react-icons/bs";
import { BsFillEmojiSmileFill } from "react-icons/bs";

export interface TrainsProps {
  trains: Trains[];
}

export interface Trains {
  train: string;
  repeats: string;
  sets: string;
  fill: string;
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
          <p className="font-bold text-[12px] text-gray-700 w-[200px]">
            <span className="text-gray-400 mr-1">train</span>
            {train.train}
          </p>
          <p className="font-bold text-[12px] text-gray-700">
            <span className="text-gray-400 mr-1">repeats</span>
            {train.repeats}
          </p>
          <p className="font-bold text-[12px] text-gray-700">
            <span className="text-gray-400 mr-1">sets</span>
            {train.sets}
          </p>
          <p className="font-bold text-[12px] text-gray-700 flex items-baseline">
            <span className="text-gray-400 mr-1">fill</span>
            {train.fill === "bad" && (
              <BsFillEmojiFrownFill className="fill-red-300 " />
            )}
            {train.fill === "normal" && (
              <BsFillEmojiNeutralFill className="fill-yellow-300 " />
            )}
            {train.fill === "good" && (
              <BsFillEmojiSmileFill className="fill-green-300 " />
            )}
          </p>
        </li>
      ))}
    </>
  );
};

export default TrainingItem;
