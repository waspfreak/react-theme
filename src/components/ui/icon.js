import React, { Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';


const Icon = (props) => {
    const {icon, sizeIcon, color, left, right, extraClass, iconContainer} = props;

    let positionIcon = classnames(
      {'left': left},
      {'right': right}
    );

    return (
        <div className={`${iconContainer}`}>
          <i className={`${sizeIcon} material-icons ${positionIcon} ${extraClass} ${color}-text`}>{icon}</i>
        </div>
    )
}

export default Icon;
