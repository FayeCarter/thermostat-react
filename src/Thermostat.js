import React, { Component } from 'react';
import Thermometer from 'react-thermometer-component'

export class Thermostat extends Component {
  constructor(props) {
    super(props);
    this.default = 20;
    this.minTemp = 10;
    this.state = {
      maxTemp: 25,
      temp: this.default,
      powerSaving: true
    }
  }

  reset = () => {
    this.setState({temp: this.default});
  }

  up = () => {
    if( this.state.temp < this.state.maxTemp ) {
      this.setState({temp: this.state.temp + 1});
    }
  }

  down = () => {
    if( this.state.temp > this.minTemp ) {
      this.setState({temp: this.state.temp - 1});
    }
  }

  powerSave = () => {
    this.setState({
      powerSaving: !this.state.powerSaving,
      maxTemp: !this.state.powerSaving ? 25 : 32
    })
    if(this.state.temp > 25) {
      this.state.temp = 25;
    }
  }
  
  render() {
    let powerSaving = this.state.powerSaving ? 'On' : 'Off'
    return (
      <div id="container">
        <div className="Thermostat">
          {/* <h1>Thermostat</h1> */}
          <p id="temp">Temperature: {this.state.temp}</p>
          <p id="psm">Power Saving Mode: {powerSaving}</p>
          <div className="buttons">
            <button id="power-save" onClick={this.powerSave}>Mode</button>
            <button id="reset" onClick={this.reset}>Reset</button>
            <div className="tempControl">
              <button id="up" onClick={this.up}>+</button>
              <button id="down" onClick={this.down}>-</button>
            </div>
          </div>
        </div>
        
        <div className="Thermometer">
          <Thermometer
              min={0}
              max={35}
              theme="light"
              value={this.state.temp}
              size="large"
              height="300"
          />
        </div>
      </div>
    );
  }
}

export default Thermostat;
