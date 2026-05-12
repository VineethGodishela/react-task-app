import React, { useEffect, useState } from "react";
import axios from "axios";
export default function Task() {
  let [mydata, setdata] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/tasks")
      .then((res) => {
        // console.log(res.data);
        setdata(res.data)
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
