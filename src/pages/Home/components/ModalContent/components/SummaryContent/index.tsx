import { useMemo } from 'react';

import { useSelector } from 'react-redux';

import { selectUpload } from 'store/features/upload/uploadSlice';

import { Container, Box, Line, Label, Value } from './styles';

const SummaryContent = () => {
  const upload = useSelector(selectUpload);

  const favoritePlayer = useMemo(() => {
    return upload.file?.find(item => item['#'] === upload.favorite);
  }, [upload]);

  return (
    <Container>
      <div style={{ height: 27 }} />
      <Line>
        <Box>
          <Label>Data</Label>
          <Value>{upload.filename}</Value>
        </Box>
        <Box>
          <Label>Team</Label>
          <Value>{upload.name}</Value>
        </Box>
        <Box>
          <Label>Favorite Player</Label>
          <Value>{favoritePlayer && favoritePlayer['Player Name']}</Value>
        </Box>
      </Line>

      <div style={{ height: 27 }} />
      <Line>
        <Box>
          <Label>Active</Label>
          <Value>
            {upload.file?.filter(item => item.Status === 'Active').length}
          </Value>
        </Box>
        <Box>
          <Label>Injured</Label>
          <Value>
            {upload.file?.filter(item => item.Status === 'Active').length}
          </Value>
        </Box>
        <Box>
          <Label>Practice Squad</Label>
          <Value>
            {upload.file?.filter(item => item.Status === 'Practice').length}
          </Value>
        </Box>
        <Box>
          <Label>Suspended</Label>
          <Value>
            {upload.file?.filter(item => item.Status === 'Suspended').length}
          </Value>
        </Box>
      </Line>
    </Container>
  );
};

export default SummaryContent;
