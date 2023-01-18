import React, { useState } from "react";
import { json, useNavigate } from "react-router-dom";
export default function StepTwo() {
  const [errr, setErrr] = useState({});
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const navigate=useNavigate()

  const handeValidation = () => {
    let err = true;
    let ser={}

    if (firstname == "") {
      err = false;
      ser.firstname = "First Name is Required";
    } else {
      err = true;
      ser.firstname = "";
    }

    if (lastname == "") {
      err = false;
      ser.lastname = "Last Name is Required";
    } else {
      err = true;
      ser.lastname = "";
    }
    setErrr(ser)
    return err;
  };

  const handleFirstVlidation = (value) => {
    let err = errr;

    if (value == "") {
      err.firstname = "First Name is Required";
    } else {
      err.firstname = "";
    }
    setErrr(err);
    setFirstName(value);
  };
  const handleLastName = (value) => {
    let err = errr;
    if (value == "") {
      err.lastname = "last Name is Required";
    } else {
      err.lastname = "";
    }
    setErrr(err);
    setLastName(value);
  };

  const handlecheckData = () => {
    if (handeValidation()) {
      let data = {
        firstname,
        lastname,
      };
      localStorage.setItem('stepTwo',JSON.stringify(data))
      navigate('/stepthree')
    }
  };
  return (
    <div>
      <h2> Step Two</h2>
      <div>
        {" "}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: "20px",
            marginBottom: "10px",
          }}
        >
          <input
            type="text"
            value={firstname}
            placeholder="pleae enter first name"
            onChange={(e) => handleFirstVlidation(e.target.value)}
          />
        </div>
        <h6
          style={{
            color: "red",
          }}
        >
          {errr.firstname}
        </h6>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: "20px",
            marginBottom: "10px",
          }}
        >
          <input
            type="text"
            value={lastname}
            placeholder="pleae enter last name"
            onChange={(e) => handleLastName(e.target.value)}
          />
        </div>
        <h6
          style={{
            color: "red",
          }}
        >
          {errr.lastname}
        </h6>
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
        <button
          onClick={() => {
            handlecheckData();
          }}
        >
          {" "}
          Submit
        </button>
      </div>
    </div>
  );
}
