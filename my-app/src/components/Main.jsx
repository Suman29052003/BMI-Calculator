import React, { useState } from "react";

const Main = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  let [bmi, setBmi] = useState();
  const [message, setMessage] = useState("");
  const [colorClass,setColorClass] = useState('')

  //   console.log(weight,height)
  // Logic
  function calculateBMI(event) {
    event.preventDefault();

    if (height === 0 || (weight === 0 && height === "") || weight === "") {
      alert("Enter a valid weight and height");
    } else {
      let bmi = weight / ((height * height));
      setBmi(bmi);

      if (bmi < 18.5) {
        setMessage("You are underweight!");
        setColorClass("yellow");
      } else if (bmi >= 18.5 && bmi < 25) {
        setMessage("You are healthy!");
        setColorClass("green");
      } else {
        setMessage("You are overweight!");
        setColorClass("red");
      }
    }
   
  }

  function reload() {
    window.location.reload();
  }

  return (
    <div className="main">
      <div className="container">
        <h1 className="heading">
          BMI <span className="redSpan">Calculator</span>
        </h1>
        <form type="submit">
          <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">
              Weight (kgs)
            </span>
            <input
              className="p-20"
              type="text"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              placeholder="Enter your weight"
              value={weight}
              onChange={(event) => setWeight(event.target.value)}
            />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text text-center" id="inputGroup-sizing-default">
              Height (meters)
            </span>
            <input
              className="p-20"
              type="text"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              placeholder="Enter your height"
              value={height}
              onChange={(event) => setHeight(event.target.value)}
            />
          </div>
          <br />
          <div className="btn ">
            <input
              class="btn btn-primary"
              type="submit"
              value="Submit"
              onClick={calculateBMI}
            />
            <input
              class="btn btn-primary"
              type="reset"
              value="Reset"
              onClick={reload}
            />
          </div>
          <h4>Your BMI is :{bmi}</h4>
          <p className={colorClass}>{message}</p>
        </form>
      </div>
    </div>
  );
};

export default Main;
