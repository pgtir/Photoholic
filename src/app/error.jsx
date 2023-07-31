"use client";
export default function Error() {

  return (
    <div
      style={{
        height: "50vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "8px",
      }}
    >
      <span
        style={{
          border: "1px solid red",
          padding: "10px 20px",
          borderRadius: "4px",
          color: "red",
          opacity: "80%",
        }}
      >
        Something went wrong!
      </span>
      <span>
        The Rate Limit Might Have Exceeded ! Please try after sometime
      </span>
    </div>
  );
}
