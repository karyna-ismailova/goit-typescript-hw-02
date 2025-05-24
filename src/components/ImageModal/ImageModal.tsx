import s from "./ImageModal.module.css";
import Modal from "react-modal";

Modal.setAppElement("#root");

type Props = {
  isOpen: boolean;
  isClose: () => void;
  image: any;
};

const ImageModal = ({ isOpen, isClose, image }: Props) => {
  if (!image) return null;

  const { likes, description } = image;
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={isClose}
        className={s.modalContent}
        overlayClassName={s.modalOverlay}
      >
        <button onClick={isClose} className={s.closeButton}>
          &times;
        </button>
        <img
          src={image.urls.regular}
          alt={image.alt_description}
          className={s.image}
        />
        <div className={s.info}>
          <p>Description:{description}</p>
          <p>Likes: {likes}</p>
        </div>
      </Modal>
    </div>
  );
};
export default ImageModal;
