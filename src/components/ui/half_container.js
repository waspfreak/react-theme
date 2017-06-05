import React, { Component } from 'react';

import Title from './title';
import Col from './columns';
import Row from './row';
import Button from './button';
import Icon from './icon';



const HalfContainer = (props) => {
  const {title, img, alt, tag, content_1, content_2, backGroundimg} = props;


  return(
    <div className="half-container" style={{backgroundImage: `url(${backGroundimg})`}}>
      <img src={img} alt={alt} className="half-container_img"/>
      <Title tag={tag} title={title} className="half-container_title" />
      <p className="half-container_content">{content_1}</p>
      <p className="half-container_content">{content_2}</p>
    </div>

  )
}

export default HalfContainer;
