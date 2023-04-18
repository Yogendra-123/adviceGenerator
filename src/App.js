import React, { Component } from 'react'
import './App.css'
class App extends Component {
    state = { advice : " " };
    componentDidMount(){
        this.fetchAdvice();
    }
    fetchAdvice = () =>{
        // axios.get('https://api.adviceslip.com/advice').then((response)=>{
        //     const {advice} = response.data.slip;
        //     this.setState({advice})
        //     console.log(advice);
        // }).catch((error)=>{
        //     console.log(error);
        // })
        fetch('https://api.adviceslip.com/advice').then((response)=>response.json()).then((data)=>this.setState({advice:data}))
      }
      render() {
    return (
      <div className='app'>
        <div className='card'>
        <h1 className='heading'>{this.state.advice?.slip?.advice}</h1>
        <button className='button' onClick={this.fetchAdvice}>
            <span>Give Me Advice</span>
        </button>
        </div>
        
      </div>
    )
  }
}
export default App;