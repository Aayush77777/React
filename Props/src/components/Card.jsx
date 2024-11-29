import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card " style={{overflow:"hidden"}}>
      <img src="https://th.bing.com/th/id/OIP.o_23pifDkX7hTNH6hnW4HAHaE3?rs=1&pid=ImgDetMain" width={333} alt="" style={{border:"2px solid black"}}/>
      <h1>{props.title}</h1>
      <p>{props.discription}</p>
    </div>
  );
};

export default Card;
