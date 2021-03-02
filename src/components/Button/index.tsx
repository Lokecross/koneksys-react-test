import { HTMLProps } from 'react';

import { Container } from './styles';

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  children: string;
}

const Button = ({ children }: ButtonProps) => {
  return <Container>{children}</Container>;
};

export default Button;
