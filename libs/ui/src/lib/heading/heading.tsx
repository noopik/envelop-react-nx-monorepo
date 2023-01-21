import styled from 'styled-components';
import { colors } from '../colors/colors';

/* eslint-disable-next-line */
export interface HeadingProps {
  children: React.ReactNode;
  color: 'primary' | 'secondary' | 'brand';
  className?: string;
}

const defaultProps: HeadingProps = {
  children: null,
  color: 'primary',
};

const StyledHeading = styled.div.attrs((props: HeadingProps) => props)`
  font-weight: 700;
  font-size: 32px;

  color: ${({ color }) => {
    switch (color) {
      case 'primary':
        return colors.text.primary;
      case 'secondary':
        return colors.text.secondary;
      case 'brand':
        return colors.brand;
      default:
        return colors.text.primary;
    }
  }};
`;

export function Heading({
  children,
  className,
  color,
  ...props
}: HeadingProps) {
  return (
    <StyledHeading color={color} className={className} {...props}>
      {children}
    </StyledHeading>
  );
}

Heading.defaultProps = defaultProps;

export default Heading;
