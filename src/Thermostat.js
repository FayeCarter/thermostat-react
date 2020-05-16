import React, { Component } from 'react';

export class Thermostat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: 20
    }
  }
  render() {
  
    return (
      <div className="Thermostat">
        <h1>Thermostat</h1>
        <p id="temp">Temperature: {this.state.temp}</p>
      </div>
    );
  }
}

export default Thermostat;
