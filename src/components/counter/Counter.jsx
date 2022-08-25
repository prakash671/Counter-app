

import React, { Component } from 'react';
import PropTypes from 'prop-types'
import "../counter/Counter.css"


  class Counter extends Component{
    constructor(){
        super();
        this.state={
           counter : 0
        }
        this.increment=this.increment.bind(this);
        this.decrement=this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }
    render(){
        return(

            <div className="counter">
      <span className='count'> {this.state.counter} </span>
      <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement}/>
      <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}/>
      <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}/>
       <button className='reset' onClick={this.reset}> Reset</button>
       
    </div>
        )
    }
    reset(){
        this.setState(()=> {
            return {counter: 0 }
        });
    }
    increment(by){
        // console.log(`incerment - ${by}`);

        this.setState((prevState)=> {
             return {counter: prevState.counter + by}
         });
    }

    decrement(by){
        // console.log(`decerment - ${by}`);

        this.setState((prevState)=> {
            return {counter: prevState.counter - by}
        });
    }
  }




 class CounterButton extends Component {
  
    constructor(){
        super();
        this.state={
           counter : 0
        }
        this.increment=this.increment.bind(this);
        this.decrement=this.decrement.bind(this);
    }

  render(){
    return (
        <div className='counter'>
        <button onClick={this.increment}> +{this.props.by} </button>
         
         <button onClick={this.decrement} style={{backgroundColor:"red"}} > -{this.props.by} </button>
     </div>
      )
  }  
  increment(){
   
  
    this.setState({
              counter: this.state.counter + this.props.by
    });
    this.props.incrementMethod(this.props.by);
} 
decrement(){
   
  
    this.setState({
              counter: this.state.counter - this.props.by
    });
     this.props.decrementMethod(this.props.by);
}
}


CounterButton.defaultProps = {
 by:1
}

CounterButton.propTypes = {
    by : PropTypes.number
}
export default Counter;
