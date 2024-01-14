import useStatus from "../utils/useStatus";

const Status = () => {
  const status = useStatus();
  const statusText = status ? null : "OFFLINE";
  return (
    <div className={`status${status ? ".closed" : ""}`}>
      <h2>{statusText}</h2>
    </div>
  );
};

export default Status;
