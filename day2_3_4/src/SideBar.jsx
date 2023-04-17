import React from "react";
import family from "./assets/images/family.png";

const SideBar = () => {
  let imgStyle = {
    width: "130px",
    padding: "10px 15px",
  };
  return (
    <div className="col-sm-3 sidebar">
      <h4>Businesses and organizations</h4>
      <img src={family} style={imgStyle} />
      <ul>
        <li>AirTran Airways (IATA airline code), defunct American airline</li>
        <li>
          FL Group, an Icelandic investment company with an emphasis on flight
          and tourism industry
        </li>
        <li>Foot Locker (ticker symbol), retailer</li>
      </ul>
    </div>
  );
};

export default SideBar;
