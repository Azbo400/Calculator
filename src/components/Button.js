import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      equation: []
    }
  }
  onClick = () => {
    console.log(this.props.character)
  }


  render() { 
    return ( 
      <div className="button" onClick={this.onClick}>
        <p>{this.props.character}</p>
      </div>
    );
  }
}
 
export default Button;