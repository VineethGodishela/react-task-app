import React, { useEffect, useState } from "react";
import axios from "axios";
export default function Task() {
  let [mydata, setdata] = useState([]);
  useEffect(() => {
    //  first axios.get("http://localhost:3000/tasks")
    //after backend deployment
    axios
      .get("https://react-task-app-sxlx.onrender.com/tasks")
      .then((res) => {
        // console.log(res.data);
        setdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {mydata.map((cv) => {
        return (
          <div>
            <h1>{cv.id}</h1>
            <h2>{cv.title}</h2>
          </div>
        );
      })}
    </div>
  );
}
