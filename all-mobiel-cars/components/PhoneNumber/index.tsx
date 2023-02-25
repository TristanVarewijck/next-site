import styles from "./phoneNumber.module.css";

interface phoneNumberProps {
  text?: string;
  number: string;
}

const PhoneNumber = ({ text, number }: phoneNumberProps) => {
  return (
    <div className={styles.container}>
      <a href={`tel:${number}`}>
        <p>{text}</p>
        <h2>{number}</h2>
      </a>
    </div>
  );
};

export default PhoneNumber;
