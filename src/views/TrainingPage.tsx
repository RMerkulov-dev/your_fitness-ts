import React, { useState } from "react";
import { nanoid } from "nanoid";
import TrainingItem from "../components/TrainingItem";
import { red, yellow, green } from "@mui/material/colors";
import Radio from "@mui/material/Radio";
import Logo from "../img/logo.png";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useAppDispatch, useAppSelector } from "../hooks";
import { setTrainsList, addTrains } from "../redux/AllTrainsSlice";

import {
  showToastMessage,
  showDeletedMessage,
  showAlertMessage,
} from "../helpers/alarms";

const TrainingPage = () => {
  const [trainName, setTrainName] = useState("");
  const [repeat, setRepeat] = useState<number | string>(0);
  const [sets, setSets] = useState<number | string>(0);
  const [fill, setFill] = useState("bad");

  const currentDate = new Date().toLocaleDateString("en-US");
  console.log(currentDate);

  interface FormDataType {
    trainName: string;
    repeat: number;
    sets: number;
    fill: string;
    id: string;
  }
  const trainData: FormDataType = {
    trainName: "",
    repeat: 0,
    sets: 0,
    fill: "bad",
    id: nanoid(),
  };

  const dispatch = useAppDispatch();
  const trainsList = useAppSelector((state) => state.train.allTrains);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const positiveValue = parseInt(e.target.value);
    if (positiveValue < 0) {
      return;
    }
    switch (e.target.name) {
      case "exercise":
        setTrainName(e.target.value);
        break;
      case "repeats":
        setRepeat(e.target.value);
        break;
      case "sets":
        setSets(e.target.value);
        break;
      case "bad":
        setFill(e.target.value);
        break;
      case "normal":
        setFill(e.target.value);
        break;
      case "good":
        setFill(e.target.value);
        break;
    }
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (trainName === "") {
      showAlertMessage();
      return;
    }
    trainData.trainName = trainName;
    if (typeof repeat === "number" && typeof sets === "number") {
      trainData.repeat = repeat;
      trainData.sets = sets;
    }
    trainData.fill = fill;
    showToastMessage();
    dispatch(
      addTrains({
        train: trainName,
        repeats: repeat,
        sets: sets,
        fill: fill,
        id: nanoid(),
        date: currentDate,
      })
    );
  };

  const controlProps = (item: string) => ({
    checked: fill === item,
    onChange: handleChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  const handleDeleted = (id: string) => {
    const updateTrains = trainsList.filter(
      (train: { id: string }) => train.id !== id
    );
    dispatch(setTrainsList(updateTrains));
    showDeletedMessage();
  };

  //FIXME:

  return (
    <div className="bg-main bg-no-repeat bg-cover  bg-center bg-fixed w-screen h-screen">
      <div className="bg-white bg-opacity-20 backdrop-blur-md rounded drop-shadow-lg w-screen h-screen flex items-center justify-start flex-col px-3 py-5">
        <img
          className="block mx-auto"
          src={Logo}
          alt="logo"
          width="200"
          height="200"
        />
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center   w-[300px]"
        >
          <label className=" font-bold text-l text-amber-100 uppercase flex items-center justify-center flex-col gap-2 uppercase mt-5">
            add your exercise
            <input
              className="p-1 rounded-md border-2 border-amber-300 w-[300px] text-gray-700 "
              type="text"
              name="exercise"
              value={trainName}
              maxLength={20}
              placeholder="Enter name of exercises"
              onChange={handleChange}
            />
          </label>
          <div className="flex items-center justify-start gap-3 mt-4">
            <label className="mt-4 font-bold text-l text-amber-100 uppercase flex items-center justify-center gap-2">
              repeats
              <input
                className="p-1 rounded-md border-2 border-amber-300 w-[80px] text-gray-700 "
                type="number"
                name="repeats"
                value={repeat}
                maxLength={3}
                placeholder="repeats"
                onChange={handleChange}
              />
            </label>
            <label className="mt-4 font-bold text-l text-amber-100 uppercase flex items-center justify-center gap-2">
              sets
              <input
                className="p-1 rounded-md border-2 border-amber-300 w-[80px] text-gray-700"
                type="number"
                name="sets"
                value={sets}
                maxLength={3}
                placeholder="sets"
                onChange={handleChange}
              />
            </label>
          </div>
          <h3 className="mt-4 font-bold text-l text-amber-100 uppercase">
            how do you feel
          </h3>
          <div className="flex items-center justify-start gap-3 ">
            <div className="font-bold text-white text-l flex items-center justify-center">
              <Radio
                {...controlProps("a")}
                id="chooseBad"
                name="bad"
                value="bad"
                checked={fill === "bad"}
                onChange={handleChange}
                sx={{
                  color: red[600],
                  "&.Mui-checked": {
                    color: red[400],
                  },
                }}
              />
              bad
            </div>
            <div className="font-bold text-white text-l">
              <Radio
                {...controlProps("b")}
                color="secondary"
                id="chooseNormal"
                name="normal"
                value="normal"
                checked={fill === "normal"}
                onChange={handleChange}
                sx={{
                  color: yellow[600],
                  "&.Mui-checked": {
                    color: yellow[400],
                  },
                }}
              />
              normal
            </div>
            <div className="font-bold text-white text-l">
              <Radio
                {...controlProps("c")}
                color="success"
                id="chooseGood"
                name="good"
                value="good"
                checked={fill === "good"}
                onChange={handleChange}
                sx={{
                  color: green[600],
                  "&.Mui-checked": {
                    color: green[400],
                  },
                }}
              />
              good
            </div>
          </div>
          <button
            onSubmit={handleSubmit}
            className="block mx-auto rounded-full px-[50px] py-1 bg-amber-100 text-[20px] font-bold text-gray-700 shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:bg-amber-300 mt-4 uppercase "
          >
            add
          </button>
        </form>
        <ul className="bg-white bg-opacity-20 backdrop-blur-md bg-amber-50 w-full h-full mt-[30px] border-2 rounded-md border-amber-300 overflow-y-scroll px-3 py-3 ">
          <TrainingItem trains={trainsList} deleted={handleDeleted} />
        </ul>
      </div>
      <ToastContainer autoClose={500} />
    </div>
  );
};

export default TrainingPage;
