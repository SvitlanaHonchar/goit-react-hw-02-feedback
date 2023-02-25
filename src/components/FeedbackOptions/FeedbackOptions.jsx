import React, { Component } from 'react';

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;

    // console.log(options);
    return (
      <div>
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
      </div>
    );
  }
}

export default FeedbackOptions;
