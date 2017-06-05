import React, { Component } from 'react';
import classnames from 'classnames';

//import BtnIcon from '../components/BtnIcon';

const Button = (props) => {
  const {floating,color,icon,
         positionIcon,txt,link,
         fixed,horizontal,clickToggle,
         floatingIcon, wavesLigh, wavesTeal,
         btn, btnFlat, btnLarge,classExtra,
         disabled, wavesEffect,children
        } = props;

  let wavesEffectClass = classnames(
    {'waves-effect': wavesEffect},
    {'': disabled}
  );
  let fixedBtn = classnames(
    {'fixed-action-btn': fixed},
    {horizontal: horizontal},
    {'click-to-toggle': clickToggle}
  );
  let waves = classnames(
    {'waves-light': wavesLigh},
    {'waves-teal': wavesTeal}
  );
  let disabledbtn = classnames(
    {'disabled': disabled}
  );
  let typeBtn = classnames(
    {'btn': btn},
    {'btn-flat': btnFlat},
    {'btn-large': btnLarge},
  );

  return(
     <div className={`btn-container ${fixedBtn}`}>
      <a className= {`${wavesEffectClass} ${waves} ${floating} ${typeBtn} ${color} ${disabledbtn} ${classExtra}`} href={link}>
        {children}
        {txt}
      </a>
    </div>

  )
}

export default Button;
