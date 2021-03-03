import styled from 'styled-components';

export const Container = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 8px;
  height: 100%;
`;

export const Th = styled.th`
  text-align: left;
  padding: 0 16px;
  color: #8c8c8c;
  font-weight: 300;
  font-size: 12px;
  background: #fff;
  padding-bottom: 10px;
  position: sticky;
  top: 0;
  z-index: 2;
`;

type TdProps = {
  isActive?: boolean;
};

export const Td = styled.td<TdProps>`
  border: solid 1px ${props => (props.isActive ? '#ECBA17' : '#e8e8e8')};
  background: ${props => (props.isActive ? '#F8F8F8' : '#fff')};
  border-style: solid none;
  height: 40px;
  padding: 0 16px;
  color: #1f1f1f;
  font-size: 14px;
  font-weight: 500;
  position: relative;

  &:first-child {
    border-left-style: solid;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  &:last-child {
    border-right-style: solid;
    border-bottom-right-radius: 8px;
    border-top-right-radius: 8px;
  }
`;

export const Tbody = styled.tbody``;

export const Thead = styled.thead``;

export const Tr = styled.tr`
  cursor: pointer;
`;

export const RadioContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const RadioText = styled.div`
  color: #1f1f1f;
  font-size: 14px;
  font-weight: 500;
  margin-left: 22px;
`;

type RadioProps = {
  isActive?: boolean;
};

export const Radio = styled.div<RadioProps>`
  width: 18px;
  height: 18px;
  border-radius: 9px;
  background: ${props => (props.isActive ? '#2F54D0' : '#fff')};
  border: 1px solid ${props => (props.isActive ? '#2F54D0' : '#d1d1d1')};
  box-shadow: 0px 1px 3px #00000029;
  display: flex;
  align-items: center;
  justify-content: center;
`;
