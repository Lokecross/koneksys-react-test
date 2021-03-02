import { HTMLProps } from 'react';

import { Container } from './styles';

interface IButton extends HTMLProps<HTMLButtonElement> {
  children: string;
}

const Button = ({ children }: IButton) => {
  return <Container>{children}</Container>;
};

export default Button;
