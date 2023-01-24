import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import TrainingItem from "../components/TrainingItem";
import { pink, red, yellow, green } from "@mui/material/colors";
import Radio from "@mui/material/Radio";

const TrainingPage = () => {
  const [trainName, setTrainName] = useState("");
  const [repeat, setRepeat] = useState("0");
  const [sets, setSets] = useState("0");
  const [fill, setFill] = useState("bad");
  const [allTrains, setAllTrains] = useState([]);

  interface FormDataType {
    trainName: string;
    repeat: string;
    sets: string;
    fill: string;
    id: string;
  }
  const trainData: FormDataType = {
    trainName: "",
    repeat: "",
    sets: "0",
    fill: "bad",
    id: nanoid(),
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    trainData.trainName = trainName;
    trainData.repeat = repeat;
    trainData.sets = sets;
    trainData.fill = fill;

    // @ts-ignore
    setAllTrains([...allTrains, trainData]);
  };
  const controlProps = (item: string) => ({
    checked: fill === item,
    onChange: handleChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  return (
    <div className="bg-main bg-no-repeat bg-cover  bg-center bg-fixed w-screen h-screen">
      <div className="bg-white bg-opacity-20 backdrop-blur-md rounded drop-shadow-lg w-screen h-screen flex items-center justify-start flex-col px-3 py-5">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center  mt-[100px] w-[300px]"
        >
          <label>
            <input
              className="p-1 rounded-md border-2 border-amber-300 w-[300px] "
              type="text"
              name="exercise"
              value={trainName}
              maxLength={10}
              placeholder="Enter name of exercises"
              onChange={handleChange}
            />
          </label>
          <div className="flex items-center justify-start gap-3 mt-4">
            <label>
              <input
                className="p-1 rounded-md border-2 border-amber-300 w-[80px] "
                type="text"
                name="repeats"
                value={repeat}
                placeholder="repeats"
                onChange={handleChange}
              />
            </label>
            <label>
              <input
                className="p-1 rounded-md border-2 border-amber-300 w-[80px]"
                type="text"
                name="sets"
                value={sets}
                placeholder="sets"
                onChange={handleChange}
              />
            </label>
          </div>
          <h3 className="mt-4 font-bold text-xl text-amber-100 uppercase">
            how do you fill
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

            {/*<label>*/}
            {/*  <input*/}
            {/*    type="radio"*/}
            {/*    id="chooseBad"*/}
            {/*    name="bad"*/}
            {/*    value="bad"*/}
            {/*    checked={fill === "bad"}*/}
            {/*    onChange={handleChange}*/}
            {/*  />{" "}*/}
            {/*  bad*/}
            {/*</label>*/}
            {/*<label>*/}
            {/*  <input*/}
            {/*    type="radio"*/}
            {/*    id="chooseMedium"*/}
            {/*    name="medium"*/}
            {/*    value="medium"*/}
            {/*    checked={fill === "medium"}*/}
            {/*    onChange={handleChange}*/}
            {/*  />*/}
            {/*  medium*/}
            {/*</label>*/}
            {/*<label>*/}
            {/*  <input*/}
            {/*    type="radio"*/}
            {/*    id="chooseGood"*/}
            {/*    name="good"*/}
            {/*    value="good"*/}
            {/*    checked={fill === "good"}*/}
            {/*    onChange={handleChange}*/}
            {/*  />*/}
            {/*  good*/}
            {/*</label>*/}
          </div>
          <button
            onSubmit={handleSubmit}
            className="block mx-auto rounded-md px-[50px] py-1 bg-amber-100 text-[20px] font-bold text-gray-700 shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:bg-amber-300 mt-4 "
          >
            done
          </button>
        </form>
        <ul className="bg-white bg-opacity-20 backdrop-blur-md bg-amber-50 w-full h-full mt-[30px] border-2 rounded-md border-amber-300 overflow-y-scroll px-3 py-3 ">
          <TrainingItem trains={allTrains} />
        </ul>
      </div>
    </div>
  );
};

export default TrainingPage;
