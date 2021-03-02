import { useRef } from 'react';
import Button from '../Button';
import Modal, { ModalRefProps } from '../Modal';

import { Container, Title } from './styles';

const Home = () => {
  const modalRef = useRef<ModalRefProps>(null);

  return (
    <Container>
      <Title>Team Name</Title>
      <Button onClick={() => modalRef.current?.toggleModal()}>
        Import Team
      </Button>

      <Modal innerRef={modalRef}>modal</Modal>
    </Container>
  );
};

export default Home;
