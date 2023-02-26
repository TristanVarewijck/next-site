import styles from "./layout.module.scss";
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
