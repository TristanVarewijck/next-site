import Link from "next/link";
import styles from "./textBlock.module.scss";
import { textBlockProps } from "../../types";
import { ArrowRight } from "react-feather";

const TextBlock = ({
  uuid,
  title,
  text,
  hasLink,
  linkText,
  linkHref,
}: textBlockProps) => {
  return (
    <div key={uuid} className={styles.container}>
      <h4>{title}</h4>
      <p>{text}</p>
      {hasLink && (
        <Link className={"btn btn-primary-link"} href={linkHref}>
          <p>{linkText}</p>
          <ArrowRight size={14.5} />
        </Link>
      )}
    </div>
  );
};

export default TextBlock;
