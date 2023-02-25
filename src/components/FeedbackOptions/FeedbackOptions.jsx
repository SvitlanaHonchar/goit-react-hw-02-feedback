import React, { Component } from 'react';

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;

    // console.log(options);
    return (
      <div>
        <ul>
          {options.map((option, idx) => {
            return (
              <li key={idx}>
                <button type="button" onClick={onLeaveFeedback}>
                  {option.charAt(0).toUpperCase() + option.slice(1)}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default FeedbackOptions;
