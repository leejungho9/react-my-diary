import { Rate } from 'antd';
import React from 'react';


class Feeling extends React.Component {
  state = {
    value: 3,
  };

  handleChange = value => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    return (
      <span>
        <Rate onChange={this.handleChange} value={value} />
        {value ? <span className="ant-rate-text">{[value - 1]}</span> : ''}
      </span>
    );
  }
}

export default Feeling;