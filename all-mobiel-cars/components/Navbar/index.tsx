import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.scss";
import { Check, Instagram, Facebook, Youtube } from "react-feather";

const Navbar = () => {
  return (
    <div className={styles.editNavContainer}>
      <div className={styles.navbarPromotion}>
        <ul className="container">
          <li>
            Klanttevredenheid
            <Link href="">
              <div>
                <p className="external-rating">9.2</p>
              </div>
            </Link>
          </li>
          <li>
            Expert in elk auto merk
            <div>
              <Check size={18} />
            </div>
          </li>
          <li>
            Snelle service
            <div>
              <Check size={18} />
            </div>
          </li>
          <li>
            Socials
            <ul>
              <li>
                <Link href="#">
                  <div>
                    <Instagram size={18} />
                  </div>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <div>
                    <Facebook size={18} />
                  </div>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <div>
                    <Youtube size={18} />
                  </div>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="container">
        <nav className={`navbar navbar-expand-lg ${styles.editNav}`}>
          <Link className="navbar-brand" href="/">
            <Image
              src="/images/logo.png"
              width="186"
              height="45"
              className="d-inline-block align-top"
              alt="all mobiel cars logo SVG"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse ${styles.editNavbarCollapse}`}
            id="navbarText"
          >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="/services"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Diensten
                </Link>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <Link className="dropdown-item" href="#">
                    APK
                  </Link>
                  <Link className="dropdown-item" href="#">
                    Onderhoud
                  </Link>
                  <Link className="dropdown-item" href="#">
                    Schadeherstel
                  </Link>
                  <Link className="dropdown-item" href="#">
                    Leasen
                  </Link>
                  <Link className="dropdown-item" href="#">
                    Bandenverkoop
                  </Link>
                </div>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Occasions
                </Link>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <Link className="dropdown-item" href="#">
                    Onze auto's
                  </Link>
                  <Link className="dropdown-item" href="#">
                    Importeren
                  </Link>
                  <Link className="dropdown-item" href="#">
                    Exporteren
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  APK
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  Bandenwissel
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/blog">
                  Blog
                </Link>
              </li>
            </ul>
            <Link className="btn btn-primary " href="/contact" role="button">
              Afspraak maken
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
