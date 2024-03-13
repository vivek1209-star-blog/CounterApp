import React from "react";
import { Link, useParams } from "react-router-dom";

export const Page2 = () => {
  const { counter } = useParams();
  const backgroundColor = counter % 2 === 0 ? "blue" : "green";

  return (
    <>
    <div style={{ backgroundColor }}>
      <p>{counter}</p>
      
      <p style={{ color: "blue" }}> Text 12</p>
      </div>
      <Link to="/page1">Go to Page 1</Link>
      </>
  );
};
