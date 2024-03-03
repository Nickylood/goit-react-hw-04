import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';


export default function ImageGallery({ images, onImgClick }) {
  return (
    <ul className={css.gallery}>
      {images.map((image) => (
        <li className={css.item} key={image.id}>
          <ImageCard
            src={image.urls.small}
            alt={image.slug}
            onClick={() => onImgClick(image)}
          />
        </li>
      ))}
    </ul>
  );
}
