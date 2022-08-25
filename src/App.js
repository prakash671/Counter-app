import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import React,{ Component } from 'react';
import Counter from './components/counter/Counter';

class App extends Component {
  
  render(){
    return (
    <div className="App">
      <ChildApp></ChildApp>
      <Counter/>
    </div>
  );}
}
export default App;

class ChildApp extends Component{

 
  render(){
    return (
    <div className="App">
      <FirstComponent></FirstComponent>
      <SecondComponent></SecondComponent>
    </div>
  );}
}
