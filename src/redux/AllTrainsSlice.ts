import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allTrains: [],
};

const TrainsSlice = createSlice({
  name: "trains",
  initialState,
  reducers: {
    setTrainsList: (state, action) => {
      state.allTrains = action.payload;
    },
    addTrains: (state, action) => {
      // @ts-ignore
      state.allTrains.push({
        train: action.payload.train,
        id: action.payload.id,
      });
    },
    deleteTrain: (state, action) => {},
    updateTrain: (state, action) => {
      const { id, train } = action.payload;
      // @ts-ignore
      const index = state.allTrains.findIndex((train) => train.id === id);
      // @ts-ignore
      state.allTrains[index].train = train;
    },
  },
});

export const { setTrainsList, addTrains, updateTrain, deleteTrain } =
  TrainsSlice.actions;
export default TrainsSlice.reducer;
