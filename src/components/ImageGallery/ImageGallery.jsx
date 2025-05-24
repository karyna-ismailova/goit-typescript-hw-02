import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={s.gallery}>
      {images.map((item) => (
        <ImageCard key={item.id} image={item} onImageClick={onImageClick} />
      ))}
    </ul>
  );
};
export default ImageGallery;
