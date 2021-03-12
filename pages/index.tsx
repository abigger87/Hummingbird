import { Head, Header, ContractList, Toast } from "../components";
import {
  container,
  main,
  title,
  description,
  leftDiv,
  rightDiv,
  gridContainer,
} from "../styles";
import { GiHummingbird } from "react-icons/gi";
import React, { useEffect, useState } from "react";
import { AdBlockDetectedWrapper } from "adblock-detect-react";

const Home = () => {
  const [toastNotifications, setToastNotifications] = useState(<></>);
  useEffect(() => {
    setTimeout(() => {
      setToastNotifications(
        <AdBlockDetectedWrapper>
          <Toast />
        </AdBlockDetectedWrapper>
      );
    }, 1000);
  }, []);

  return (
    <div className={container}>
      <Head />
      <Header />
      {toastNotifications}
      <main className={main}>
        <div className={gridContainer}>
          <div className={leftDiv}>
            <div style={{ margin: "0 auto" }}>
              <GiHummingbird color={"currentColor"} size={100} />
            </div>
            <h1 className={title}>Hummingbird</h1>

            <p className={description}>
              Smart contract interaction tool. Connect and interact with
              localhost smart contracts.
            </p>
          </div>
          <div className={rightDiv}>
            <ContractList />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
