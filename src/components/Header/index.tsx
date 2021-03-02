import { useRef } from 'react';

import { FaUpload, FaFootballBall, FaStar, FaCheck } from 'react-icons/fa';

import Button from '../Button';
import Modal, { ModalRefProps } from '../Modal';
import Badge from '../Badge';

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
        <div style={{ display: 'flex' }}>
          <Badge
            icon={<FaUpload size={13} color="#fff" />}
            position="left"
            backgroundColor="#2F54D0"
            textColor="#fff"
            borderColor="#2F54D0"
          >
            Upload Data
          </Badge>
          <Badge icon={<FaFootballBall size={13} />}>Player Status</Badge>
          <Badge icon={<FaStar size={13} />}>Favorite</Badge>
          <Badge icon={<FaCheck size={13} />} position="right">
            Complete
          </Badge>
        </div>
      </Modal>
    </Container>
  );
};

export default Home;
