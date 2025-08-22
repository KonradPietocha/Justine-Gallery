import "./Images.css";

function Images({
  image,
  openImage,
}: {
  image: string;
  openImage: () => void;
}) {
  return (
    <div className="images">
      <img
        src={image}
        alt={image.replace("/Justine-Gallery/static/media/", "").split(".")[0]}
        onClick={() => openImage()}
      />
    </div>
  );
}

export default Images;
