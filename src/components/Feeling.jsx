import { Rate } from 'antd';
import React, { useState } from 'react';


const Feeling = ({setfeel}) => {
  const [state, setState] = useState({value: 1 });


  
  const { value } = state;
  
  const handleChange = (value) => {
    setState({ value });
    setfeel({feel : value});
  };


  return (
      <span>
        <Rate onChange={handleChange} value={value} />
        {value ? <span className="ant-rate-text">{[value ]}</span> : ''}
      </span>
    );

  }

export default Feeling;