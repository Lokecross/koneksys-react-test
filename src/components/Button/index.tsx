import { HTMLProps } from 'react';

import { Container } from './styles';

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  children: string;
}

const Button = ({ children, onClick }: ButtonProps) => {
  return <Container onClick={onClick}>{children}</Container>;
};

export default Button;
