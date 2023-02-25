import React, { Component } from 'react';

class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    const totalFeedback = total();
    const positiveFeedbackPercentage = positivePercentage().toFixed(0);
    return (
      <div>
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {totalFeedback}</li>
          <li>
            Positive Feedback:{' '}
            {totalFeedback > 0 ? positiveFeedbackPercentage : '0'}%
          </li>
        </ul>
      </div>
    );
  }
}

export default Statistics;
