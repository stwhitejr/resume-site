export interface FixedBgImageProps {
  backgroundImage: string;
}

const FixedBgImage = (props: FixedBgImageProps) => {
  return (
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat [background-attachment:fixed]"
      style={{
        backgroundImage: props.backgroundImage,
      }}
    />
  );
};

export default FixedBgImage;
