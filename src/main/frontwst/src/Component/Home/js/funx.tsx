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
    <div className="pp flex items-center justify-center flex-col">
      <button type="button" className="items-center bg-blue-600 btn-shadow w-48 mt-6" onClick={openModal}>
        수입 명세표 입력
      </button>
      <Modal isOpen={isModalOpen} closeModal={closeModal} />
      <button type="button" className="items-center bg-red-600 align-bottom btn-shadow w-48 mt-6" /* onClick={} */>
        지출 명세표 입력
      </button>
    </div>
    );
}


