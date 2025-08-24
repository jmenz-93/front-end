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
      <img
        src={imageUrl}
        alt={altText}
        onClick={handleClick}
        width={58}
        // height={120}
        className="transition-transform hover:scale-110 items-center"
        style={{ cursor: 'pointer' }}
        title={toolTip}
      />
    </div>
  );
};

export default LinkedInImage;
