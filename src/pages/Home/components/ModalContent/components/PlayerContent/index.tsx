import { useSelector } from 'react-redux';

import { selectUpload } from 'store/features/upload/uploadSlice';

import TableScroll from 'components/TableScroll';

import { Container } from './styles';

const PlayerContent = () => {
  const upload = useSelector(selectUpload);

  return (
    <Container>
      <TableScroll
        content={
          upload.file?.map(item => ({
            Player: item['Player Name'],
            '#': item['#'],
            Pos: item.Pos,
            College: item.College,
            Status: item.Status,
          })) || []
        }
      />
    </Container>
  );
};

export default PlayerContent;
