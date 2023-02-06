import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Train {
  train: string;
  repeats: string;
  sets: string;
  fill: string;
  id: string;
  date: string;
}

interface TrainState {
  allTrains: Train[];
}

const initialState: TrainState = {
  allTrains: [],
};

const TrainsSlice = createSlice({
  name: "trains",
  initialState,
  reducers: {
    setTrainsList: (state, action) => {
      state.allTrains = action.payload;
    },
    addTrains: (state, action: PayloadAction<Train>) => {
      state.allTrains.push({
        train: action.payload.train,
        repeats: action.payload.repeats,
        sets: action.payload.sets,
        fill: action.payload.fill,
        id: action.payload.id,
        date: action.payload.date,
      });
    },
    deleteTrain: (state, action) => {},
    updateTrain: (state, action) => {
      const { id, train } = action.payload;
      const index = state.allTrains.findIndex((train) => train.id === id);
      state.allTrains[index].train = train;
    },
  },
});

export const { setTrainsList, addTrains, updateTrain, deleteTrain } =
  TrainsSlice.actions;
export default TrainsSlice.reducer;
