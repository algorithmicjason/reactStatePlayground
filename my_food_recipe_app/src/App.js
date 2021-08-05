
import React, { Component } from 'react'; 
import './App.css';

export default class App extends Component{

  state= {
    answered: false,
    color: 'red'
  }
  updateState = () => {
    
    this.setState({answered: true})
    
  }
  updateColorState = () =>{
    this.setState({
      color: "blue"
    })
  }
  render() {
    
    return (
      <div className="App">
        <h1 className="Question">Best Breakfast of all time?</h1>
        <select className="Answer">
            <option>Cererals</option>
            <option>Cookies</option>
            <option>Sandwhich</option>
            <option>Tacos</option>
            <option>PB&J</option>
        </select>
        <button onClick={this.updateState}>confirm</button>

        <h1>favorite color</h1>
        <select>
          <option>Blue</option>
        </select>
       <button onClick={this.updateColorState}>Submit Color</button>

      </div>
    );
    }
}



