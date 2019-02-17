import React, { Component } from 'react';
import '../styles/main.css';
import Button from './Button';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      output: 12345678
    };
  }
  render() {
    return (
      <div className="main">
        <div className="calculator">
          <div style={{backgroundColor: '#1c1b1b', color: 'white', margin: 10, borderRadius: 30, display: 'flex', alignItems: 'center'}}>
            <h1>{this.state.output}</h1>
          </div>
          <div className="buttons">
            <Button character="1" value="1"/>
            <Button character="2" value="2"/>
            <Button character="3" value="3"/>
            <Button character="/" value="/"/>
            <Button character="4" value="4"/>
            <Button character="5" value="5"/>
            <Button character="6" value="6"/>
            <Button character="x" value="*"/>
            <Button character="7" value="7"/>
            <Button character="8" value="8"/>
            <Button character="9" value="9"/>
            <Button character="-" value="-"/>
            <Button character="=" value="="/>
            <Button character="." value="."/>
            <Button character="0" value="0"/>
            <Button character="+" value="+"/>
          </div>
        </div>
      </div>
    );
  }
}