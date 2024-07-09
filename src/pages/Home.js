import React from "react";
import styled from "styled-components";
import About from "../pages/About";
import Banner from "../pages/Banner";
import Services from "../pages/Services";
import Trainers from "./Trainers";
import Gallery from "./Gallery";

const HomeContainer = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

const Section = styled.div`
  width: 100%;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center; /* Centers content horizontally */
  align-items: center;    /* Centers content vertically if section has height */
  flex-direction: column; /* Ensures content stacks vertically */
`;

export default function Home() {
  return (
    <HomeContainer>
      <Section>
        <Banner />
      </Section>
      <Section>
        <About />
      </Section>
      <Section>
        <Services />
      </Section>
      <Section>
        <Trainers />
      </Section>
      <Section>
        <Gallery />
      </Section>
    </HomeContainer>
  );
}
