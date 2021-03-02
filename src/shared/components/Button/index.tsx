import { HTMLProps } from 'react';

import { Container } from './styles';

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  children: string;
}

const Button = ({ children, onClick, disabled }: ButtonProps) => {
  return (
    <Container onClick={onClick} disabled={disabled}>
      {children}
    </Container>
  );
};

export default Button;
