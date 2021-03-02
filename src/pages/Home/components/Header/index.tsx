import { useRef } from 'react';

import Button from 'components/Button';
import Modal, { ModalRefProps } from 'components/Modal';

import ModalContent from '../ModalContent';

import { Container, Title } from './styles';

const Home = () => {
  const modalRef = useRef<ModalRefProps>(null);

  return (
    <Container>
      <Title>Team Name</Title>
      <Button onClick={() => modalRef.current?.toggleModal()}>
        Import Team
      </Button>

      <Modal title="My Team Importer" innerRef={modalRef}>
        <ModalContent />
      </Modal>
    </Container>
  );
};

export default Home;
