import s from "./ImageCard.module.css";

const ImageCard = ({ image, onImageClick }) => {
  return (
    <div className={s.galleryItem}>
      <li onClick={() => onImageClick(image)} className={s.imageWrapper}>
        <img
          className={s.imageCard}
          src={image.urls.small}
          alt={image.alt_description}
        />
      </li>
    </div>
  );
};
export default ImageCard;
