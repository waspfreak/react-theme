import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchImgs } from '../actions/image';

import Title from './ui/title';
import Col from './ui/columns';
import Row from './ui/row';

class ImgsIndex extends Component{

  componentDidMount() {
    //[fetchPosts] function we call inside the component come from ../actions/index function for get date
    this.props.fetchImgs()
  }

  constructor(props) {
    super();
     this.state = { active: [] };
     this.onclick = this.onclick.bind(this);
  }
  onclick(index){
      let active = this.state.active.slice();
      active[index] = !active[index];
      this.setState({active});
   }



  renderImages(){
    return _.map(this.props.postImg, post =>{
    let i = `${post.id}`;
      return(
          <div key={i}>
            <div className={`overlay ${this.state.active[i] ? 'active' : 'hide'}`} ></div>
            <div  onClick={()=>this.onclick(i)}
              index={post.id} className="col s12 m4 portafolio-sample">
              <div  className="card">
                <div className="card-image">
                    <img src={post.thumbnailUrl} />

                </div>
                <div className="card-content">
                  <Title tag="5" title={post.title} className="card-title" />
                </div>
              </div>
            </div>

            <div className={`detail-card col s6 ${this.state.active[i] ? 'active' : 'hide'}`}>
              <div className="card">
                <div>
                  <span className="detail-card_close" onClick={()=>this.onclick(i)}><i className="material-icons right">close</i></span>
                  <img className="detail-card_img" src={post.url} />
                  <Title tag="4" title={post.title} className="card-title" />
                  <p className="detail-card_text">{post.description}</p>
                </div>

              </div>
            </div>
          </div>
      );
    });
  }

  render(){
      //console.log(this.props.posts);
    return(
        <div>
          <Row>
            <Col s={12}>
              <Title tag="1"
                     title="This Portfolio"
                     className="title"
                     subtitle=" Can fruitful you’ll great darkness given called. Fifth divide. Fruit from." />
            </Col>
           </Row>
            <div className="row">
                {this.renderImages()}
            </div>
        </div>
    );
  }
}

function mapStateToProps(state){
  return { postImg: state.postImg};
}

export default connect(mapStateToProps, {fetchImgs}) (ImgsIndex);
