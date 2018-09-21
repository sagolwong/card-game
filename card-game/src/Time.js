import React, { Component } from 'react';

export class Time extends Component{
    constructor(props){
        super(props)
        this.state = {
            time: 0
        }
        this.resetClicked = this.resetClicked.bind(this)
        setInterval(() => {
            this.setState({
                time: this.state.time+1
            })
        },1000)
    }
    resetClicked(){
        this.setState({
            time: 0
        })
    }
    render(){
        let {time} = this.state
        return(
            <div>Online Time: {time}
            <button onClick={this.resetClicked}>Reset Times</button>
            </div>
        )
        
    }
}
export default Time