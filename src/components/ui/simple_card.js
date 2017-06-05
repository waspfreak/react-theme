import React, { Component } from 'react';

import Title from './title';
import Button from './button';
import Icon from './icon';



const SimpleCard = (props) => {
  const {title, tag, url, link, backgroundColor, icon, sizeIcon, color} = props;


  return(
    <div className="simple-card card-panel" style={{backgroundColor: `${backgroundColor}`}}>
      <Title tag={tag} title={title} className="simple-card_title"/>
      <a href={url}>{link}</a>
      <Icon  iconContainer="simple-card_icon-container" icon={icon} sizeIcon={sizeIcon} color={color} extraClass="simple-card_icon"/>
    </div>
  )
}

export default SimpleCard;
