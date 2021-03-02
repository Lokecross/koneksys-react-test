import { useImperativeHandle, Ref, useState, useCallback } from 'react';

import { CgClose } from 'react-icons/cg';

import {
  Container,
  Position,
  Popup,
  OutClick,
  HeadModal,
  Title,
} from './styles';

export type ModalRefProps = {
  openModal(): void;
  closeModal(): void;
  toggleModal(): void;
};

export type ModalProps = {
  innerRef: Ref<ModalRefProps>;
  children: JSX.Element | string;
  title: string;
};

const Modal = ({ innerRef, children, title }: ModalProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const openModal = useCallback(() => {
    setOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setOpen(false);
  }, []);

  const toggleModal = useCallback(() => {
    setOpen(!open);
  }, [open]);

  useImperativeHandle(innerRef, () => ({
    openModal,
    closeModal,
    toggleModal,
  }));

  return open ? (
    <Container>
      <Position>
        <Popup>
          <HeadModal>
            <Title>{title}</Title>
            <CgClose
              size={24}
              onClick={closeModal}
              style={{ cursor: 'pointer' }}
            />
          </HeadModal>

          {children}
        </Popup>
        <OutClick onClick={closeModal} />
      </Position>
    </Container>
  ) : null;
};

export default Modal;
