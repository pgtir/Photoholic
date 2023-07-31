import Link from "next/link";
import styles from "./postPofile.module.css";
import Image from "next/image";

const PostProfile = ({imgUrl, username}) => {
  const profilePath = `/user/${username}`;
  return (
      <div className={styles.container}>
        <Link href={profilePath}>
            <Image title="See User Profile" src={imgUrl} alt={username}  width={32} height={32} className={styles.userImg} />
        </Link>
        <Link href={profilePath}>
          <span title="See User Profile" className={styles.username}>{username}</span>
        </Link>
      </div>
  );
};

export default PostProfile;
