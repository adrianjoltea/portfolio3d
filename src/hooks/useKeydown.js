import { useEffect } from "react";

const useKeydown = (key, callback) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === key) {
        callback();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [key, callback]);
};

export default useKeydown;
