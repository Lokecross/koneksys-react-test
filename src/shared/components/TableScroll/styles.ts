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
  padding-bottom: 4px;
  position: sticky;
  top: 0;
`;

export const Td = styled.td`
  border: solid 1px #e8e8e8;
  border-style: solid none;
  height: 40px;
  padding: 0 16px;
  color: #1f1f1f;
  font-size: 14px;
  font-weight: 500;

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

export const Tr = styled.tr``;
