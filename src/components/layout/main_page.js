import React, { Component } from 'react';

import Header from './header';
import Footer from './footer';
import Col from '../ui/columns';
import Row from '../ui/row';
import Title from '../ui/title';

const MainLayout = ({children}) => {
  return (
    <div>
      <Header/>
        <div className="layout">
          {children}
        </div>
      <Footer/>
    </div>
  )
}
export default MainLayout;
