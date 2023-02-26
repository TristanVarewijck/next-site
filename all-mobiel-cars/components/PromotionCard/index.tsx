import styles from "./promotionCard.module.scss";
import { promotionCardProps } from "../../types";

const PromotionCard = ({
  uuid,
  img,
  imgAlt,
  title,
  subtitle,
  hasLink,
  linkText,
  linkHref,
}: promotionCardProps) => {
  return (
    <div className="card" style={{ width: "18rem" }} key={uuid}>
      <img src={img} className="card-img-top" alt={imgAlt} />
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        {subtitle && <p className="card-text">{subtitle}</p>}

        {hasLink && (
          <a href={linkHref} className="btn btn-primary">
            {linkText}
          </a>
        )}
      </div>
    </div>
  );
};

export default PromotionCard;
