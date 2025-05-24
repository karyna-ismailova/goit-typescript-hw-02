import s from "./ImageCard.module.css";

type ImageCardProps = {
  image: any;
  onImageClick: (image: any) => void;
};

const ImageCard = ({ image, onImageClick }: ImageCardProps) => {
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
