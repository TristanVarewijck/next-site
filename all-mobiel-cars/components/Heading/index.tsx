import styles from "./heading.module.scss";

interface headingProps {
  titleText: string;
  subtitleText?: string | null;
  align: "center" | "left" | "right";
}

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
    <div className={getAlignStyle()} style={{ marginBottom: "40px" }}>
      <h1>{titleText}</h1>
      {subtitleText && <p>{subtitleText}</p>}
    </div>
  );
};

export default Heading;
