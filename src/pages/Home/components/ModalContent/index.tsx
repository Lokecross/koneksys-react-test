import { useMemo } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Steps from 'components/Steps';
import Button from 'components/Button';
import UploadButton from 'components/UploadButton';

import { teamConfirm } from 'store/features/team/teamSlice';
import {
  clearUpload,
  nextStep,
  prevStep,
  selectUpload,
} from 'store/features/upload/uploadSlice';

import UploadContent from './components/UploadContent';
import PlayerContent from './components/PlayerContent';
import FavoriteContent from './components/FavoriteContent';
import SummaryContent from './components/SummaryContent';

import {
  Container,
  Back,
  Body,
  Buttons,
  Content,
  Title,
  Contents,
} from './styles';

const ModalContent = () => {
  const dispatch = useDispatch();

  const upload = useSelector(selectUpload);

  const title = useMemo(() => {
    if (upload.step === 1) return 'Upload Data';
    if (upload.step === 2) return 'Player Status';
    if (upload.step === 3) return 'Favorite Player';
    if (upload.step === 4) return 'Summary';

    return 'Unknown';
  }, [upload.step]);

  const disabled = useMemo(() => {
    if (upload.error) return true;
    if (!upload.file) return true;
    if (!upload.name) return true;
    if (upload.step === 3 && !upload.favorite) return true;

    return false;
  }, [upload]);

  const submit = () => {
    if (upload.step === 4) {
      if (upload.file) {
        dispatch(
          teamConfirm({
            file: upload.file,
            name: upload.name,
            favorite: upload.favorite,
          }),
        );
        dispatch(clearUpload());
      }
    } else {
      dispatch(nextStep());
    }
  };

  return (
    <Container>
      <Steps error={upload.error} />

      <Body>
        <Content>
          <Title>{title}</Title>
          <Contents>
            {upload.step === 1 && <UploadContent />}
            {upload.step === 2 && <PlayerContent />}
            {upload.step === 3 && <FavoriteContent />}
            {upload.step === 4 && <SummaryContent />}
          </Contents>
        </Content>

        <Buttons>
          {upload.step > 1 && (
            <Back
              onClick={() => {
                dispatch(prevStep());
              }}
            >
              Back
            </Back>
          )}
          {upload.error ? (
            <UploadButton>Re-Upload File</UploadButton>
          ) : (
            <Button onClick={submit} disabled={disabled}>
              {upload.step === 4 ? 'Confirm' : 'Continue'}
            </Button>
          )}
        </Buttons>
      </Body>
    </Container>
  );
};

export default ModalContent;
