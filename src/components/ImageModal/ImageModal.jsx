//npm install react-modal
import Modal from 'react-modal';
Modal.setAppElement('#root');

export default function ImageModal({ isOpen, onRequestClose, imageUrl, imageAlt }) {
  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
    >
      <img src={imageUrl} alt={imageAlt} />
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
};


