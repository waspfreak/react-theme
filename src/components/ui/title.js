import React from 'react';
import classnames from 'classnames';

const Title = ({title, subtitle, tag, className}) => {

  const CustomTag = `h${tag}`;

  let hidden = classnames(
    'caption',
    {'is-hidden': !subtitle}
  );
  
  return(
    <div>
      <CustomTag className={className}>
        {title}
      </CustomTag>
      <p className={hidden}>
        {subtitle}
      </p>
    </div>
  );

}

export default Title;
