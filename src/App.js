import React from 'react';
import Gejala from './Gejala';
import Header from './header';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      g1: false,      g2 : false,
      g3 : false,      g4 : false,      g5 :false,      g6 :false,      g7 :false,      g8 :false,      g9 :false,      g10 :false,      g11 :false,      g12 :false,      g13 :false,      g14 :false,      g15 :false,      g16 :false,      g17 :false,      g18 :false,      g19 :false,
      g20 :false,      g21 :false,      g22 :false,      g23 :false,     g24 :false,      g25 :false,      g26 :false,      g27 :false,
      g28 :false,     g29 :false,
      g30 :false,     g31 :false,
      g32 :false,     g33 :false,
      g34 :false,      g35 :false,
      g36 :false

    }
  }

  onGejalachange = (check)=>{
    console.log(check)
    
  }

  render(){
    return (
      <div className="App">
        <Header/>
          <Gejala onGejalachange={this.onGejalachange}/>
      </div>
    );
  }
  
}

export default App;
