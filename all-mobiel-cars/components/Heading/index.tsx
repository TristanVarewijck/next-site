import styles from "./heading.module.scss";
import { headingProps } from "../../types";

const Heading = ({ titleText, subtitleText, align, size }: headingProps) => {
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

  const getTitle = (titleText: string): JSX.Element => {
    switch (size) {
      case "big":
        return <h1>{titleText}</h1>;
      case "medium":
        return <h2>{titleText}</h2>;
      default:
        return <h3>{titleText}</h3>;
    }
  };

  return (
    <div className={getAlignStyle()} style={{ marginBottom: "35px" }}>
      {getTitle(titleText)}
      {subtitleText && <p>{subtitleText}</p>}
    </div>
  );
};

export default Heading;
