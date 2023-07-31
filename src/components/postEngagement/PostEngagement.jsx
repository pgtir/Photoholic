import styles from "./postEngagement.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faArrowAltCircleDown } from "@fortawesome/free-regular-svg-icons";

const PostEngagement = ({likes, downloads}) => {
  return (
    <div className={styles.container}>
      <div className={styles.engage}>
        <FontAwesomeIcon className={styles.likeIcon} icon={faHeart} />
        <span>{likes}</span>
      </div>
      <div className={styles.engage}>
        <FontAwesomeIcon className={styles.downloadIcon} icon={faArrowAltCircleDown} />
        <span>{downloads}</span>
      </div>
    </div>
  );
};

export default PostEngagement;
