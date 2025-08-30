import { navigateTo } from '../lib/navigation';

interface UWMProps {
  imageUrl: string;
  linkUrl: string;
  altText: string;
  size?: string;
}

const UWMImage: React.FC<UWMProps> = ({ imageUrl, linkUrl, altText, size = 'w-24' }) => {
  const handleClick = () => {
    navigateTo(linkUrl);
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className={`transition-transform hover:scale-110 items-center ${size}`}
        style={{ cursor: 'pointer', padding: 0, border: 'none', background: 'none' }}
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

export default UWMImage;
