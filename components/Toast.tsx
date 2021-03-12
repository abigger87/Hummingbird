import { useEffect } from "react";
import { useToasts } from "react-toast-notifications";

const Toast = () => {
  const { addToast } = useToasts();
  useEffect(() => {
    addToast("Please turn off adblock to allow client connections!", {
      appearance: "warning",
    });
  }, []);

  return <></>;
};

export default Toast;
