import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      equation: []
    }
  }

  render() { 
    return ( 
      <div className="button" onClick={e => this.props.onClick(this.props.value)}>
        <p>{this.props.character}</p>
      </div>
    );
  }
}
 
export default Button;