import { Provider } from "../components";
import "../styles/globals.css";
import { ToastProvider } from "react-toast-notifications";
import { AdBlockDetectedWrapper } from "adblock-detect-react";

const MyApp = ({
  Component,
  pageProps,
}: {
  Component: any;
  pageProps: any;
}) => {
  return (
    <AdBlockDetectedWrapper>
      <ToastProvider>
        <Provider>
          <Component {...pageProps} />
        </Provider>
      </ToastProvider>
    </AdBlockDetectedWrapper>
  );
};

export default MyApp;
