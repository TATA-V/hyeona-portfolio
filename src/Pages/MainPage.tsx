import styled from "styled-components";

import Head from "../components/Head/Head";
import Main from "../components/Main/Main";
import AboutMe from "../components/AboutMe/AboutMe";
import Skills from "../components/Skills/Skills";
import Archiving from "../components/Archiving/Archiving";
import Projects from "../components/Projects/Projects";
import Foot from "../components/Foot/Foot";

const MainPageBlock = styled.div`
  min-height: 100vh;
  position: relative;

  @media all and (max-width: 1023px) {
    overflow-x: hidden;
  }
`;

const MainPage = () => {
  return (
    <MainPageBlock>
      <Head />
      <Main />
      <AboutMe />
      <Skills />
      <Archiving />
      <Projects />
      <Foot />
    </MainPageBlock>
  );
};

export default MainPage;
