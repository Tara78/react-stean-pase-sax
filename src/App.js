
import './App.css';
import React from 'react'; 
import ChooseWeapen from './chooesWeapen'; 
import ChooseWinner from'./chooesWinner';

// En 


class App extends React.Component {
  constructor(){
    super(); 

    this.state={
      user:'', 
      computer:'', 
      weapons:['sax', 'stean', 'pase']
    }
    this.handleClick= this.handleClick.bind(this);
  }
randomComputerWeapon(){
  const randomNumber = Math.round(Math.random()*2); 

  this.setState({computer: this.state.weapons[randomNumber]});
}

  handleClick(event){
    console.log ('Du clickade pa ', event.target.value); 
    this.setState({user: event.target.value});

    this.randomComputerWeapon();
  }
  
  render(){
  return (
  <section>
    <h1>Sten, sax eller pase</h1>
    <ChooseWeapen updateUser={ this.handleClick } />
    <ChooseWinner user={ this.state.user} computer={this.state.computer} />
  </section>

  )
}

}
export default App;
