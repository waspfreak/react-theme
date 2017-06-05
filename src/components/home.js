import React, { Component } from 'react';

import Title from './ui/title';
import Col from './ui/columns';
import Row from './ui/row';
import Button from './ui/button';
import Icon from './ui/icon';
import Counter from './ui/counter';
import HalfContainer from './ui/half_container';
import SimpleCard from './ui/simple_card';
import icon from './ui/icon';
import List from './ui/List';

class Home extends React.Component {

  constructor(props){
    super(props);

    this.state =
    {
      list: [
      { id: 1, text: 'Home',iconContainerClass: '', icon: 'close', sizeIcon: 'small', color: 'blue', extraClass: 'extraClass' },
      { id: 2, text: 'Icons' },
      { id: 3, text: 'Cards' }
      ]
    }
  }

  render(){
      //console.log(this.props.posts);
    return(
      <div>
          <Row className="investors">
              <div className="container">
                <Col s={12}>
                  <Title tag="1" className="investors_title"
                         title="Investors"
                         subtitle="Jangada Mines PLC IPO is due on the London Stock Exchange on XXth May 2017" />
                </Col>

                <Col m={6} s={12}>
                  <p className="investors_txt">
                    Jangada Mines owns 100% of the Pedra Branca PGM Project located in Northeastern Brazil (state of Ceara).
                  </p>
                  <p className="investors_txt">
                    Pedra Branca is an advanced stage exploration project holding JORC Compliant M&I+I Resources of 1.0 Moz of PGM+Au. The deposits are at surface, amenable to open pit mining with a near-term development horizon. The previous owners, Anglo American Platinum, compiled a $35m database showing a considerable exploration upside with a target of 3-5Moz PGM.
                  </p>
                  <Row>
                    <Col m={6} s={12}>
                      <Button txt="View investor presentation" classExtra="banner-home_call_btn" wavesEffect wavesLigh btn color="blue-web" link="#">
                      </Button>
                    </Col>
                    <Col m={6} s={12}>
                      <Button txt="Invest in Jangada Mines" classExtra="banner-home_call_btn" wavesEffect wavesLigh btn color="blue-web" link="#">
                      </Button>
                    </Col>
                  </Row>
                </Col>

                <Col m={6} s={12}>
                  <Counter number="1.5" value="m" txt="Public shares available exclusively through AIM" />
                  <Counter number="100" value="%" txt="Equity to be made publicly available through AIM" />
                </Col>

              </div>
           </Row>


         <Row className="half">
             <Col m={6} s={12} className="half-container_box">
               <HalfContainer backGroundimg="http://localhost:8080/img/productionImage.png"
                              img="http://localhost:8080/img/increasing.svg" alt="home bloc img"
                              tag="3" title="Global Platinum Production is decreasing"
                              content_1="Forecast platinum deficit for 2016 has been revised by 64,000 ounces from 455,000 ounces to 520,000 ounces by the World Platinum Investment Council."
                              content_2="South Africa (RSA), the world’s largest producer of PGMs, is forecast to decrease output by 6% year on year. The country produced 5.5 million ounces in 2006, 4.19 million ounces in 2016 and is expected to produce >4 million ounces in 2017. RSA capital investment in platinum production has also fallen from $4 billion to $1 billion over the past 7 years." />
             </Col>
            <Col m={6} s={12} className="half-container_box">
             <HalfContainer backGroundimg="http://localhost:8080/img/demandImage.png"
                            img="http://localhost:8080/img/decreasing.svg" alt="home bloc img"
                            tag="3" title="Global Platinum Demand is increasing"
                            content_1="Platinum demand is expected to reach 9 million ounces by 2025, leaving a substantial supply gap without substantial increases in production capacity."
                            content_2="Demand for platinum jewelery in India expected to increase 20% year over year. Autocatalysts demand for PGMs as major markets continue to implement emissions controls and new regulations on auto emissions." />
            </Col>
         </Row>

         <Row className="key-reading">
          <div className="container valign-wrapper">
            <Row>
             <Col m={3} s={12}><Title title="Key Reading" tag="4" class="key-reading_title"/></Col>

             <Col m={3} s={12}>
                <SimpleCard
                  backgroundColor="#fff"
                  title="Big drop in South Africa platinum output"
                  tag="h4"
                  icon="trending_down" sizeIcon="medium" color="white"
                  href="#" link="mining.com"/>

                <SimpleCard
                  backgroundColor="#fff"
                  title="Platinum has best price improvement prospects – Major"
                  tag="h4"
                  icon="query_builder" sizeIcon="medium" color="white"
                  href="#" link="mining.com"/>
             </Col>

             <Col m={3} s={12}>
               <SimpleCard
                 backgroundColor="#fff"
                 title="Platinum tech ready to cut costs"
                 tag="h4"
                 icon="query_builder" sizeIcon="medium" color="white"
                 href="#" link="miningweekly.com"/>
               <SimpleCard
                 backgroundColor="#fff"
                 title="Platinum tech ready to cut costs"
                 tag="h4"
                 icon="query_builder" sizeIcon="medium" color="white"
                 href="#" link="miningweekly.com"/>
             </Col>

             <Col m={3} s={12}>
               <SimpleCard
                 backgroundColor="#fff"
                 title="Copper, platinum key to future of auto industry, mining financier says"
                 tag="h4"
                 icon="query_builder" sizeIcon="medium" color="white"
                 href="#" link="miningweekly.com"/>
               <SimpleCard
                 backgroundColor="#fff"
                 title="Platinum tech ready to cut costs"
                 tag="h4"
                 icon="repeat_one" sizeIcon="medium" color="white"
                 href="#" link="miningweekly.com"/>
             </Col>
            </Row>
          </div>
         </Row>

            <div>
              <div className="container">
               <Row className="">
                  <Col m={3} s={12}><Title title="Key Reading" tag="4" class="key-reading_title"/></Col>
                  <Col m={9} s={12}>
                    {/* <ul>
                      <li> <Icon  iconContainer="list_icon-container" icon="play_arrow" sizeIcon="small" color="blue" extraClass="list_icon"/>List</li>
                    </ul> */}
                    <List items={this.state.list}/>
                  </Col>
                </Row>
              </div>
            </div>
        </div>

    );
  }
}

export default Home;
