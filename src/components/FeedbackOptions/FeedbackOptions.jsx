import React, { Component } from 'react';

class FeedbackOptions extends Component {
  render() {
    const {
      options,
      onLeaveFeedback,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
    } = this.props;
    const total = countTotalFeedback();
    const positiveFeedbackPercentage =
      countPositiveFeedbackPercentage().toFixed(0);
    // console.log(options);
    return (
      <div>
        <h2>Please leave feedback</h2>
        <ul>
          <button type="button" onClick={onLeaveFeedback}>
            Good
          </button>
          <button type="button" onClick={onLeaveFeedback}>
            Neutral
          </button>
          <button type="button" onClick={onLeaveFeedback}>
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
          <li>Total: {total}</li>
          <li>
            Positive Feedback: {total > 0 ? positiveFeedbackPercentage : '0'}%
          </li>
        </ul>
      </div>
    );
  }
}

export default FeedbackOptions;
