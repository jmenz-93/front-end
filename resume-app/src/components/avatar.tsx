const Avatar = () => {
  return (
    <div className="flex justify-center items-center">
      <img
        className="inline-block size-35 rounded-full ring-2 ring-white"
        src="/Image.JPG"
        alt="Avatar"
        width={180}
        height={120}
        style={{ objectFit: 'cover', objectPosition: 'center top' }}
      />
    </div>
  );
};

export default Avatar;
