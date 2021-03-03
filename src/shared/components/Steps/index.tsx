import { useSelector } from 'react-redux';

import { selectUpload } from 'store/features/upload/uploadSlice';

import Badge from 'components/Badge';

import { Container } from './styles';

type StepsProps = {
  error?: boolean;
} & typeof defaultProps;

const defaultProps = {
  error: false,
};

const Steps = ({ error }: StepsProps) => {
  const upload = useSelector(selectUpload);

  return (
    <Container>
      <Badge
        icon="upload"
        position="left"
        active={upload.step > 0}
        error={error}
        style={{ zIndex: 4 }}
      >
        Upload Data
      </Badge>
      <Badge
        icon="football"
        active={upload.step > 1}
        error={error}
        style={{ marginLeft: -4, zIndex: 3 }}
      >
        Player Status
      </Badge>
      <Badge
        icon="star"
        active={upload.step > 2}
        error={error}
        style={{ marginLeft: -4, zIndex: 2 }}
      >
        Favorite
      </Badge>
      <Badge
        icon="check"
        position="right"
        active={upload.step > 3}
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
