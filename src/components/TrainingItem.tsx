import React from "react";

type DataProps = {
  data: {
    trainName: string;
    repeat: string;
    sets: string;
    fill: string;
  };
};

const TrainingItem: React.FC<DataProps> = ({ data }) => {
  console.log(data.trainName);
  return (
    <div className="bg-amber-50 w-full shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]"></div>
  );
};

export default TrainingItem;
