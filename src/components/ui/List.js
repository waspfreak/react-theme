import React, { Component, PropTypes} from 'react';
import SimpleList from './simple_list';
import classnames from 'classnames';
import { Link } from 'react-router';

const List = (props) => {
  const {className,
         SimpleClassName,
         id} =  props;

  const SimpleListItem = props.items.map((item) => {
    return <SimpleList key={item.id} item={item}/>
  });

  return(
      <div className={SimpleClassName}>
          <ul id={id} className={className}>
            {SimpleListItem}
          </ul>
      </div>

  );
};

export default List;
