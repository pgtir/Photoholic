"use client";
import { useEffect, useState } from "react";
import NewListPosts from "../newListPosts/NewListPosts";
import NewGridPosts from "../newGridPosts/NewGridPosts";
import styles from "./infiniteScroll.module.css";

const InfiniteScroll = ({ numOfLoads, viewType, pageType, username }) => {
  const [loadCount, setLoadCount] = useState(1);
  const posts = [];

  for (let i = 0; i < loadCount; i++) {
    viewType === "list" && posts.push(<NewListPosts loadCount={loadCount} username={username} pageNum={i+1} key={i} pageType={pageType} />);
    viewType === "grid" && posts.push(<NewGridPosts username={username} pageNum={i+1} key={i}  />);
  }

  const handleInfiniteLoading = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setLoadCount((prev) => (prev < numOfLoads ? prev + 1 : prev));
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteLoading);
    return () => window.removeEventListener("scroll", handleInfiniteLoading);
  }, []);

  return (
    <div
    style={{position: "relative"}}
      className={
        viewType === "list" ? styles.listContainer : styles.gridContainer
      }
    >
      {posts}
    </div>
  );
};

export default InfiniteScroll;
