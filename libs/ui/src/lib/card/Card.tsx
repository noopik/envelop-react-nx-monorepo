import styled from 'styled-components';

/* eslint-disable-next-line */
export interface CardProps {
  children: React.ReactNode;
}

const StyledCard = styled.div`
  background: #ffffff;
  box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  padding: 24px;
`;

export function Card({ children, ...props }: CardProps) {
  return <StyledCard>{children}</StyledCard>;
}

export default Card;
