interface AWSAIProps {
  imageUrl: string;
  linkUrl: string;
  altText: string;
}

const AWSAIImage: React.FC<AWSAIProps> = ({ imageUrl, linkUrl, altText }) => {
  return (
    <div>
      <a
        href={linkUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform hover:scale-120 w-28 inline-block"
      >
        <img
          src={imageUrl}
          alt={altText}
          loading="lazy"
          style={{ display: 'block' }}
        />
      </a>
    </div>
  );
};

export default AWSAIImage;