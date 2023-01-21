import styled from 'styled-components';
import { colors } from '@nx-test-zog/ui';

/* eslint-disable-next-line */
export interface TextProps {
  children: React.ReactNode;
  className?: string;
  color: 'primary' | 'secondary' | 'brand' | 'secondary-brand' | 'black';
  fontWeight?: 'regular' | 'medium' | 'semibold' | 'bold';
  fontSize: number;
}

const defaultProps: TextProps = {
  children: null,
  color: 'primary',
  fontWeight: 'regular',
  fontSize: 12,
};

export function Text({
  children,
  className,
  color,
  fontWeight,
  fontSize,
  ...props
}: TextProps) {
  return (
    <StyledText
      color={color}
      fontWeight={fontWeight}
      className={className}
      fontSize={fontSize}
      {...props}
    >
      {children}
    </StyledText>
  );
}

const StyledText = styled.p.attrs((props: TextProps) => props)`
  font-size: ${({ fontSize }) => `${fontSize}px`};
  color: ${({ color }) => {
    switch (color) {
      case 'primary':
        return colors.text.primary;
      case 'secondary':
        return colors.text.secondary;
      case 'brand':
        return colors.brand;
      case 'secondary-brand':
        return colors.secondaryBrand;
      case 'black':
        return '#1E1E1E';
      default:
        return colors.text.primary;
    }
  }};

  font-weight: ${({ fontWeight }) => {
    switch (fontWeight) {
      case 'regular':
        return 400;
      case 'medium':
        return 500;
      case 'semibold':
        return 600;
      case 'bold':
        return 700;
      default:
        return 400;
    }
  }};
`;

Text.defaultProps = defaultProps;

export default Text;
