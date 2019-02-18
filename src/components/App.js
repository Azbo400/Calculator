import React, { Component } from 'react';
import '../styles/main.css';
import Button from './Button';
import math from 'mathjs';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      output: "",
    };
  }

  calculateOperations = () => {
    // calculate the equation
    let result = this.state.output;
    if (result) {
      result = math.eval(result);
      result = math.format(result, { precision: 14 })
      this.setState({
        output: [result]
      })
    }
  }


  onClick = button => {
    if(button === "=") {
      this.calculateOperations();
    } else if(button === "C") {
      this.setState({ output: "" })
    }else {
      this.setState({
        output: this.state.output + button
      })
    }
  }

  render() {
    return (
      <div className="main">
        <div className="calculator">
          <div style={{backgroundColor: '#1c1b1b', color: 'white', margin: 10, borderRadius: 30, display: 'flex', alignItems: 'center'}}>
            <h1>{this.state.output}</h1>
          </div>
          <div className="buttons">
            <Button character="1" value="1" onClick={this.onClick}/>
            <Button character="2" value="2" onClick={this.onClick}/>
            <Button character="3" value="3" onClick={this.onClick}/>
            <Button character="/" value="/" onClick={this.onClick}/>
            <Button character="4" value="4" onClick={this.onClick}/>
            <Button character="5" value="5" onClick={this.onClick}/>
            <Button character="6" value="6" onClick={this.onClick}/>
            <Button character="x" value="*" onClick={this.onClick}/>
            <Button character="7" value="7" onClick={this.onClick}/>
            <Button character="8" value="8" onClick={this.onClick}/>
            <Button character="9" value="9" onClick={this.onClick}/>
            <Button character="-" value="-" onClick={this.onClick}/>
            <Button character="=" value="=" onClick={this.onClick}/>
            <Button character="." value="." onClick={this.onClick}/>
            <Button character="0" value="0" onClick={this.onClick}/>
            <Button character="+" value="+" onClick={this.onClick}/>
            <Button character="C" value="C" onClick={this.onClick}/>
          </div>
        </div>
      </div>
    );
  }
}