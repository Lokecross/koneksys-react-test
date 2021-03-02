import { useCallback, useMemo, useState } from 'react';

import Steps from 'components/Steps';
import Button from 'components/Button';

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
  Scrollable,
  Title,
} from './styles';

const ModalContent = () => {
  const [disabled, setDisabled] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(true);

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
      <Steps step={step} error={error} />

      <Body>
        <Content>
          <Title>{title}</Title>
          <Scrollable>
            {step === 1 && (
              <UploadContent
                onChange={(dis, err) => {
                  setDisabled(dis);
                  setError(err);
                }}
              />
            )}
            {step === 2 && <PlayerContent />}
            {step === 3 && <FavoriteContent />}
            {step === 4 && <SummaryContent />}
          </Scrollable>
        </Content>

        <Buttons>
          {step > 1 && <Back onClick={previousStep}>Back</Back>}
          <Button onClick={nextStep} disabled={disabled}>
            Continue
          </Button>
        </Buttons>
      </Body>
    </Container>
  );
};

export default ModalContent;
