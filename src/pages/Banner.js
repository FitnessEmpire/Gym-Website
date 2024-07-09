import React from "react";
import styled from "styled-components";
import bg from "../assets/img_10.jpg";
import H1 from "../reusable/H1.js";
import Header from "../components/Header.js";

export default function Banner() {
  return (
    <Main>
      <Header />
      <Container>
        <RightBox>
          <StyledH1 color="White">
            Build Perfect body shape for good and healthy life.
          </StyledH1>
        </RightBox>
        <LeftBox />
      </Container>
    </Main>
  );
}

const Main = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${bg});
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover; /* Adjust background size to cover */
  background-position: center;
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 20px; /* Added padding for smaller screens */
  
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto; /* Adjust height for better display on mobile */
  }
`;

const LeftBox = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
  }
`;

const RightBox = styled.div`
  width: 50%;
  padding: 0px 100px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 20px; /* Adjust padding for better display on mobile */
    text-align: center; /* Center-align text on mobile */
  }
`;

const StyledH1 = styled(H1)`
  @media (max-width: 768px) {
    font-size: 1.5rem; /* Adjust font size for better readability on mobile */
  }
`;
