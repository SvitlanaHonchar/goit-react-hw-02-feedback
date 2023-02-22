import React, { Component } from 'react';

class FeedbackOptions extends Component {
  handleBtnClick(event) {
    console.log(event.target.textContent);
  }

  render() {
    const { options, onLeaveFeedback } = this.props;
    console.log(options);
    return (
      <div>
        <h2>Please leave feedback</h2>
        <ul>
          <button type="button" onClick={this.handleBtnClick}>
            Good
          </button>
          <button type="button" onClick={this.handleBtnClick}>
            Neutral
          </button>
          <button type="button" onClick={this.handleBtnClick}>
            Bad
          </button>
        </ul>

        <h2>Statistics</h2>
        <ul>
          {options.map((rate, idx) => {
            return (
              <li key={idx}>
                {rate[0]}: {rate[1]}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default FeedbackOptions;
