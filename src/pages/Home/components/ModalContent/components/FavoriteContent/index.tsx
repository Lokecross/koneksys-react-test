import { useSelector } from 'react-redux';

import { selectUpload } from 'store/features/upload/uploadSlice';

import TableRadio from './components/TableRadio';

import { Container } from './styles';

const PlayerContent = () => {
  const upload = useSelector(selectUpload);

  return (
    <Container>
      <TableRadio
        content={
          upload.file?.map(item => ({
            Player: item['Player Name'],
            '#': item['#'],
            Pos: item.Pos,
            Height: item.Height,
            College: item.College,
          })) || []
        }
      />
    </Container>
  );
};

export default PlayerContent;
