import styled from 'styled-components';

export const Container = styled.header``;

export const Body = styled.div`
  padding: 32px;
`;

export const Title = styled.div`
  color: #000000;
  font-size: 14px;
  font-weight: 500;
`;

export const Content = styled.div`
  height: 260px;
  display: flex;
  flex-direction: column;
`;

export const Contents = styled.div`
  flex: 1;
  display: grid;
  overflow-y: auto;
  padding-right: 3px;
  margin-top: 8px;

  ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #d1d1d1;
    border-radius: 5px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #d1d1d1;
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 24px;
`;

export const Back = styled.button`
  background: #fff;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  color: #1f1f1f;
  padding: 8px 16px;
  margin-right: 16px;
  font-size: 14px;
  font-weight: 500;
`;
