import React from 'react';
import { Line } from '../../styles/layout';
import String from '../../styles/buttons/String';

interface SBProps {
  label: string;
  onClick: () => void;
}

export const StringButton = ({ label, onClick }: SBProps) => (
  <Line justify='center' onClick={() => onClick()}>
    <String>{label}</String>
  </Line>
);
