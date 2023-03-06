import styles from "./promotionCardSmall.module.scss";

interface promotionCardSmallProps {
  title: string;
}

const PromotionCardSmall = ({ title }: promotionCardSmallProps) => {
  return (
    <div className={styles.container}>
      <p>
        Promotie: <span>{title}</span>
      </p>
    </div>
  );
};

export default PromotionCardSmall;
