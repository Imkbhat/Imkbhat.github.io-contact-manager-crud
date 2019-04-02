import React, { Component } from "react";

class Test extends Component {
  state = {
    title: "",
    body: ""
  };
  componentDidMount() {
    //ajax call goes here
    //HTTP Calls to API and BackEnd
    console.log("componentDidMount..");
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          body: data.body
        })
      );
  }

  /*componentWillMount() {
    // runs before didmount
    console.log("componentWillMount..");
  }

  componentDidUpdate() {
    //this runs when component Updates
    console.log("componentDidUpdate..");
  }

  componentWillUpdate() {
    //this runs when component Updates
    console.log("componentWillUpdate..");
  }

  componentWillReceiveProps(nextProps, nextState) {
    // in redux
    console.log("componentWillReceiveProps..");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return null;
  }*/

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>Test Component</h1>
        <h2>{title}</h2>
        <h4>{body}</h4>
      </div>
    );
  }
}

export default Test;
