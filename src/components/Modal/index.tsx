import { useImperativeHandle, Ref, useState, useCallback } from 'react';

import { Container, Position, Popup, OutClick } from './styles';

export type ModalRefProps = {
  openModal(): void;
  closeModal(): void;
  toggleModal(): void;
};

export type ModalProps = {
  innerRef: Ref<ModalRefProps>;
  children: JSX.Element | string;
};

const Modal = ({ innerRef, children }: ModalProps) => {
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
        <Popup>{children}</Popup>
        <OutClick onClick={closeModal} />
      </Position>
    </Container>
  ) : null;
};

export default Modal;
