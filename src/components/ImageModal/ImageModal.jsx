import css from './ImageModal.module.css'
import Modal from "react-modal";
Modal.setAppElement("#root");

export default function ImageModal({
  isOpen,
  onRequestClose,
  imageUrl,
  imageAlt,
  likes,
  author,
  description
}) {
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.75)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  if (!isOpen) {
    return null; // Не отображаем модальное окно, если isOpen === false
  }
  
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
    >
      <img src={imageUrl} alt={imageAlt} />
      <div className={css.div}>
        <p>
          <b>author:</b> {author}
        </p>
        <p>
          <b>likes:</b> {likes}
        </p>
        <p>
          <b>description:</b> {description}
        </p>
      </div>
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
}
