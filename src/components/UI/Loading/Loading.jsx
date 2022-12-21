import React from 'react';
import ReactLoading from 'react-loading';

const Loading = ({ type, color }) => (
  <ReactLoading
    type={'spin'}
    color={'white'}
    delay={0}
    height={'10%'}
    width={'10%'}
  />
);

export default Loading;
