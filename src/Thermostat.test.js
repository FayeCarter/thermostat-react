import React from 'react';
import { shallow } from 'enzyme';
import Thermostat from './Thermostat.js'

let thermostat = new Thermostat();


describe(Thermostat, () => {
  let wrap;

  beforeEach(() => {
    wrap = shallow(<Thermostat />);
  });

  it('has a temperature of 20 degrees', () => {
    expect(thermostat.state.temp).toEqual (20);
    expect(wrap.find('#temp').text()).toEqual('Temperature: 20')
  });

  it('has an up button that will increase the temperature', () => {
    wrap.find('#up').simulate('click')
    expect(wrap.find('#temp').text()).toEqual('Temperature: 21')
  });
})
  
