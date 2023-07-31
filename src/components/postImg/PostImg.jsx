import Image from "next/image";
import styles from "./postImg.module.css";

const PostImg = ({ imgUrl, alt_description }) => {
  return (
    <div className={styles.container}>
      <Image className="img" alt={alt_description} fill={true} src={imgUrl} />
    </div>
  );
};

export default PostImg;
