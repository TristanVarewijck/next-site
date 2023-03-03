import Link from "next/link";
import styles from "./serviceBlock.module.scss";
import { serviceBlockProps } from "../../types";
import Image from "next/image";
import { Check } from "react-feather";

const ServiceBlock = ({ uuid, title, href }: serviceBlockProps) => {
  return (
    <Link href={href} key={uuid} className={styles.container}>
      <div>
        <div>
          <Check />
        </div>
        <h4>{title}</h4>
        <Image
          src={"/icons/long-arrow.svg"}
          alt={"long right pointing arrow icon"}
          width={100}
          height={15}
        />
      </div>
    </Link>
  );
};

export default ServiceBlock;
