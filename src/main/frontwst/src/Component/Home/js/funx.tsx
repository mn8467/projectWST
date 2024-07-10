import React, { useState } from 'react';
import Modal from "../Modal.tsx";


export default function funx(){
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App flex items-center justify-center">
      <button type="button" className="items-center btn-shadow w-48 mt-6" onClick={openModal}>
        명세표 입력
      </button>
      <Modal isOpen={isModalOpen} closeModal={closeModal} />
    </div>
    );
}


