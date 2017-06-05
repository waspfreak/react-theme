import React, { Component } from 'react';
import Row from '../ui/row';
import Col from '../ui/columns';

class Footer extends Component{
  constructor(props){
    super(props);

    this.state =
    {
      nav: [
      { id: 1, text: 'Home', link: '/' },
      { id: 2, text: 'Icons', link: '/icons' },
      { id: 3, text: 'Cards', link: '/cards' },
      { id: 4, text: 'Buttons', link: '/buttons' },
      { id: 5, text: 'Badges', link: '/badges' },
      { id: 6, text: 'About', link: '/about' },
      ]
    }
  }

  render(){
    return(
        <footer className="page-footer">
         <div className="container">
            <Row className="">
              <Col s={12} l={4}  className='grid-example'>
                <h5 className="white-text">Footer Content</h5>
                <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
              </Col>

              <Col s={12} l={4} offset='l2' className='grid-example'>
                <h5 className="white-text">Links</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
                </ul>
              </Col>
            </Row>
          </div>
          <div className="footer-copyright">
            <div className="container">
              © 2014 Copyright Text
            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
         </footer>
    );
  }
}

export default Footer;
