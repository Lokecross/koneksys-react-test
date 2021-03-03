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
  z-index: 2;
`;

type TdProps = {
  isHidden?: boolean;
};

export const Td = styled.td<TdProps>`
  border: solid 1px #e8e8e8;
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
    border-style: ${props => (props.isHidden ? 'none' : 'solid')};
    border-bottom-right-radius: 8px;
    border-top-right-radius: 8px;
    cursor: pointer;
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SelectText = styled.div`
  color: #1f1f1f;
  font-size: 14px;
  font-weight: 500;
`;

export const Tbody = styled.tbody``;

export const Thead = styled.thead``;

export const Tr = styled.tr``;

export const Teste = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  width: 100%;
  border: 1px solid #859be3;
  border-top-right-radius: 8px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  min-height: 100%;
  z-index: 1;
  box-shadow: 0px 3px 6px #00000029;
`;

export const SelectItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  height: 38px;
  cursor: pointer;
`;
