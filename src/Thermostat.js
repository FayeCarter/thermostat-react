import React, { Component } from 'react';

export class Thermostat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: 20
    }
  }

  up = () => {
    this.setState({temp: this.state.temp + 1});
  }
  
  render() {
    return (
      <div className="Thermostat">
        <h1>Thermostat</h1>
        <p id="temp">Temperature: {this.state.temp}</p>
        <button id="up" onClick={this.up}>+</button>
      </div>
    );
  }
}

export default Thermostat;
