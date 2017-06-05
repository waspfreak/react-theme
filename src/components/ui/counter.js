import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';


const Counter = (props) => {
  const {txt, number, value} = props;


  return(
    <div className="counter">
      <p className="counter_number">{number} <span className="counter_number-sec">{value}</span></p>
      <p className="counter_txt">{txt}</p>
    </div>

  )
}

export default Counter;
