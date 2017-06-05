import _ from 'lodash';
import {FETCH_IMG} from '../actions/image';


export default function(state= {}, action){
  switch(action.type){

  case FETCH_IMG:
    return _.mapKeys(action.payload.data, 'id');

    default:
      return state;
  }
}
