import useFetch from "@/api/FetchApi";
import styles from "./newListPosts.module.css";
import PostProfile from "../postProfile/PostProfile";
import PostImg from "../postImg/PostImg";
import PostEngagement from "../postEngagement/PostEngagement";
import Loading from "@/app/loading";
import { useEffect } from "react";

const NewListPosts = ({ pageNum, pageType, username}) => {
  const path =
    pageType === "feed"
      ? `photos/random/?count=2&page=${pageNum}`
      : `users/${username}/photos/?per_page=2&page=${pageNum}`;

  const { data, error, isLoading, mutate } = useFetch(path);

  if (isLoading) return <Loading />;
  if (error) throw new Error();

  return (
    <>
      {data?.map((post) => (
        <div className={styles.postCard} key={post.id}>
          <PostProfile imgUrl={post.user.profile_image.large} username={post.user.username} />
          <PostImg imgUrl={post.urls.raw} alt_description={post.alt_description} />
          <PostEngagement likes={post.likes} downloads={post.downloads} />
          <span className={styles.description}>
            {post.description? post.description : post.alt_description}
          </span>
        </div>
      ))}
    </>
  );
};

export default NewListPosts;
