import ProfileInfo from "@/components/profileInfo/ProfileInfo";
import styles from "./page.module.css";
import ProfilePosts from "@/components/profilePosts/ProfilePosts";

const UserProfile = ({ params }) => {
  const username = params.username;
  return <div className={styles.container}>
    <ProfileInfo username={username} />
    <ProfilePosts username={username} />
  </div>;
};

export default UserProfile;
