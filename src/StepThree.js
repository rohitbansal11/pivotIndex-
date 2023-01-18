import React, { useState, useEffect } from "react";
import { json } from "react-router-dom";

export default function StepThree() {
  const [stepOne, setStepOne] = useState([]);
  const [stepTwo, setSteptwo] = useState({});
  const pivotIndex = function (nums) {
    let sum = nums.reduce((acc, num) => acc + num, 0)
    let currentSum = 0
    for (let i = 0; i < nums.length; i++) {
      currentSum += (nums[i - 1] || 0)
      sum -= nums[i]
      if (currentSum === sum) {
        return i
      }
    }
    return -1
  }

  useEffect(() => {
    let checkDataOne = JSON.parse(localStorage.getItem("stepOne"));
    let checkDataTwo = JSON.parse(localStorage.getItem("stepTwo"));
let data = checkDataOne?.map((w)=> Number(w))
    setStepOne(data);
    setSteptwo(checkDataTwo);
  }, []);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginTop: "20px",
          marginBottom: "10px",
        }}
      >
        <h3>Final Test </h3>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginTop: "20px",
          marginBottom: "10px",
        }}
      >
        [
        {stepOne?.map((w, i) => {
          return (
            <span key={i}>
              {w} {stepOne?.length - 1 < i ? "" : ","}{" "}
            </span>
          );
        })}
        ]
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginBottom: "10px",
        }}
      >
        <h3>first Name :== {stepTwo.firstname} </h3>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginBottom: "10px",
        }}
      >
        <h3>last name :== {stepTwo.lastname} </h3>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginBottom: "10px",
        }}
      >
        <h3>Output :=== {pivotIndex(stepOne)} </h3>
      </div>
    </>
  );
}
