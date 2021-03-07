import styled from "styled-components";
import { Head, Header, ContractList } from "../components";
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

const Container = styled.div`
  background-color: ${(props) => props.theme.bg.primary};
  color: ${(props) => props.theme.text.primary};
`;

const Home = () => {
  return (
    <Container className={container}>
      <Head />
      <Header />

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
    </Container>
  );
};

export default Home;
