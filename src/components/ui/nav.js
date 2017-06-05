import React, { Component, PropTypes} from 'react';
import NavList from './nav_list';
import classnames from 'classnames';
import { Link } from 'react-router';

const Nav = (props) => {
  const {className,
        navClassName,
         id,
         navWrapper,
         logoLink} =  props;

  const NavListItem = props.items.map((item) => {
    return <NavList key={item.id} item={item}/>
  });

  return(
      <div className={navClassName}>
          {/* <Link className="brand-logo" to={logoLink}>logo</Link> */}
          <ul id={id} className={className}>
            {NavListItem}
          </ul>
      </div>

  );
};

export default Nav;
