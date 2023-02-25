import React, { Component } from 'react';

class Section extends Component {
  render() {
    const { title } = this.props;
    return (
      <section>
        <h2>{title}</h2>
        <div>{this.props.children}</div>
      </section>
    );
  }
}

export default Section;
