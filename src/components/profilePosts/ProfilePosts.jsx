"use client";
import styles from "./profilePosts.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTableCellsLarge, faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import InfiniteScroll from "../infiniteScroll/InfiniteScroll";
import { useSelector } from "react-redux";

const ProfilePosts = ({ username }) => {
  const [currentView, setCurrentView] = useState("grid");
  const { numProfilePosts } = useSelector((state) => state.app);
  const numOfLoads =
    currentView === "grid"
      ? Math.ceil(numProfilePosts / 6)
      : Math.ceil(numProfilePosts / 2);
      
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span>Uploaded Posts</span>
        <div className={styles.icons}>
          <FontAwesomeIcon
            title="Grid View"
            className={`${styles.icon} ${
              currentView === "grid" && styles.active
            }`}
            icon={faTableCellsLarge}
            onClick={() => setCurrentView("grid")}
          />
          <FontAwesomeIcon
            title="List View"
            className={`${styles.icon} ${
              currentView === "list" && styles.active
            }`}
            icon={faBars}
            onClick={() => setCurrentView("list")}
          />
        </div>
      </div>
      {numProfilePosts > 0 && <InfiniteScroll username={username} numOfLoads={numOfLoads} viewType={currentView} pageType="userProfile" />}
    </div>
  );
};

export default ProfilePosts;
