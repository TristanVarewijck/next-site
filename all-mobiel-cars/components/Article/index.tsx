import styles from "./article.module.scss";
import Image from "next/image";
import TextBlock from "./TextBlock";
import { articleProps } from "../../types";

const Article = ({
  image,
  uuid,
  title,
  text,
  hasLink,
  linkHref,
  linkText,
  index,
}: articleProps) => {
  return (
    <article
      className="row gx-5 mb-5"
      key={uuid}
      style={
        index % 2 == 0
          ? { flexDirection: "row-reverse", alignItems: "center", gap: "15px" }
          : { flexDirection: "row", alignItems: "center", gap: "15px" }
      }
    >
      <div className="col-md">
        <TextBlock
          uuid={uuid}
          title={title}
          text={text}
          hasLink={hasLink}
          linkHref={linkHref}
          linkText={linkText}
        />
      </div>
      <div className="col-md">
        <div
          className="image-container position-relative"
          style={{ height: "350px", width: "100%" }}
        >
          <Image
            src={image}
            layout="fill"
            objectFit="cover"
            alt={"Afspraak maken section image"}
            style={{ borderRadius: "4px" }}
          />
        </div>
      </div>
    </article>
  );
};

export default Article;
