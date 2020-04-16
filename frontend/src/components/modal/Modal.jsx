import React from 'react';
import { Modal } from 'semantic-ui-react';

const CustomModal = ({ children, open = true, hearder }) => {
  return (
    <Modal open={open}>
      <Modal.Header>{hearder}</Modal.Header>
      <Modal.Content>
        <Modal.Description>{children}</Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export { CustomModal as Modal };
