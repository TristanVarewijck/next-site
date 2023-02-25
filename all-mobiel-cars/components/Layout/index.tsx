import styles from "./layout.module.css";
import Navbar from "../Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className={`${styles.container} container`}>{children}</div>
    </>
  );
};

export default Layout;
