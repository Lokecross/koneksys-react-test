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

type BadgeProps = {
  children: JSX.Element | string;
  icon: JSX.Element;
  position?: 'left' | 'right' | 'center';
  textColor?: string;
  backgroundColor?: string;
  borderColor?: string;
} & typeof defaultProps;

const defaultProps = {
  position: 'center',
  borderColor: '#e8e8e8',
  backgroundColor: '#f8f8f8',
  textColor: '#1F1F1F',
};

const Badge = ({
  children,
  icon,
  position,
  backgroundColor,
  borderColor,
  textColor,
}: BadgeProps) => {
  return (
    <Container
      backgroundColor={backgroundColor}
      textColor={textColor}
      borderColor={borderColor}
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

Badge.defaultProps = defaultProps;

export default Badge;
