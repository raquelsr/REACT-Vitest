import React from 'react';
import { icon } from './paths';
import { IconProps as Props } from './types';

export const Icon: React.FC<Props> = ({
  name,
  height,
  width,
  viewBox,
  ...rest
}) => (
  <svg width={width} height={height} viewBox={viewBox} {...rest}>
    {/* 
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    @ts-ignore */}
    <path fillRule='evenodd' d={icon[name]} />
  </svg>
);
