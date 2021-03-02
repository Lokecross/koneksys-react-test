import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Position = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  backdrop-filter: blur(3px);
  background-color: rgba(0, 0, 0, 0.1);
  position: relative;
`;

export const Popup = styled.div`
  background: #fff;
  box-shadow: 0px 9px 26px #0000003d;
  border-radius: 16px;
  z-index: 2;
`;

export const OutClick = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`;
