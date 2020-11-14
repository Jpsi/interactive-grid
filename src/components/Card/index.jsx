import React from "react";
import "./Card.css";

const Card = (props) => (
  <div className="card">
    <div className="card-title"> {props.cardTitle} </div>
    <div className="card-thumbnail"> Thumbnail goes here </div>
  </div>
);

export default Card;
