import styles from "./footer.module.css";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoHeart } from "react-icons/io5";
const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <div className={styles.upper_part}>
        <div className={styles.info}>
          <div>
            <u>welcome</u>
          </div>
          <div className={styles.info_div}>
            <div className={styles.text}>about us</div>
            <div className={styles.text}>blog</div>
          </div>
        </div>
        <div className={styles.info}>
          <div>
            <u>brands</u>
          </div>
          <div className={styles.info_div}>
            <div className={styles.text}>search</div>
            <div className={styles.text}>market with us</div>
          </div>
        </div>
        <div className={styles.info}>
          <div>
            <u>creaters</u>
          </div>
          <div className={styles.info_div}>
            <div className={styles.text}>install solo</div>
            <div className={styles.text}>
              <img
                src={require("../Images/footerlogo.png")}
                className={styles.img}
              ></img>
              <FaLinkedin className={styles.logo} />
              <FaInstagram className={styles.logo} />
              <img
                src={require("../Images/mail.png")}
                className={styles.img1}
              ></img>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.lower_part}>
        © Copyright 2023 Solo . Powered with{" "}
        <IoHeart className={styles.logo2} /> by Netz00
      </div>
    </div>
  );
};
export default Footer;
