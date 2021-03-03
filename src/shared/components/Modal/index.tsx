import { useDispatch, useSelector } from 'react-redux';

import { CgClose } from 'react-icons/cg';

import { selectUpload, toggleModal } from 'store/features/upload/uploadSlice';

import {
  Container,
  Position,
  Popup,
  OutClick,
  HeadModal,
  Title,
} from './styles';

type ModalProps = {
  children: JSX.Element | string;
  title: string;
};

const Modal = ({ children, title }: ModalProps) => {
  const dispatch = useDispatch();

  const upload = useSelector(selectUpload);

  return upload.modal ? (
    <Container>
      <Position>
        <Popup>
          <HeadModal>
            <Title>{title}</Title>
            <CgClose
              size={24}
              onClick={() => {
                dispatch(toggleModal());
              }}
              style={{ cursor: 'pointer' }}
            />
          </HeadModal>

          {children}
        </Popup>
        <OutClick
          onClick={() => {
            dispatch(toggleModal());
          }}
        />
      </Position>
    </Container>
  ) : null;
};

export default Modal;
