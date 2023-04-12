import React, { Component } from "react";
import family from "./assets/images/family.png";
import Person from "./Person";

class App extends Component {
  render() {
    let imgStyle = {
      width: "130px",
      padding: "10px 15px",
    };
    return (
      <div className="container">
        {/* row */}
        <div className="row">
          <div className="col-sm-3 sidebar">
            <h4>Businesses and organizations</h4>
            <img src={family} style={imgStyle} />
            <ul>
              <li>
                AirTran Airways (IATA airline code), defunct American airline
              </li>
              <li>
                FL Group, an Icelandic investment company with an emphasis on
                flight and tourism industry
              </li>
              <li>Foot Locker (ticker symbol), retailer</li>
            </ul>
          </div>
          <div className="col-sm-9">
            <h4>Content Area</h4>
            <hr />
            <Person name="max" age="23" />
            <Person name="jack" age="26">
              My Hobbies: Racing
            </Person>
            <Person name="scott" age="36" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
