import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import React, { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleBtnClick = event => {
    // console.log(event.target.textContent);
    this.setState(prevState => {
      return {
        [event.target.textContent.toLowerCase()]:
          prevState[event.target.textContent.toLowerCase()] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, value) => {
      return total + value;
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const positiveFeedbackPercentage = (this.state.good / total) * 100;
    return positiveFeedbackPercentage;
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 26,
          color: '#010101',
        }}
      >
        <FeedbackOptions
          onLeaveFeedback={this.handleBtnClick}
          options={Object.entries(this.state)}
          countTotalFeedback={this.countTotalFeedback}
          countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage}
        />
      </div>
    );
  }
}

export default App;
