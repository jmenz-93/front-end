interface GitLabProps {
  imageUrl: string;
  linkUrl: string;
  altText: string;
  toolTip: string;
}

const GitLabImage: React.FC<GitLabProps> = ({ imageUrl, linkUrl, altText, toolTip }) => {
  const handleClick = () => {
    window.location.href = linkUrl;
  };

  return (
    <div >
      <img
        src={imageUrl}
        alt={altText}
        onClick={handleClick}
        className="transition-transform hover:scale-110 w-24"
        style={{ cursor: 'pointer' }}
        title={toolTip}
        loading="lazy"
      />
    </div>
  );
};

export default GitLabImage;