import React, { Component } from 'react';

export class Footer extends Component{
    login(){
        alert("## Welcome ##")
    }
    render(){
        return(
            <div>
                <br></br>Name: <input type="string" onBlur={this.onBlur} /><button onClick={this.login}>login</button>
                
            </div>
        )
    }
}