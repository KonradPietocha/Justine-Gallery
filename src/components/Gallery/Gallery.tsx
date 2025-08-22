import Images from "../Images/Images";
import "./Gallery.css";

function Gallery({
  pictures,
  openImage,
}: {
  pictures: string[];
  openImage: (value: string) => void;
}) {
  return (
    <div className="tiles">
      {pictures.map((image, i) => (
        <Images key={i} image={image} openImage={() => openImage(image)} />
      ))}
    </div>
  );
}

export default Gallery;
