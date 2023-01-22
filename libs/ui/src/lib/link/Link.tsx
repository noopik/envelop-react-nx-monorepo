import styled from 'styled-components';
import { Text } from '@nx-test-zog/ui';

/* eslint-disable-next-line */
export interface LinkProps {
  href: string;
  children: React.ReactNode;
}

const StyledLink = styled.a`
  &:hover {
    opacity: 0.8;
  }
`;

export function Link({ href, children, ...props }: LinkProps) {
  return (
    <StyledLink href={href} {...props}>
      <Text color="brand" fontSize={12}>
        {children}
      </Text>
    </StyledLink>
  );
}

export default Link;
