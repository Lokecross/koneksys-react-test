import Badge from '../Badge';

import { Container } from './styles';

type StepsProps = {
  step?: number;
  error?: boolean;
} & typeof defaultProps;

const defaultProps = {
  step: 0,
  error: false,
};

const Steps = ({ step, error }: StepsProps) => {
  return (
    <Container>
      <Badge
        icon="upload"
        position="left"
        active={step > 0}
        error={error}
        style={{ zIndex: 4 }}
      >
        Upload Data
      </Badge>
      <Badge
        icon="football"
        active={step > 1}
        error={error}
        style={{ marginLeft: -4, zIndex: 3 }}
      >
        Player Status
      </Badge>
      <Badge
        icon="star"
        active={step > 2}
        error={error}
        style={{ marginLeft: -4, zIndex: 2 }}
      >
        Favorite
      </Badge>
      <Badge
        icon="check"
        position="right"
        active={step > 3}
        error={error}
        style={{ marginLeft: -4, zIndex: 1 }}
      >
        Complete
      </Badge>
    </Container>
  );
};

Steps.defaultProps = defaultProps;

export default Steps;
