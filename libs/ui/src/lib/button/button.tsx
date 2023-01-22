import styled from 'styled-components';
import { colors } from '../colors/colors';

/* eslint-disable-next-line */
export interface ButtonProps {
  children: React.ReactNode;
  colorScheme?: 'blue';
  variant?: 'solid' | 'outlined';
  size: 'small' | 'medium' | 'large';
  onClick: () => void;
  icon?: React.ReactNode;
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
  icon,
  ...props
}: ButtonProps) {
  return (
    <StyledButton
      variant={variant}
      size={size}
      onClick={onClick}
      icon={icon}
      {...props}
    >
      {children}
      {icon}
    </StyledButton>
  );
}

const StyledButton = styled.button.attrs((props: ButtonProps) => props)`
  border: 0px;
  border-radius: 5px;
  font: inherit;
  padding: 12px;
  outline: none;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
  /* Variant style condition */
  ${({ variant }) => {
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
          width: 100px;
        `;
      case 'medium':
        return `
          width: 200px;
        `;
      case 'large':
        return `
          width: 300px;
          height: 42px;
        `;
      default:
        break;
    }
  }}
  /* Variant style condition */
  ${({ colorScheme }) => {
    switch (colorScheme) {
      case 'blue':
        return `
          background-color: ${colors.brand};
          color: ${colors.text.primary};
        `;
      default:
        break;
    }
  }}
  /* Button with icon style condition */
  ${({ icon }) => {
    if (icon) {
      return `
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    `;
    }
  }}
`;

Button.defaultProps = defaultProps;

export default Button;
