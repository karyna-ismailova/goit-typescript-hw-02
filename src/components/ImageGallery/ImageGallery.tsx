import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

type ImageGalleryProps = {
  images: any[];
  onImageClick: (image: any) => void;
};

const ImageGallery = ({ images, onImageClick }: ImageGalleryProps) => {
  return (
    <ul className={s.gallery}>
      {images.map((item) => (
        <ImageCard key={item.id} image={item} onImageClick={onImageClick} />
      ))}
    </ul>
  );
};
export default ImageGallery;
