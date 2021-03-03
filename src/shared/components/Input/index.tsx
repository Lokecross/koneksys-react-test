import { InputHTMLAttributes } from 'react';

import { Container } from './styles';

const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return <Container {...props} />;
};

export default Input;
