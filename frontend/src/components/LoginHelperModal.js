import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const LoginHelperModal = ({ onCloseModal, onOpenModal, open }) => {
  return (
    <div>
      <Modal open={open} onClose={onCloseModal} center>
        <h2>Try out Link Saver</h2>
        <p>
          Username: CoolCat
          <br />
          Password: SecurePW
        </p>
        <p>Or login with any other user with the same password.</p>
      </Modal>
    </div>
  );
};

export default LoginHelperModal;
