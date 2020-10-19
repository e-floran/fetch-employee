import React from 'react';
import DisplayEmployee from './components/DisplayEmployee'
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      employee: sampleEmployee
    };
  }
  render() {
    return(
      <div className="App">
        <DisplayEmployee employee={this.state.employee}/>
        <button type="button" onClick={this.getEmployee}>Get employee</button>
      </div>
    )};
}

export default App;
