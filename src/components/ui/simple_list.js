import React from 'react';
import { Link } from 'react-router';
import Icon from './icon';


const SimpleList = ({item}) => {
  return <li key={item.id}>
            <Icon  iconContainerClass={item.iconContainerClass}
                   icon={item.icon} sizeIcon={item.sizeIcon}
                   color={item.color} extraClass={item.extraClass}/>
            {item.text}
        </li>
};

export default SimpleList;
