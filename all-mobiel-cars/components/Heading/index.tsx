import styles from "./heading.module.scss";
import { headingProps } from "../../types";

const Heading = ({ titleText, subtitleText, align }: headingProps) => {
  const getAlignStyle = (): string => {
    switch (align) {
      case "center":
        return styles.containerCenter;
      case "right":
        return styles.containerRight;
      default:
        return styles.containerLeft;
    }
  };

  return (
    <div className={getAlignStyle()} style={{ marginBottom: "35px" }}>
      <h1>{titleText}</h1>
      {subtitleText && <p>{subtitleText}</p>}
    </div>
  );
};

export default Heading;
