import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function StepOne() {
  const [checkNum, setCheckNum] = useState([]);
  const [addNum, setAddNum] = useState(["1"]);
  const [checkErr, setCheckErr] = useState([]);
  const navigate =useNavigate()

  const handleMinusData = (i, val) => {
    let chdg = addNum.filter((ws, ii) => ii !== i);

    let chdgSecond = checkNum.filter((w) => w !== val);
    setAddNum(chdg);
    setCheckNum(chdgSecond);
  };

  const handleUpdatefield = (value, index) => {
    let checkArr = [...checkNum];
    checkArr[index] = value;
    setCheckNum(checkArr);
  };

  const handleAddData=()=>{
    localStorage.setItem("stepOne",JSON.stringify(checkNum))
    navigate('/steptwo')
  }
  return (
    <>
      <h1> Enter Array field </h1>
      <button
        onClick={() => {
          let addpush = [...addNum];
          addpush.push("2");
          setAddNum(addpush);
        }}
      >
        {" "}
        add Filed{" "}
      </button>

      {addNum?.map((w, i) => {
        return (
          <div key={i}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent:'center',
                marginTop:'20px',
                marginBottom:'10px'
              }}
            >
              <input
                type="number"
                value={checkNum[i]}
                onChange={(e) => {
                  var reg = /^\d+$/;
                  if (reg.test(e.target.value)) {
                    handleUpdatefield(e.target.value, i);
                  } else if (e.target.value == "") {
                    handleUpdatefield(e.target.value, i);
                  }
                }}
              />{" "}
              <button
                onClick={() => {
                  handleMinusData(i ,checkNum[i]);
                }}
              >
                {" "}
                Minuss
              </button>
            </div>
          </div>
        );
      })}

      <button  onClick={()=>handleAddData()}> Submit Data</button>
    </>
  );
}
