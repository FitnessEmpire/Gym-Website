import React from "react";
import styled from "styled-components";
import { trainersData } from "../data/TrainersData";
import H1 from "../reusable/H1";
import WithBarTitle from "../reusable/WithBarTitle";
import bg from '../assets/Gymbg_2.jpg';

export default function Trainers() {
  return (
    <Container>
      <InnerContainer>
        <Box>
          <WithBarTitle title="Meet Our Trainers" />
          <Header>
            <H1 style={{ width: "100%", fontSize: 30, color: "white" }}>
              PROFESSIONAL TRAINERS AT YOUR SERVICE
            </H1>
          </Header>
          <Cards>
            {trainersData.map((trainer, index) => (
              <Card key={index} trainer={trainer} />
            ))}
          </Cards>
        </Box>
      </InnerContainer>
    </Container>
  );
}

export function Card({ trainer }) {
  return (
    <MyCard>
      <ImageContainer>
        <Image src={trainer.image} alt={trainer.name} />
      </ImageContainer>
      <Title>{trainer.name}</Title>
      <Specialty>{trainer.specialty}</Specialty>
      <Description>{trainer.description}</Description>
    </MyCard>
  );
}

const Container = styled.div`
  background-image: url(${bg});
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  padding: 20px 0; /* Padding adjusted for spacing */
  box-sizing: border-box;
`;

const InnerContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: white;
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;
`;

const MyCard = styled.div`
  width: calc(30% - 20px);
  min-width: 250px;
  margin: 15px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  color: #212025;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 10px 0;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Title = styled.h3`
  font-size: 24px;
  text-align: center;
  margin: 10px 0;
  font-weight: 400;
  color: #333;
`;

const Specialty = styled.h4`
  font-size: 20px;
  text-align: center;
  margin: 10px 0;
  font-weight: 300;
  color: #777;
`;

const Description = styled.p`
  font-size: 16px;
  text-align: center;
  font-weight: 200;
`;
