import React from "react";
import "./Card.css";

const Card = (props) => (
  <div className="card">
    <div className="card-title"> {props.cardTitle} </div>
    <img className="card-image" src={props.cardImage} />
  </div>
);

export default Card;
