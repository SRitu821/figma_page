import styles from "./pannel.module.css";
import { LiaGlobeAmericasSolid } from "react-icons/lia";
import { BiMessageSquareDetail } from "react-icons/bi";
import { IoMdContact } from "react-icons/io";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
const Pannel = () => {
  return (
    <div className={styles.pannelContainer}>
      <h3> Solo </h3>
      <div className={styles.divContainer}>
        <div className={styles.div1}>
          <div className={styles.div_item}>
            {" "}
            <LiaGlobeAmericasSolid className={styles.icons} /> Discover
          </div>
          <div className={styles.div_item}>
            {" "}
            <BiMessageSquareDetail className={styles.icons} /> Connect
          </div>
          <div className={styles.div_item}>
            {" "}
            <IoMdContact className={styles.icons} /> Top 100 Creatores
          </div>
        </div>

        <div className={styles.div2}>
          <div className={styles.div_item}>
            <IoIosHelpCircleOutline className={styles.icons} /> Help
          </div>
          <div className={styles.div_item}>
            <CgProfile className={styles.icons} /> Profile
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pannel;
