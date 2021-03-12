import { Provider } from "../components";
import "../styles/globals.css";
import { ToastProvider } from "react-toast-notifications";

const MyApp = ({
  Component,
  pageProps,
}: {
  Component: any;
  pageProps: any;
}) => {
  return (
    <ToastProvider placement={"bottom-center"} autoDismissTimeout={2000}>
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </ToastProvider>
  );
};

export default MyApp;
