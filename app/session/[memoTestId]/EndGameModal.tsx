import Box from '@/components/Box';
import Button from '@/components/Button';
import React from 'react';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
};

const EndGameModal: React.FC<ModalProps> = ({ isOpen, onClose, title, description }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Box className="modal fixed inset-0 flex items-center justify-center">
      <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-75"/>
      <Box className="modal-content absolute bg-white p-8 rounded text-4xl items-center flex flex-col justify-center">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <p className="text-lg mb-8">{description}</p>
        <Button className="close bg-pink-600 hover:bg-pink-700" onClick={onClose}>
          Go Back
        </Button>
      </Box>
    </Box>
  );
};

export default EndGameModal;