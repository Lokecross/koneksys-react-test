import { CSSProperties } from 'styled-components';

import {
  Container,
  BadgeLeft,
  BadgeRight,
  BadgeBody,
  Icon,
  BadgeText,
  BadgeLeftPosition,
  BadgeRightPosition,
} from './styles';

type BadgeStructureProps = {
  children: JSX.Element | string;
  icon: JSX.Element;
  position?: 'left' | 'right' | 'center';
  textColor?: string;
  backgroundColor?: string;
  borderColor?: string;
  style?: CSSProperties;
} & typeof defaultProps;

const defaultProps = {
  position: 'center',
  borderColor: '#e8e8e8',
  backgroundColor: '#f8f8f8',
  textColor: '#1F1F1F',
  style: {},
};

const BadgeStructure = ({
  children,
  icon,
  position,
  backgroundColor,
  borderColor,
  textColor,
  style,
}: BadgeStructureProps) => {
  return (
    <Container
      backgroundColor={backgroundColor}
      textColor={textColor}
      borderColor={borderColor}
      style={style}
    >
      {position === 'left' ? <BadgeLeftPosition /> : <BadgeLeft />}

      <BadgeBody>
        {icon && <Icon>{icon}</Icon>}
        <BadgeText>{children}</BadgeText>
      </BadgeBody>

      {position === 'right' ? <BadgeRightPosition /> : <BadgeRight />}
    </Container>
  );
};

BadgeStructure.defaultProps = defaultProps;

export default BadgeStructure;
