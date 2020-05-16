import React, { Component } from 'react';

export class Thermostat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: 20,
      minTemp: 10,
      maxTemp: 32,
      powerSaving: "On"
    }
  }

  up = () => {
    if( this.state.temp < this.state.maxTemp ) {
      this.setState({temp: this.state.temp + 1});
    }
  }

  down = () => {
    if( this.state.temp > this.state.minTemp ) {
      this.setState({temp: this.state.temp - 1});
    }
  }

  powerSave = () => {
    this.setState({powerSaving: "Off"})
    this.setState({maxTemp: 25})
  }
  
  render() {
    return (
      <div className="Thermostat">
        <h1>Thermostat</h1>
        <p id="temp">Temperature: {this.state.temp}</p>
        <p id="psm">Power Saving Mode: {this.state.powerSaving}</p>
        <button id="power-save" onClick={this.powerSave}>+</button>
        <button id="up" onClick={this.up}>+</button>
        <button id="down" onClick={this.down}>-</button>
      </div>
    );
  }
}

export default Thermostat;
