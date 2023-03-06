import Image from "next/image";
import styles from "./readOnlyText.module.scss";

interface readOnlyTextProps {
  text: string;
  imageUrl?: string;
}

const ReadOnlyText = ({ text, imageUrl }: readOnlyTextProps) => {
  return (
    <section className={styles.container}>
      <p>{text}</p>

      {imageUrl && (
        <div
          className="image-container position-relative"
          style={{ height: "350px", width: "100%" }}
        >
          <Image
            src={imageUrl}
            layout="fill"
            objectFit="cover"
            alt={"Afspraak maken section image"}
            style={{ borderRadius: "4px" }}
          />
        </div>
      )}
    </section>
  );
};

export default ReadOnlyText;
