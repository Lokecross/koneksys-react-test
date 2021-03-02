import styled from 'styled-components';

export const Container = styled.button`
  background: ${props => (props.disabled ? '#d2d2d2' : '#2f54d0')};
  border-radius: 8px;
  color: #fff;
  border: 1px solid transparent;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 400;
`;
