import "./EnlargedImage.css";

function EnlargedImage({
  enlargedPicture,
  closeImage,
}: {
  enlargedPicture?: string;
  closeImage: () => void;
}) {
  return (
    <>
      {enlargedPicture ? (
        <div className="enlarge" onClick={() => closeImage()}>
          <div
            className="enlarge-image"
            style={{
              backgroundImage: `url(${enlargedPicture})`,
            }}
          />
        </div>
      ) : null}
    </>
  );
}

export default EnlargedImage;
