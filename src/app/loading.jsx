import ClipLoader from "react-spinners/ClipLoader";

const Loading = () => {
  return (
    <div style={{ position: "absolute", top: "45px", left: "50%" }}>
      <ClipLoader
        color="#00D09C"
        loading={true}
        size={35}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loading;
