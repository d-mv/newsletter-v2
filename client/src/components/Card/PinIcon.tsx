import React, { useState } from 'react';
import { Icon } from '../../styles/card';
import { Pin } from '../../icons';

export interface PIProps {
  _id: string;
  star: boolean;
}

const PinIcon = ({ _id, star }: PIProps) => {
  const [hover, setHover] = useState('');

  return (
    <Icon onMouseOver={() => setHover(_id)} onMouseLeave={() => setHover('')}>
      <Pin star={star} hover={hover === _id} />
    </Icon>
  );
};

export default PinIcon