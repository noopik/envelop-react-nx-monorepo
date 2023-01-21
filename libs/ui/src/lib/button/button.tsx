import styled from 'styled-components';
import { colors } from '../colors/colors';

/* eslint-disable-next-line */
export interface ButtonProps {
  children: React.ReactNode;
  colorScheme?: 'blue';
  variant?: 'solid' | 'outlined';
  size: 'small' | 'medium' | 'large';
  onClick: () => void;
}

const defaultProps: ButtonProps = {
  children: null,
  size: 'small',
  onClick: () => void 0,
};

export function Button({
  children,
  variant,
  size,
  onClick,
  ...props
}: ButtonProps) {
  return (
    <StyledButton variant={variant} size={size} onClick={onClick} {...props}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button.attrs((props: ButtonProps) => props)`
  border-radius: 5px;
  font: inherit;
  padding: 12px;
  /* Variant style condition */
  ${({ variant, size }) => {
    switch (variant) {
      case 'outlined':
        return `
          background-color: transparent;
          border: 1px solid #ffffff;
          color: ${colors.text.primary};
        `;
      case 'solid':
        return `
          background-color: ${colors.brand};
        `;
      default:
        break;
    }
  }}
  /* Size style condition */
  ${({ size }) => {
    switch (size) {
      case 'small':
        return `
          width: 64px;
        `;
      case 'medium':
        return `
          width: 200px;
        `;
      default:
        break;
    }
  }}
`;

Button.defaultProps = defaultProps;

export default Button;
