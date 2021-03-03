import { useCallback, useMemo, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Steps from 'components/Steps';
import Button from 'components/Button';
import UploadButton from 'components/UploadButton';

import { teamConfirm } from 'store/features/team/teamSlice';
import {
  clearUpload,
  selectUpload,
  toggleModal,
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

  const [step, setStep] = useState<number>(1);

  const nextStep = useCallback(() => {
    setStep(step + 1);
  }, [step]);

  const previousStep = useCallback(() => {
    setStep(step - 1);
  }, [step]);

  const title = useMemo(() => {
    if (step === 1) return 'Upload Data';
    if (step === 2) return 'Player Status';
    if (step === 3) return 'Favorite Player';
    if (step === 4) return 'Summary';

    return 'Unknown';
  }, [step]);

  const disabled = useMemo(() => {
    if (upload.error) return true;
    if (!upload.file) return true;
    if (!upload.name) return true;
    if (step === 3 && !upload.favorite) return true;

    return false;
  }, [upload, step]);

  const submit = () => {
    if (step === 4) {
      if (upload.file) {
        dispatch(
          teamConfirm({
            file: upload.file,
            name: upload.name,
            favorite: upload.favorite,
          }),
        );
        dispatch(clearUpload());
        dispatch(toggleModal());
      }
    } else {
      nextStep();
    }
  };

  return (
    <Container>
      <Steps step={step} error={upload.error} />

      <Body>
        <Content>
          <Title>{title}</Title>
          <Contents>
            {step === 1 && <UploadContent />}
            {step === 2 && <PlayerContent />}
            {step === 3 && <FavoriteContent />}
            {step === 4 && <SummaryContent />}
          </Contents>
        </Content>

        <Buttons>
          {step > 1 && <Back onClick={previousStep}>Back</Back>}
          {upload.error ? (
            <UploadButton>Re-Upload File</UploadButton>
          ) : (
            <Button onClick={submit} disabled={disabled}>
              {step === 4 ? 'Confirm' : 'Continue'}
            </Button>
          )}
        </Buttons>
      </Body>
    </Container>
  );
};

export default ModalContent;
