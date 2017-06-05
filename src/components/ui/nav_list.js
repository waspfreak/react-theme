import React from 'react'
//import { BrowserRouter, Route, Link } from 'react-router-dom'
import { Link } from 'react-router';


const NavList = ({item}) => {
  return <li key={item.id}>
          <Link to={item.link}>
            {item.text}
          </Link>>
        </li>
};

export default NavList;
