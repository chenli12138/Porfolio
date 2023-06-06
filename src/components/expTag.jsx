import React from "react";
import checkImg from "../assets/checkmark.png";

const ExpTag = ({ code, lvl }) => {
  return (
    <>
      <article>
        <img src={checkImg} alt="Experience icon" className="icon" />
        <div>
          <h3>{code}</h3>
          <p>{lvl}</p>
        </div>
      </article>
    </>
  );
};

export default ExpTag;
