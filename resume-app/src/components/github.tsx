interface GitProps {
  imageUrl: string;
  linkUrl: string;
  altText: string;
  toolTip: string;
}

const GitImage: React.FC<GitProps> = ({ imageUrl, linkUrl, altText, toolTip }) => {
  const handleClick = () => {
    window.location.href = linkUrl;
  };

  return (
    <div >
      <img
        src={imageUrl}
        alt={altText}
        onClick={handleClick}
        className="transition-transform hover:scale-120 w-12"
        style={{ cursor: 'pointer' }}
        title={toolTip}
        loading="lazy"
      />
    </div>
  );
};

export default GitImage;