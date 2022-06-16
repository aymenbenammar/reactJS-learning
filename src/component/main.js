import React, { Component } from 'react';
class Counter extends Component {
   render() {
      const {counter,increment,decrement,reset,login,logout,isLogged} = this.props;
      return (
         <div className = "App">
            <div>{counter}</div>
            <div>
               <button onClick = {increment}>INCREMENT BY 1</button>
            </div>
            <div>
               <button onClick = {decrement}>DECREMENT BY 1</button>
            </div>
            <button onClick = {reset}>RESET</button>
            <div>{isLogged}</div>
            <div>
               <button onClick = {login}>LOGIN</button>
            </div>
            <div>
               <button onClick = {logout}>LOGOUT</button>
            </div>
         </div>
         
      );
   }
}
export default Counter;