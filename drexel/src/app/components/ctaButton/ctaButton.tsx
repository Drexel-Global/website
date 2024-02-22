import React, { useState } from "react";
import styles from "./styles.module.scss";
// components:
import { ContactModal } from "../contactModal/contactModal";

function CtaButton() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  console.log(isModalOpen);

  const toggleModal = (currState: boolean) => {
    if (!currState) {
      setIsModalOpen(true);
    } else {
      setIsModalOpen(false);
    }
  };

  return (
    <div className={styles.container}>
      {isModalOpen && (
        <div className={styles.modalContainer}>
          <ContactModal
            setIsModalOpen={setIsModalOpen}
            isModalOpen={isModalOpen}
          />
        </div>
      )}
      <div className={styles.btnContainer}>
        <button
          onClick={() => toggleModal(isModalOpen)}
          className={styles.ctaBusiness}
        >
          Let's Do Business
        </button>
      </div>
    </div>
  );
}

export default CtaButton;
