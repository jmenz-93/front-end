interface LinkedInProps {
  imageUrl: string;
  linkUrl: string;
  altText: string;
  toolTip: string;
}

const LinkedInImage: React.FC<LinkedInProps> = ({ imageUrl, linkUrl, altText, toolTip }) => {
  const handleClick = () => {
    window.location.href = linkUrl;
  };

  return (
    <div >
      <button
      onClick={handleClick}
      className="transition-transform hover:scale-110 items-center w-14"
      style={{ cursor: 'pointer', padding: 0, border: 'none', background: 'none' }}
      title={toolTip}
      >
      <img
        src={imageUrl}
        alt={altText}
        loading="lazy"
        style={{ display: 'block'}}


      />
      </button>
    </div>
  );
};

export default LinkedInImage;
