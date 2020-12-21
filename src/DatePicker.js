import React, { Component } from "react";
import "./styles.css";

class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      birthdayDate: undefined,
      message: ""
    };
    this.onClickCheckLeapYearHandler = this.onClickCheckLeapYearHandler.bind(
      this
    );
  }

  onClickCheckLeapYearHandler() {
    if (
      this.state.birthdayDate === undefined ||
      this.state.birthdayDate.length !== 10
    ) {
      this.setState({
        message: "Please select or enter your birthday fully !"
      });
    } else {
      const birthdayDate = this.state.birthdayDate;
      const year = parseInt(birthdayDate.slice(0, 4), 10);
      return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
        ? this.setState({
            message: "You were born in a leap year !"
          })
        : this.setState({
            message: "You were not born in a leap year !"
          });
    }
  }

  onChangeBirthdayDateHandler = (event) => {
    this.setState({
      birthdayDate: event.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Simple leap year checker</h1>
        <div id="output">{this.state.message}</div>
        <input
          type="date"
          value={this.birthdayDate}
          onChange={this.onChangeBirthdayDateHandler}
        />
        <button type="button" onClick={this.onClickCheckLeapYearHandler}>
          check
        </button>
      </div>
    );
  }
}

export default DatePicker;
