import React, { useState } from "react";

const Main = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  return (
    <div className="main">
      <div className="container">
        <h1>
          BMI <span className="redSpan">Calculator</span>
        </h1>
        <form type="submit">
          <p>Weight :</p>
          <input type="text" placeholder="Enter your weight" value={weight} />
          <p>Height :</p>
          <input type="text" placeholder="Enter your height" value={height} />
        </form>
        <div className="btns">
          <button>Submit</button>
          <button>Reset</button>
        </div>
        <h4>Your BMI is : </h4>
        <p></p>
      </div>
    </div>
  );
};

export default Main;
