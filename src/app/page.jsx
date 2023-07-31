import styles from "./page.module.css";
import InfiniteScroll from "@/components/infiniteScroll/InfiniteScroll";

const Feed = () => {
  return (
    <div className={styles.container}>
      <div className={styles.labelContainer}>
        <span className={styles.label}>My Feed</span>
      </div>
      <InfiniteScroll numOfLoads={3} viewType="list" pageType="feed" />
    </div>
  );
};

export default Feed;
