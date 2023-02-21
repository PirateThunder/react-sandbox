import React from "react";

class ClassCounter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: parseInt(props.value) || 0};
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      this.setState({value: this.state.value+1});
    };
    render() {
      return <button onClick={this.handleClick}>{this.state.value}</button>;
    }
}

export default ClassCounter;