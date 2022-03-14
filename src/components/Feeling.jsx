import { Rate } from 'antd';
import React, { useState } from 'react';


const Feeling = (props) => {
  const state = useState({value : 3}); 

  const handleChange = (value) => {
    props.setState({ value });

  };

  const { value } =  state;
  console.log(value);
    
  return (
      <span>
        <Rate onChange={handleChange} value={value} />
        {value ? <span className="ant-rate-text">{[value - 1]}</span> : ''}
      </span>
    );

  }

export default Feeling;