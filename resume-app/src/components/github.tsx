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
    <div>
      <button
        onClick={handleClick}
        className="transition-transform hover:scale-120 w-12"
        style={{ cursor: 'pointer', padding: 0, border: 'none', background: 'none' }}
        title={toolTip}
        aria-label={toolTip}
      >
        <img
          src={imageUrl}
          alt={altText}
          loading="lazy"
          style={{ display: 'block' }}
        />
      </button>
    </div>
  );
};

export default GitImage;