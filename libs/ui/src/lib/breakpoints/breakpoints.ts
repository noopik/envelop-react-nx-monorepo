import { generateMedia } from 'styled-media-query';

interface BreakpointsInterface {
  desktop: string;
  tablet: string;
  smartphone: string;
  phone: string;
}

export const breakpoints = generateMedia({
  desktop: '78em',
  tablet: '60em',
  smartphone: '46em',
  phone: '24rem',
} as BreakpointsInterface);
