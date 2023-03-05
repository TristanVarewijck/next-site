import styles from "./promotionCard.module.scss";
import { promotionCardProps } from "../../types";

const PromotionCard = ({
  uuid,
  img,
  imgAlt,
  title,
  subtitle,
}: promotionCardProps) => {
  return (
    <div className={`card ${styles.cardStyle}`} key={uuid}>
      <div className="card-img-top">
        <img src={img} alt={imgAlt} />
      </div>

      <div className={`card-body ${styles.cardBodyStyle}`}>
        <h4 className="card-title">{title}</h4>
        {subtitle && <p className="card-text">{subtitle}</p>}
      </div>
    </div>
  );
};

export default PromotionCard;
