import styles from "./layout.module.scss";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className={`${styles.container} container`}>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
