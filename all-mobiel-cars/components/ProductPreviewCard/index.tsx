import Link from "next/link";
import styles from "./productPreviewCard.module.scss";
import Image from "next/image";

interface productPreviewCardProps {
  title: string;
  shortDescription: string;
  productId: number;
}

const ProductPreviewCard = ({
  title,
  shortDescription,
  productId,
}: productPreviewCardProps) => {
  return (
    <Link href={`services/${productId}`} className={styles.container}>
      <div className="card">
        <div className="card-body">
          <h4>{title}</h4>
          <p>{shortDescription}</p>
          <div>
            <Image
              src={"/icons/long-arrow.svg"}
              alt={"long right pointing arrow icon"}
              width={100}
              height={15}
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductPreviewCard;
