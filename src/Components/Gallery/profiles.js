// import styles from "./profiles.module.css";
// import { IoLocationOutline } from "react-icons/io5";

// const Profile = () => {
//   return (
//     <div className={styles.main_container}>
//       <div className={styles.heading}>Today Best Profiles</div>
//       <div className={styles.profile_box}>
        
//         <div className={styles.profile_Container}>
//           <div className={styles.profile_img}>
//             <img
//               src={require("../Images/profile1.png")}
//               className={styles.img}
//             ></img>
//           </div>
//           <div className={styles.introduction}>
//             <div className={styles.profile_intro}>
//               <div className={styles.ppl_profile}>
//                 <div className={styles.ppl_img}>
//                   <img
//                     src={require("../Images/ppl1.png")}
//                     className={styles.ppl_pic}
//                   ></img>
//                 </div>
//                 <div className={styles.ppl_name}>
//                   <div className={styles.line1}>@brasel9</div>
//                   <div className={styles.line2}>brady shelly</div>
//                 </div>
//               </div>
//             </div>
//             <div className={styles.location}>
//               <div className={styles.loacation_name}>India</div>
//               <div>
//                 <IoLocationOutline className={styles.location_logo} />
//               </div>
//             </div>
//           </div>

//           <div className={styles.profile_followers}>
//             <div className={styles.follower_container}>
//             <div className={styles.follower1}>
//                 <p>32.2k</p>
//                 followers
//             </div>
//             <div className={styles.percent}>
//                 <p>6.64%</p>
//                 Engagement
//             </div>
//             </div>
            
//           </div>
//         </div>
//       </div>
//   );
// };
// export default Profile;



import styles from "./profiles.module.css";
import { IoLocationOutline } from "react-icons/io5";

const ProfileCard = ({ imgSrc, pplPic, userName, realName, location, followers, engagement }) => {
  return (
    <div className={styles.profile_Container}>
      <div className={styles.profile_img}>
        <img src={imgSrc} alt="profile" className={styles.img} />
      </div>
      <div className={styles.introduction}>
        <div className={styles.ppl_profile}>
          <img src={pplPic} alt="profile picture" className={styles.ppl_pic} />
          <div className={styles.ppl_name}>
            <div className={styles.line1}>{userName}</div>
            <div className={styles.line2}>{realName}</div>
          </div>
        </div>
        <div className={styles.location}>
          <div className={styles.loacation_name}>{location}</div>
          <IoLocationOutline className={styles.location_logo} />
        </div>
      </div>
      <div className={styles.profile_followers}>
        <div className={styles.follower_container}>
          <div className={styles.follower1}>
            <p>{followers}</p> followers
          </div>
          <div className={styles.percent}>
            <p>{engagement}</p> Engagement
          </div>
        </div>
      </div>
    </div>
  );
};

const Profile = () => {
  const profiles = [
    { imgSrc: require("../Images/profile1.png"), pplPic: require("../Images/ppl1.png"), userName: "@brasel9", realName: "brady shelly", location: "India", followers: "32.2k", engagement: "6.64%" },
    { imgSrc: require("../Images/profile2.png"), pplPic: require("../Images/pp2.png"), userName: "@brasel9", realName: "brady shelly", location: "India", followers: "32.2k", engagement: "6.64%" },
    { imgSrc: require("../Images/profile3.png"), pplPic: require("../Images/ppl1.png"), userName: "@brasel9", realName: "brady shelly", location: "India", followers: "32.2k", engagement: "6.64%" },
    { imgSrc: require("../Images/profile4.png"), pplPic: require("../Images/ppl1.png"), userName: "@brasel9", realName: "brady shelly", location: "India", followers: "32.2k", engagement: "6.64%" },
    { imgSrc: require("../Images/profile5.png"), pplPic: require("../Images/ppl1.png"), userName: "@brasel9", realName: "brady shelly", location: "India", followers: "32.2k", engagement: "6.64%" },
    { imgSrc: require("../Images/profile6.png"), pplPic: require("../Images/ppl1.png"), userName: "@brasel9", realName: "brady shelly", location: "India", followers: "32.2k", engagement: "6.64%" },
  
  ];

  return (
    <div className={styles.main_container}>
      <div className={styles.heading}>Today Best Profiles</div>
      <div className={styles.profile_box}>
        {profiles.map((profile, index) => (
          <ProfileCard key={index} {...profile} />
        ))}
      </div>
      <div className={styles.viewbtn}>
        <a className={styles.btn}>View more</a></div>
    </div>
  );
};

export default Profile;
