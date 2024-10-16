/* import styles from "./category.module.css";

const Category = () => {
  return (
    <div className={styles.category_conatainer}>
      <div className={styles.heading}>Search By Category</div>
      <div className={styles.items_container}>
        <div className={styles.items}>
          <div className={styles.img_box}>
            <img
              src={require("../Images/travel.png")}
              className={styles.img}
            ></img>
          </div>
          <div className={styles.img_name}>Travel</div>
        </div>
        <div className={styles.items}>
          <div className={styles.img_box}>
            <img
              src={require("../Images/sports.png")}
              className={styles.img}
            ></img>
          </div>
          <div className={styles.img_name}>Sports</div>
        </div>
        <div className={styles.items}>
          <div className={styles.img_box}>
            <img
              src={require("../Images/marketing.png")}
              className={styles.img}
            ></img>
          </div>
          <div className={styles.img_name}>Marketing</div>
        </div>
        <div className={styles.items}>
          <div className={styles.img_box}>
            <img
              src={require("../Images/family.png")}
              className={styles.img}
            ></img>
          </div>
          <div className={styles.img_name}>Family</div>
        </div>
        <div className={styles.items}>
          <div className={styles.img_box}>
            <img
              src={require("../Images/fashion.png")}
              className={styles.img}
            ></img>
          </div>
          <div className={styles.img_name}>Fashion</div>
        </div>
        <div className={styles.items}>
          <div className={styles.img_box}>
            <img
              src={require("../Images/podcast.png")}
              className={styles.img}
            ></img>
          </div>
          <div className={styles.img_name}>Podcast</div>
        </div>
        <div className={styles.items}>
          <div className={styles.img_box}>
            <img
              src={require("../Images/news.png")}
              className={styles.img}
            ></img>
          </div>
          <div className={styles.img_name}>News</div>
        </div>
      </div>
    </div>
  );
};

export default Category; */

import styles from "./category.module.css";

// Reusable component for each category item
const CategoryItem = ({ imgSrc, name }) => {
  return (
    <div className={styles.items}>
      <div className={styles.img_box}>
        <img
          src={require(`../Images/${imgSrc}.png`)}
          className={styles.img}
        ></img>
      </div>
      <div className={styles.img_name}>{name}</div>
    </div>
  );
};

const Category = () => {
  const categories = [
    { imgSrc: "travel", name: "Travel" },
    { imgSrc: "sports", name: "Sports" },
    { imgSrc: "marketing", name: "Marketing" },
    { imgSrc: "family", name: "Family" },
    { imgSrc: "fashion", name: "Fashion" },
    { imgSrc: "podcast", name: "Podcast" },
    { imgSrc: "news", name: "News" },
  ];

  return (
    <div className={styles.category_conatainer}>
      <div className={styles.heading}>Search By Category</div>
      <div className={styles.items_container}>
        {categories.map((category, index) => (
          <CategoryItem
            key={index}
            imgSrc={category.imgSrc}
            name={category.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
