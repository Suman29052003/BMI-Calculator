import React, { useState } from "react";


const Main = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  let [bmi, setBmi] = useState();
  const [message, setMessage] = useState("");

  //   console.log(weight,height)
  // Logic
  function calculateBMI(event) {
    event.preventDefault();
  
    if (height === 0 || weight === 0 && height === "" || weight === "") {
      alert("Enter a valid weight and height");
    } else {
      let bmi = weight / (height * height);
      setBmi(bmi);
  
      if (bmi < 18.5) {
        setMessage("You are underweight!");
      } else if (bmi >= 18.5 && bmi < 25) {
        setMessage("You are healthy!");
      } else {
        setMessage("You are overweight!");
      }
    }
  }
  
  function reload(){
    window.location.reload()
  }

  return (
    <div className="main">
      <div className="container">
        <h1>
          BMI <span className="redSpan">Calculator</span>
        </h1>
        <form type="submit">
          <p>Weight (kgs) :</p>
          <input
            type="text"
            placeholder="Enter your weight"
            value={weight}
            onChange={(event) => setWeight(event.target.value)}
          />
          <p>Height (m):</p>
          <input
            type="text"
            placeholder="Enter your height"
            value={height}
            onChange={(event) => setHeight(event.target.value)}
          />
          <div className="btn ">
          <input class="btn btn-primary" type="submit" value="Submit" onClick={calculateBMI}/>
          <input class="btn btn-primary" type="reset" value="Reset" onClick={reload}/>
          </div>
          <h4>Your BMI is :{bmi}</h4>
          <p>{message}</p>
        </form>
      </div>
    </div>
  );
};

export default Main;
