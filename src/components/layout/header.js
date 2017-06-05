import React, { Component } from 'react';
import BannerHome from '../ui/banner_home';

//import Breadcrumbs from '../components/Breadcrumbs';

class Header extends React.Component {

render() {
  return(
      <div>
        <header>
          <BannerHome/>
        </header>
      </div>
  );
}


}

export default Header;
