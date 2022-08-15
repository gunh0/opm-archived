import Image from "next/image";
import { FunctionComponent } from "react";

import styles from "../../styles/Home.module.scss";

interface AdImageProps {
  src: string;
  containerClassName?: string;
  imageClassName?: string;
  onClick?: () => void;
}

const defaultClickEvent = () => {
  alert("AD CLICK!");
};

const AdImage: FunctionComponent<AdImageProps> = ({
  onClick = defaultClickEvent,
  src,
  containerClassName = "",
  imageClassName = "",
}) => {
  return (
    <div
      className={`${styles.AdImageContainer} ${containerClassName}`}
      onClick={onClick}
    >
      <Image
        className={imageClassName}
        src={src}
        alt="img"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
};

export default AdImage;
