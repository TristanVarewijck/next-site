import Link from "next/link";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <div className="container">
          <div className="row gx-5 gy-5">
            <div className="col-md">
              <h6>LOGO</h6>
              <p>
                Bij All Mobiel Cars krijg je snel en vertrouwbaar onderhoud
                daarnaast hebben we ook andere diensten.
              </p>
              <Link
                className="btn btn-primary"
                href="#!"
                style={{ width: "100%" }}
              >
                Afspraak maken
              </Link>
            </div>

            <div className="footer-items-container col-md">
              <div className="row row gy-5">
                <div className="col-md">
                  <h6>Diensten</h6>
                  <div className={styles.linksContainer}>
                    <Link href="#!">Bandenverkoop</Link>
                    <Link href="#!">Schadeherstel</Link>
                    <Link href="#!">Onderhoud</Link>
                    <Link href="#!">APK</Link>
                    <Link href="#!">Leasen</Link>
                  </div>
                </div>

                <div className="col-md">
                  <h6>Occasions</h6>
                  <div className={styles.linksContainer}>
                    <Link href="#!">Ons aanbod</Link>
                    <Link href="#!">Importeren</Link>
                    <Link href="#!">Exporteren</Link>
                  </div>
                </div>

                <div className="col-md">
                  <h6>Legal</h6>
                  <div className={styles.linksContainer}>
                    <Link href="#!">Terms</Link>
                    <Link href="#!">Privacy</Link>
                    <Link href="#!">Cookies</Link>
                    <Link href="#!">License</Link>
                  </div>
                </div>

                <div className="col-md">
                  <h6>Contact</h6>
                  <div className={styles.linksContainer}>
                    <Link href="mailto:">info@allmobielcars.nl</Link>
                    <Link href="tel:(075) 622 9727">(075) 622 9727</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>©2023 All Mobiel Cars. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
