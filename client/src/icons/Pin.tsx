import React from 'react';
import { accent, primary } from '../styles/tokens/colors';

export interface PProps {
  star: boolean;
  hover: boolean;
}

export const Pin = ({ star, hover }: PProps) =>
  star ? active(hover ? accent : primary) : regular(hover ? accent : primary);

const regular = (color: string) => (
  <svg viewBox='0 0 24.316 24.313'>
    <g
      fill='none'
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='1.5'>
      <path
        d='M196.948 366.784a1.5 1.5 0 00-.3 2.356l8.213 8.213a1.5 1.5 0 002.356-.3 7.521 7.521 0 00.81-5.54l6.53-4.155a1.5 1.5 0 00.253-2.328l-5.841-5.841a1.5 1.5 0 00-2.326.256l-4.155 6.529a7.521 7.521 0 00-5.54.81zM200.752 373.247l-8 8'
        transform='translate(-191.688 -357.998)'
      />
    </g>
  </svg>
);
const active = (color: string) => (
  <svg viewBox='0 0 24.316 24.313'>
    <g stroke={color} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5'>
      <path
        fill={color}
        fillRule='evenodd'
        d='M196.948 366.784a1.5 1.5 0 00-.3 2.356l8.213 8.213a1.5 1.5 0 002.356-.3 7.521 7.521 0 00.81-5.54l6.53-4.155a1.5 1.5 0 00.253-2.328l-5.841-5.841a1.5 1.5 0 00-2.326.256l-4.155 6.529a7.521 7.521 0 00-5.54.81z'
        transform='translate(-191.688 -357.998)'
      />
      <path
        fill='none'
        d='M200.752 373.247l-8 8'
        transform='translate(-191.688 -357.998)'
      />
    </g>
  </svg>
);
