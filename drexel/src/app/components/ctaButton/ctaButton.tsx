import React, { useState } from "react";
import styles from "./styles.module.scss";

// components:
import { ContactModal } from "../contactModal/contactModal";
import { PerformanceModal } from "../performanceModal/performanceModal";

type ctaButtonProps = {
  type: string;
  textContent: string;
};

function CtaButton({ type, textContent }: ctaButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const toggleModal = (currState: boolean) => {
    if (!currState) {
      setIsModalOpen(true);
    } else {
      setIsModalOpen(false);
    }
  };

  return (
    <div className={styles.container}>
      {isModalOpen && type === "contact" && (
        <div className={styles.modalContainer}>
          <ContactModal
            setIsModalOpen={setIsModalOpen}
            isModalOpen={isModalOpen}
          />
        </div>
      )}
      {isModalOpen && type === "performance" && (
        <div className={styles.modalContainer}>
          <PerformanceModal
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
          {textContent}
        </button>
      </div>
    </div>
  );
}

export default CtaButton;
