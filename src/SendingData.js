import axios from 'axios'
import React from 'react'
class SendingData extends React.Component{
    constructor(){
        super();
        this.state={
            username:"",
            password:""
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleClick=()=>{
        console.log(this.state.username,this.state.password)
        axios.post("http://localhost:5000/register",
        {email:this.state.username,password:this.state.password}
        )
        this.setState({
            username:"",
            password:""
        })
    }
    render(){
        return(
            <div>
                <input onChange={this.handleChange} value={this.state.username} placeholder="enter username" name="username"/>
                <input onChange={this.handleChange} value={this.state.password} placeholder="enter password" name="password"/>
                <button onClick={this.handleClick}>send</button>
            </div>
        )
    }
}
    
export default SendingData