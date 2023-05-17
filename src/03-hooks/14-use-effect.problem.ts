import { useEffect } from "react";

export const useTimeout = (timerMs: number) => {
  useEffect(() => {
    const timerID = setTimeout(() => {
      console.log("Done!");
    }, timerMs)

    return () => clearTimeout(timerID);
  }, [timerMs]);
};
