import React, { useEffect, useState } from "react";
import Display from "../Display/Display";

const Watch = () => {
  const [steps, setSteps] = useState(0);

  const increaseSteps = () => {
    const newStepsCount = steps + 1;
    setSteps(newStepsCount);
  };

  useEffect(() => {
    console.log(steps);
  }, [steps]);

  return (
    <div style={{ border: "2px solid coral", margin: "133px" }}>
      <h2>Smart Watch</h2>
      <h3>My Current Steps: {steps}</h3>
      <button onClick={increaseSteps}>run........</button>
      <Display name="alvin" steps={steps}></Display>
    </div>
  );
};

export default Watch;
