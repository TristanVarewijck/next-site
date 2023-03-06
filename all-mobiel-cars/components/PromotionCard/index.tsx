import styles from "./promotionCard.module.scss";
import { promotionCardProps } from "../../types";
import Link from "next/link";

const PromotionCard = ({
  uuid,
  img,
  imgAlt,
  title,
  subtitle,
  url,
}: promotionCardProps) => {
  return (
    <div className={`card ${styles.cardStyle}`} key={uuid}>
      <div className="card-img-top">
        <img src={img} alt={imgAlt} />
      </div>

      <Link href={url}>
        <div className={`card-body ${styles.cardBodyStyle}`}>
          <h4 className="card-title">{title}</h4>
          {subtitle && <p className="card-text">{subtitle}</p>}
        </div>
      </Link>
    </div>
  );
};

export default PromotionCard;
