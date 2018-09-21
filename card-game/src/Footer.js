import React, { Component } from 'react';

export class Footer extends Component{
    render(){
        return(
            <div>
                <br></br>Name: <input type="string" onBlur={this.onBlur} />
                
            </div>
        )
    }
}