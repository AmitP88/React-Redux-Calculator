/* eslint no-eval: 0 */

import React, { Component } from "react";

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayValues: ["0"],
      decimal: false
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(event) {
    switch (event.target.value) {
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
        if (this.state.displayValues[0] === "0") {
          this.setState(
            {
              displayValues: [event.target.value]
            },
            () => console.log(this.state.displayValues)
          );
        } else {
          this.setState(
            {
              displayValues: [...this.state.displayValues, event.target.value]
            },
            () => console.log(this.state.displayValues)
          );
        }
        break;
      case "CE":
        this.setState(
          {
            displayValues: ["0"],
            decimal: false
          },
          () => console.log(this.state.displayValues)
        );
        break;
      case ".":
        if (this.state.decimal === false) {
          this.setState(
            {
              displayValues: [...this.state.displayValues, event.target.value],
              decimal: true
            },
            () => console.log(this.state.decimal, this.state.displayValues)
          );
        } else if (this.state.decimal === true) {
          console.log("duplicate decimal");
        }
        break;
      case "+":
      case "-":
      case "*":
      case "/":
        this.setState(
          {
            decimal: false
          },
          () => this.state.decimal,
          this.state.displayValues
        );
        switch (this.state.displayValues[this.state.displayValues.length - 1]) { // i think this was something else before?? i dont remember
          case ".":
          case "+":
          case "-":
          case "*":
          case "/":
            console.log("duplicate operator!");

            let newState = this.state.displayValues;
            newState[newState.length - 1] = event.target.value;// i forgot where i was going with <this className=""></this>

            this.setState({
              // displayValues: [...newState]       does this work instead of the line below? 
              displayValues: [...newState] // set this.state.displayValues[this.state.dispolayValues.length - 1] to be event.target.value
            });

            break;
          default:
            if (typeof this.state.displayValues === "number") {
              this.setState(
                {
                  displayValues: [this.state.displayValues, event.target.value]
                },
                () => console.log(this.state.displayValues)
              );
            } else {
              this.setState(
                {
                  displayValues: [
                    ...this.state.displayValues,
                    event.target.value
                  ]
                },
                () => console.log(this.state.displayValues)
              );
            }

            break;
        }
        break;
      case "=":
        let array_string = this.state.displayValues.join("");
        let result = eval(array_string);
        this.setState(
          {
            displayValues: result,
            decimal: false
          },
          () => console.log(this.state.displayValues)
        );
        break;

      default:
        console.log("waiting to calculate..");
        break;
    }
  }

  render() {
    return (
      <div className="calculator">
        <div className="display" id="display">
          {this.state.displayValues}
        </div>
        <div className="keypad">
          <button id="equals" value="=" onClick={this.handleOnClick}>
            =
          </button>
          <button id="zero" value="0" onClick={this.handleOnClick}>
            0
          </button>
          <button id="one" value="1" onClick={this.handleOnClick}>
            1
          </button>
          <button id="two" value="2" onClick={this.handleOnClick}>
            2
          </button>
          <button id="three" value="3" onClick={this.handleOnClick}>
            3
          </button>
          <button id="four" value="4" onClick={this.handleOnClick}>
            4
          </button>
          <button id="five" value="5" onClick={this.handleOnClick}>
            5
          </button>
          <button id="six" value="6" onClick={this.handleOnClick}>
            6
          </button>
          <button id="seven" value="7" onClick={this.handleOnClick}>
            7
          </button>
          <button id="eight" value="8" onClick={this.handleOnClick}>
            8
          </button>
          <button id="nine" value="9" onClick={this.handleOnClick}>
            9
          </button>
          <button id="add" value="+" onClick={this.handleOnClick}>
            +
          </button>
          <button id="subtract" value="-" onClick={this.handleOnClick}>
            -
          </button>
          <button id="multiply" value="*" onClick={this.handleOnClick}>
            x
          </button>
          <button id="divide" value="/" onClick={this.handleOnClick}>
            /
          </button>
          <button id="decimal" value="." onClick={this.handleOnClick}>
            .
          </button>
          <button id="clear" value="CE" onClick={this.handleOnClick}>
            CE
          </button>
        </div>
      </div>
    );
  }
}