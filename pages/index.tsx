import styled from "styled-components";
import { Head, Header, QueryList, Roadrunner } from "../components";
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
            <div style={{ margin: "auto" }}>
              <GiHummingbird color={"currentColor"} size={40} />
            </div>
            <h1 className={title}>Hummingbird</h1>

            <p className={description}>Simple interface to query The Graph.</p>
          </div>
          <div className={rightDiv}>
            <QueryList />
          </div>
        </div>
      </main>
    </Container>
  );
};

export default Home;
