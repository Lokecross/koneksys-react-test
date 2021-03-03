import { useDispatch, useSelector } from 'react-redux';

import { selectTeam } from 'store/features/team/teamSlice';
import { toggleModal } from 'store/features/upload/uploadSlice';

import Button from 'components/Button';
import Modal from 'components/Modal';

import ModalContent from '../ModalContent';

import { Container, Title } from './styles';

const Home = () => {
  const dispatch = useDispatch();

  const team = useSelector(selectTeam);

  return (
    <Container>
      <Title>{team.name ? team.name : 'Team Name'}</Title>
      <Button
        onClick={() => {
          dispatch(toggleModal());
        }}
      >
        Import Team
      </Button>

      <Modal title="My Team Importer">
        <ModalContent />
      </Modal>
    </Container>
  );
};

export default Home;
