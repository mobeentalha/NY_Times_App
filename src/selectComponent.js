import React from 'react';
import { Select } from 'antd';

const SelectComponent = ({days, handleChange, className}) => {

  return (
    <Select
      defaultValue="1"
      size="middle"
      onChange={handleChange}
      options={days}
      className={className}
      style={{ width: 200 }} // Required for it to render visibly
    />
  );
};

export default SelectComponent;
