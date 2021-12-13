import React,{Component} from "react";

class Timer extends React.Component{
    constructor(props){
        super(props);
        this.state={second: 0, text:""}
        this.secondUp=this.secondUp.bind(this);
        this.secondDown = this.secondDown.bind(this);
        this.delete = this.delete.bind(this);
        this.funcInput = this.funcInput.bind(this);
    }
    secondUp(){
        const nextSecond=this.state.second+1;
        this.setState({second: nextSecond})
    }
    secondDown(){
        const reversSecound = this.state.second-1;
        this.setState({second: reversSecound})
    }
    delete(){
        const zero = 0;
        this.setState({second: zero})
    }
    funcInput(event){
     
     const inp = event.target.value;
     this.setState({text: inp})

    }
    render(){
        return(
        <div>
            <h1>
             {this.state.second}
           
            </h1>

            <button onClick={this.secondUp}>Next</button>
            <button onClick = {this.secondDown}>Reverse</button>
            <button onClick = {this.delete}>Reset</button>
            <br></br>
            <input onChange ={this.funcInput}></input>
            <h1>  {this.state.text}</h1>
        </div>
        )
    }
}

export default Timer;