import React ,{Component} from "react";

class Name extends React.Component{
    constructor(props){
        super(props)
        this.state = {fName:""}
        this.title = this.title.bind(this)
    }

    title(event){
       const name =  event.target.value;
       this.setState({fName: name});
    }

    render(){
        return(
            <div>
            <h1>{this.state.fName}</h1>
            <input onChange = {this.title}></input>
            </div>
        )
    }
}

export default Name;