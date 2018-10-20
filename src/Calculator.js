import React, { Component } from 'react';

export default class Calculator extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="calculator">
                <div className="display" id="display"></div>
                <div className="keypad">
                    <button id="equals">=</button>
                    <button id="zero">0</button>
                    <button id="one">1</button>
                    <button id="two">2</button>
                    <button id="three">3</button>
                    <button id="four">4</button>
                    <button id="five">5</button>
                    <button id="six">6</button>
                    <button id="seven">7</button>
                    <button id="eight">8</button>
                    <button id="nine">9</button>
                    <button id="add">+</button>
                    <button id="subtract">-</button>
                    <button id="multiply">x</button>
                    <button id="divide">/</button>
                    <button id="decimal">.</button>
                    <button id="clear">CE</button>
                </div>
            </div>
        );
    };
}