import styled from 'styled-components';

type ContainerProps = {
  backgroundColor: string;
  borderColor: string;
  textColor: string;
};

export const Container = styled.div<ContainerProps>`
  display: flex;
  --backgroundColor: ${props => props.backgroundColor};
  --borderColor: ${props => props.borderColor};
  --textColor: ${props => props.textColor};
`;

export const BadgeLeft = styled.div`
  border-top: solid 1px var(--borderColor);
  border-bottom: solid 1px var(--borderColor);
  border-left: solid 1px var(--borderColor);
  position: relative;
  display: block;
  height: 30px;
  width: 10px;
  background: var(--backgroundColor);

  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    border-left: 7px solid;
    border-right: 0 solid;
    border-top: 15px solid;
    border-bottom: 15px solid;
    border-color: transparent transparent transparent var(--borderColor);
    top: -1px;
    left: 0px;
  }
  &:after {
    content: '';
    display: inline-block;
    position: absolute;
    border-left: 7px solid;
    border-right: 0 solid;
    border-top: 15px solid;
    border-bottom: 15px solid;
    border-color: transparent transparent transparent #fff;
    top: -1px;
    left: -1px;
  }
`;

export const BadgeBody = styled.div`
  height: 30px;
  border-top: solid 1px var(--borderColor);
  border-bottom: solid 1px var(--borderColor);
  display: flex;
  align-items: center;
  padding: 0 20px 0 27px;
  background: var(--backgroundColor);
`;

export const BadgeText = styled.div`
  font-size: 13px;
  font-weight: 500;
  color: var(--textColor);
`;

export const BadgeRight = styled.div`
  border-top: solid 1px var(--borderColor);
  border-bottom: solid 1px var(--borderColor);
  border-right: solid 1px var(--borderColor);
  position: relative;
  display: block;
  height: 30px;
  width: 10px;
  background: var(--backgroundColor);
  margin-right: 7px;

  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    border-left: 7px solid;
    border-right: 0 solid;
    border-top: 15px solid;
    border-bottom: 15px solid;
    border-color: transparent transparent transparent var(--borderColor);
    top: -1px;
    right: -8px;
  }

  &:after {
    content: '';
    display: inline-block;
    position: absolute;
    border-left: 7px solid;
    border-right: 0 solid;
    border-top: 15px solid;
    border-bottom: 15px solid;
    border-color: transparent transparent transparent var(--backgroundColor);
    top: -1px;
    right: -7px;
  }
`;

export const Icon = styled.div`
  margin-right: 8px;
  height: 18px;
`;

export const BadgeLeftPosition = styled.div`
  border-top: solid 1px var(--borderColor);
  border-bottom: solid 1px var(--borderColor);
  border-left: solid 1px var(--borderColor);
  height: 30px;
  width: 10px;
  background: var(--backgroundColor);
`;

export const BadgeRightPosition = styled.div`
  border-top: solid 1px var(--borderColor);
  border-bottom: solid 1px var(--borderColor);
  border-right: solid 1px var(--borderColor);
  height: 30px;
  width: 10px;
  background: var(--backgroundColor);
`;
