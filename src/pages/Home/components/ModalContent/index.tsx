import { useCallback, useMemo, useState } from 'react';

import { useSelector } from 'react-redux';

import Steps from 'components/Steps';
import Button from 'components/Button';
import UploadButton from 'components/UploadButton';

import { selectUpload } from 'store/features/upload/uploadSlice';

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
  const upload = useSelector(selectUpload);

  const [step, setStep] = useState<number>(1);

  const nextStep = useCallback(() => {
    if (step < 4) {
      setStep(step + 1);
    }
  }, [step]);

  const previousStep = useCallback(() => {
    if (step > 1) {
      setStep(step - 1);
    }
  }, [step]);

  const title = useMemo(() => {
    if (step === 1) {
      return 'Upload Data';
    }
    if (step === 2) {
      return 'Player Status';
    }
    if (step === 3) {
      return 'Favorite Player';
    }
    if (step === 4) {
      return 'Summary';
    }

    return 'Unknown';
  }, [step]);

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
            <Button
              onClick={nextStep}
              disabled={upload.error || !upload.file || !upload.name}
            >
              Continue
            </Button>
          )}
        </Buttons>
      </Body>
    </Container>
  );
};

export default ModalContent;
