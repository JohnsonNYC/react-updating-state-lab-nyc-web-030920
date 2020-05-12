// Code DigitalClicker Component Here
import React, { Component } from 'react'

export default class DigitalClicker extends Component{
    
    constructor(){ // INITIAL BUILD
        super()
        this.state = {
            timesClicked: 0 // STARTING AT 0
        }
    }

    handleClick = () =>{ // WHEN INVOKED, WILL UPDATE TIMESCLICKED
        this.setState(previousState => {
            return {
                timesClicked: previousState.timesClicked + 1
            }
        })
    }

    render(){
        return(
        <button onClick ={this.handleClick}>{this.state.timesClicked}</button>
        )
    }
}