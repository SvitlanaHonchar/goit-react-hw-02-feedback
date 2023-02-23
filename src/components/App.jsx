import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import React, { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
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
          options={Object.entries(this.state)}
          // onLeaveFeedback={''}
        />
      </div>
    );
  }
}

export default App;
