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

  it('has a down button that will decrease the temperature', () => {
    wrap.find('#down').simulate('click')
    expect(wrap.find('#temp').text()).toEqual('Temperature: 19')
  });

  it('has a minimum temperature of 10 degrees', () => {
    for (let i = 0; i < 11; i++) {
      wrap.find('#down').simulate('click');
    }
    expect(wrap.find('#temp').text()).toEqual('Temperature: 10')
  });

  it('has a maximum temperature of 25 degrees in power saving mode', () => {
    expect(wrap.find('#psm').text()).toEqual('Power Saving Mode: On')
    for (let i = 0; i < 6; i++) {
      wrap.find('#up').simulate('click');
    }
    expect(wrap.find('#temp').text()).toEqual('Temperature: 25')
  });

  it('has a maximum temperature of 32 degrees', () => {
    wrap.find('#power-save').simulate('click');
    // expect(wrap.find('#psm').text()).toEqual('Power Saving Mode: Off');
    for (let i = 0; i < 13; i++) {
      wrap.find('#up').simulate('click');
    }
    expect(wrap.find('#temp').text()).toEqual('Temperature: 32')
  });

  it('has power saving on by default', () => {
    expect(wrap.find('#psm').text()).toEqual('Power Saving Mode: On')
  });

  it('has power saving can be toggled', () => {
    wrap.find('#power-save').simulate('click');
    expect(wrap.find('#psm').text()).toEqual('Power Saving Mode: Off')
    wrap.find('#power-save').simulate('click');
    expect(wrap.find('#psm').text()).toEqual('Power Saving Mode: On')
  });

  it('temperature can be reset to 20t', () => {
    for (let i = 0; i < 7; i++) {
      wrap.find('#up').simulate('click');
    }
    wrap.find('#reset').simulate('click');
    expect(wrap.find('#temp').text()).toEqual('Temperature: 20')
  });
})
  
