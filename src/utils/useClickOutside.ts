import { useEffect } from "react";

const useClickOutside = (ref: any, cb: any) => {
  useEffect(() => {
    const listener = (e : any ) => {
      if (!ref.current || ref.current.contains(e.target)) {
        return;
      }
      cb();
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref]);
};

export default useClickOutside;
