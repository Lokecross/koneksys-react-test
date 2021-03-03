import styled from 'styled-components';

export const Container = styled.input`
  padding: 8px 16px;
  background: #fff;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  color: #000;
  width: 100%;
  max-width: 323px;
  -webkit-appearance: none;

  &::placeholder {
    font-weight: 300;
    color: #8c8c8c;
  }
`;
