import React from "react";
import styled from "styled-components";
import { servicesData } from "../data/localData";
import bg from "../assets/img_3.jpg";
import H1 from "../reusable/H1";
import WithBarTitle from "../reusable/WithBarTitle";

export default function Services() {
  return (
    <Container>
      <InnerContainer>
        <Box>
          <WithBarTitle title="Our Services for you" color="#fff" />
          <Header>
            <H1 style={{ width: "100%", fontSize: "2.5rem", color: "#fff" }}>
              PUSH YOUR LIMITS FORWARD WE OFFER TO YOU
            </H1>
          </Header>
          <Cards>
            {servicesData.map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </Cards>
        </Box>
      </InnerContainer>
    </Container>
  );
}

export function Card({ item }) {
  return (
    <MyCard background={item.background}>
      <Icon>{item.icon}</Icon>
      <Title>{item.title}</Title>
      <Description>{item.description}</Description>
    </MyCard>
  );
}

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: url(${bg});
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InnerContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 20px;
  box-sizing: border-box;
`;

const Box = styled.div`
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 50px;
`;

const MyCard = styled.div`
  height: 400px;
  background-color: white;
  background-image: url(${props => props.background});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  color: #fff; /* Text color set to white */
`;

const Icon = styled.span`
  font-size: 3rem;
  margin-bottom: 20px;
`;

const Title = styled.h3`
  font-size: 2rem;
  text-align: center;
  margin: 20px 0;
  font-weight: 400;
  color: #fff; /* Text color set to white */
`;

const Description = styled.p`
  font-size: 1.6rem;
  text-align: center;
  font-weight: 300;
  color: #fff; /* Text color set to white */
`;
