import styles from "./search.module.css";
import { IoSearchOutline } from "react-icons/io5";

const Search = () => {
  return (
    <div className={styles.search_container}>
      <div className={styles.searchBar}>
        <input
          className={styles.search_ip}
          placeholder="Search influencers by username, first name, last name, tags"
        />
        <button className={styles.searchtxt} type="submit">
          {" "}
          <div className={styles.search_div}>
            <div className={styles.logo}>
              <IoSearchOutline className={styles.searchIcon} />
            </div>
            <div className={styles.text}>Search</div>
          </div>
        </button>
      </div>
      <div className={styles.filter}>
        <button>
          <img
            src={require("../Images/filtericon.png")}
            className={styles.filtericon}
          ></img>
          <div className={styles.filterTxt}>Filter</div>
        </button>
      </div>
    </div>
  );
};

export default Search;
