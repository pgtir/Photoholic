import useFetch from "@/api/FetchApi";
import Image from "next/image";
import styles from "./newGridPosts.module.css"
import PostEngagement from "../postEngagement/PostEngagement";
import Loading from "@/app/loading";

const NewGridPosts = ({pageNum, username}) => {
  const { data, error, isLoading } = useFetch(`users/${username}/photos/?per_page=6&page=${pageNum}`);

  if (isLoading)
    return <Loading/>
  if (error) {
    throw new Error()
  }

  return (
    <>
      {data.map((post) => (
        <div className={styles.container} key={post.id} >
            <Image className="img" fill={true} src={post.urls.raw} alt={post.alt_description} />
            <div className={styles.content}>
                <span className={styles.description}>{post.description? post.description : post.alt_description}</span>
                <div className={styles.line}></div>
                <PostEngagement likes={post.likes} downloads={post.downloads} />
            </div>
        </div>
      ))}
    </>
  );
};

export default NewGridPosts;