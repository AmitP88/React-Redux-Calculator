import React, { Component } from 'react';

export default class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayValues : []
        }

        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(event) {
            switch(event.target.value) {
                case "0":
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7":
                case "8":
                case "9":
                    if(this.state.displayValues[0] === 0) {
                        this.setState({
                            displayValues: [Number(event.target.value)]
                        }, () => { console.log(this.state.displayValues); });
                    } else {
                        this.setState({
                            displayValues: [...this.state.displayValues, Number(event.target.value)]
                        }, () => { console.log(this.state.displayValues); });                        
                    }
                    break;
                case "CE":
                    this.setState({
                        displayValues: [0]
                    }, () => { console.log(this.state.displayValues); });
                    break;
                case "+":
                case "-":
                case "*":
                case "/":
                case ".":
                    this.setState({
                        displayValues: [...this.state.displayValues, event.target.value]
                    }, () => { console.log(this.state.displayValues); });
                    break;
                
            }
    }
    

    render() {
        return (
            <div className="calculator">
                <div className="display" id="display">{this.state.displayValues}</div>
                <div className="keypad">
                    <button id="equals">=</button>
                    <button id="zero" value="0" onClick={ this.handleOnClick }>0</button>
                    <button id="one" value="1" onClick={ this.handleOnClick }>1</button>
                    <button id="two" value="2" onClick={ this.handleOnClick }>2</button>
                    <button id="three" value="3" onClick={ this.handleOnClick }>3</button>
                    <button id="four" value="4" onClick={ this.handleOnClick }>4</button>
                    <button id="five" value="5" onClick={ this.handleOnClick }>5</button>
                    <button id="six" value="6" onClick={ this.handleOnClick }>6</button>
                    <button id="seven" value="7" onClick={ this.handleOnClick }>7</button>
                    <button id="eight" value="8" onClick={ this.handleOnClick }>8</button>
                    <button id="nine" value="9" onClick={ this.handleOnClick }>9</button>
                    <button id="add" value="+" onClick={ this.handleOnClick }>+</button>
                    <button id="subtract" value="-" onClick={ this.handleOnClick }>-</button>
                    <button id="multiply" value="*" onClick={ this.handleOnClick }>x</button>
                    <button id="divide" value="/" onClick={ this.handleOnClick }>/</button>
                    <button id="decimal" value="." onClick={ this.handleOnClick }>.</button>
                    <button id="clear" value="CE" onClick={ this.handleOnClick }>CE</button>
                </div>
            </div>
        );
    };
}