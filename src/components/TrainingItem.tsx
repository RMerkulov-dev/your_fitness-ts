import React, { ReactNode } from "react";
import { BsFillEmojiFrownFill } from "react-icons/bs";
import { BsFillEmojiNeutralFill } from "react-icons/bs";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";

export interface TrainsProps {
  trains: Trains[];
  deleted: (id: string) => void;
}

export interface Trains {
  train: string;
  repeats: number;
  sets: number;
  fill: string;
  id: string;
  date: ReactNode;
}

const TrainingItem = ({ trains, deleted }: TrainsProps) => {
  return (
    <>
    
      {trains.map((train) => (
        <li
          key={train.id}
          className="bg-amber-50 w-full flex items-center rounded-md mb-[10px] p-5 gap-2 relative"
        >
          <p className="font-bold text-[12px] text-gray-700 w-[200px]">
            <span className="text-gray-400 mr-1">train</span>
            {train.train}
          </p>
          <p className="font-bold text-[12px] text-gray-700 w-[35px]">
            <span className="text-gray-400 mr-1">r</span>
            {train.repeats}
          </p>
          <p className="font-bold text-[12px] text-gray-700 w-[35px]">
            <span className="text-gray-400 mr-1">s</span>
            {train.sets}
          </p>
          <p className="font-bold text-[12px] text-gray-700 flex items-baseline ">
            <span className="text-gray-400 mr-1">feel</span>
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
          <button
            className="cursor-pointer hover:scale-110 transition-[0,3s] ml-auto"
            onClick={() => deleted(train.id)}
          >
            {<RiDeleteBin6Line className="fill-gray-500 " />}
          </button>
          <p className="text-[8px] text-gray-400 absolute top-10 right-5">
            {train.date}
          </p>
        </li>
      ))}
    </>
  );
};

export default TrainingItem;
