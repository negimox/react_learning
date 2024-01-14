import { useState, useEffect } from "react";

const useStatus = () => {
  const [useStatus, setUseStatus] = useState(true);
  //Check if online
  useEffect(() => {
    window.addEventListener("offline", () => {
      setUseStatus(false);
    });

    window.addEventListener("online", () => {
      setUseStatus(true);
    });
  }, []);

  return useStatus;
};
export default useStatus;
