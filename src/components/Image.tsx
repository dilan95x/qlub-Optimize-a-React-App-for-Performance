 
interface ImageProps {
  image: {
    id: number;
    url: string;
    title: string;
    };
    styles?: React.CSSProperties;
}

const Image: React.FC<ImageProps> = ({ image, styles }) => {
  return (
    <img
    srcSet={`${image.url}?w=161&fit=crop&auto=format&dpr=2 2x`}
    src={`${image.url}?w=161&fit=crop&auto=format`}
    alt={image.title}
    loading="lazy"
    style={styles}
  />
  );
};

export default Image;
