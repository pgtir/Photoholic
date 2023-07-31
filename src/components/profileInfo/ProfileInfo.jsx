"use client";
import useFetch from "@/api/FetchApi";
import styles from "./profileInfo.module.css";
import Loading from "@/app/loading";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { setNumProfilePosts } from "@/redux/slice";

const ProfileInfo = ({ username }) => {
  const { data, error, isLoading } = useFetch(`users/${username}/?`);
  const dispatch = useDispatch();
  
  if (isLoading) {
    return <Loading />;
  }
  if (error) throw new Error();

  const activityData = [
    {
      label: "Photos",
      key: "total_photos",
    },
    {
      label: "Collections",
      key: "total_collections",
    },
    {
      label: "Likes",
      key: "total_likes",
    },
  ];

  
   data &&  dispatch(setNumProfilePosts(data.total_photos))
  
 
  return (
    <>
      {data && (
        <div className={styles.container}>
          <div className={styles.imgContainer}>
            <div className={styles.profileImg}>
              <Image
                className="img"
                style={{borderRadius: "50%"}}
                src={data.profile_image.large}
                fill={true}
                alt={data.name}
              />
            </div>
          </div>
          <div className={styles.mainInfo}>
            <span className={styles.name}>{data.name}</span>
            <span className={styles.username}>{data.username}</span>
            <button className={styles.followButton}>Follow</button>
            <div className={styles.engagement}>
              {activityData.map((item) => (
                <div className={styles.engage} key={item.key} >
                  <span className={styles.num}>{data[item.key]}</span>
                  <span className={styles.label}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileInfo;
