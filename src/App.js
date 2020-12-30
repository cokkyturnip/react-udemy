import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "aliksg2", name: "Maximilian", age: 28 },
      { id: "dsfgw3", name: "Manu", age: 29 },
      { id: "jhj3", name: "Stephanie", age: 26 },
    ],
    otherState: "just other state",
    toggle: false,
  };

  // switchPersonHandler = () => {
  //   this.setState({
  //     persons: [
  //       { id: "aliksg2", name: "Maximilian", age: 28 },
  //       { id: "dsfgw3", name: "Manu", age: 29 },
  //       { id: "jhj3", name: "Stephanie", age: 26 },
  //     ],
  //   });
  // };

  togglePersonHandler = () => {
    // if(this.state.toggle)
    this.setState({ toggle: !this.state.toggle });
  };

  deletePersonHandler = (index) => {
    let listPerson = [...this.state.persons];
    listPerson.splice(index, 1);
    this.setState({ persons: listPerson });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(
      (person) => person.id === id
    );

    // const changedName = event.target.value;
    let newPerson = { ...this.state.persons[personIndex] };
    newPerson.name = event.target.value;

    let listPerson = [...this.state.persons];
    listPerson.splice(personIndex, 1, newPerson);
    this.setState({
      persons: listPerson,
    });

    // console.log(event.target.value);
  };

  render() {
    let persons = null;
    if (this.state.toggle)
      persons = this.state.persons.map((p, index) => {
        return (
          <Person
            clicked={() => this.deletePersonHandler(index)}
            name={p.name}
            age={p.age}
            onchange={(event) => this.nameChangedHandler(event, p.id)}
            // onchange={this.nameChangedHandler}
            key={p.id}
          />
        );
      });

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <br />
        <button onClick={this.togglePersonHandler}>Please Click Me</button>
        {persons}
      </div>
    );
  }
}

export default App;
