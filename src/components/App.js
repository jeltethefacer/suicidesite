import React, { Component } from 'react';
import Tapes from "./Tapes"
import Header from "./Header"

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header/>
        <Tapes/>
      </div>
    );
  }
}

export default App;
