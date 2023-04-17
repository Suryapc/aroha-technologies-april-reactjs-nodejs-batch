import React, { Component } from "react";
import Person from "./Person";
import SideBar from "./SideBar";

class App extends Component {
  state = {
    persons: [
      { name: "max", age: 24 },
      { name: "jack", age: 26 },
      { name: "scott", age: 28 },
      { name: "adam", age: 23 },
    ],
    showPersons: false,
  };

  switchNameHandler = (n1, a1) => {
    this.setState({
      persons: [
        { name: "max1", age: 24 },
        { name: n1, age: a1 },
        { name: "scott1", age: 28 },
      ],
    });
  };

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: "max", age: 24 },
        { name: event.target.value, age: 26 },
        { name: "scott", age: 28 },
      ],
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow,
    });
  };

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons,
    });
  };

  render() {
    let btnStyle = {
      backgroundColor: "#fff",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                click={() => this.switchNameHandler("watr", 33)}
                change={this.nameChangeHandler}
                delete={() => this.deletePersonHandler(index)}
              >
                My Hobbies: Racing
              </Person>
            );
          })}
        </div>
      );
    } else {
      persons = (
        <div>
          <p>no such records found!</p>
        </div>
      );
    }
    return (
      <div className="container">
        {/* row */}
        <div className="row">
          <SideBar />
          <div className="col-sm-9">
            <h4>Content Area</h4>
            <hr />

            <button
              style={btnStyle}
              type="button"
              onClick={this.switchNameHandler.bind(this, "javad", 29)}
            >
              Switch Name
            </button>

            <button
              type="button"
              style={btnStyle}
              onClick={this.togglePersonsHandler}
            >
              Toggle
            </button>

            <br />

            {persons}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
