interface WorkProps {
  imageUrl: string;
  linkUrl: string;
  altText: string;
  toolTip: string;
}

const WorkImage: React.FC<WorkProps> = ({ imageUrl, linkUrl, altText, toolTip }) => {
  const handleClick = () => {
    window.location.href = linkUrl;
  };

  return (
    <div >
      <img
        src={imageUrl}
        alt={altText}
        onClick={handleClick}
        width={200}
        className="transition-transform hover:scale-110"
        style={{ cursor: 'pointer' }}
        title={toolTip}
      />
    </div>
  );
};

export default WorkImage;