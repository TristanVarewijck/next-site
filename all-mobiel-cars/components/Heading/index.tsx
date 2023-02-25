import styles from "./heading.module.css";

interface headingProps {
  titleText: string;
  subtitleText?: string | null;
}

const Heading = ({ titleText, subtitleText }: headingProps) => {
  return (
    <div>
      <h1>{titleText}</h1>
      {subtitleText && <p>{subtitleText}</p>}
    </div>
  );
};

export default Heading;
