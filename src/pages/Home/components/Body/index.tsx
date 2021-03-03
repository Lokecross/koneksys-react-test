import { useSelector } from 'react-redux';

import { selectTeam } from 'store/features/team/teamSlice';

import { FileItemProps, FileProps } from 'store/features/upload/uploadSlice';

import Table from 'components/Table';

import { Container } from './styles';

const Body = () => {
  const team = useSelector(selectTeam);

  return (
    <Container>
      <Table
        content={
          team.file
            ? [
                team.file?.find(
                  item => item['#'] === team.favorite,
                ) as FileItemProps,
                ...(team.file?.filter(
                  item => item['#'] !== team.favorite,
                ) as FileProps),
              ]
            : [{}]
        }
      />
    </Container>
  );
};

export default Body;
