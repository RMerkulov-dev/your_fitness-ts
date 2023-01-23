import React from "react";

type DataProps = {
  data: () => void;
};

const TrainingItem = ({ data }: DataProps) => {
  return (
    <div className="bg-amber-50 w-full shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]">
      Test
    </div>
  );
};

export default TrainingItem;
