import React from "react";
import styled from "styled-components";
import bg1 from "../assets/img_8.jpg";
import H1 from "../reusable/H1";
import Paragraph from "../reusable/Paragraph";
import WithBarTitle from "../reusable/WithBarTitle";
import bg from "../assets/About.jpg";

export default function About() {
  return (
    <Container>
      <Left>
        <Image src={bg} alt="Background Image" />
      </Left>
      <Right>
        <Content>
          <WithBarTitle title="About Our Gym" color="#fff" />
          <MainTitle>
            Fitness Empire Founded on Integrity and Dedication
          </MainTitle>
          <Paragraph color="#fff">
            At Fitness Empire, we are committed to providing top-notch fitness
            solutions tailored to your needs. Founded on principles of integrity
            and dedication, our gym strives to help you achieve your fitness
            goals efficiently.
          </Paragraph>

          <InfoSection>
            <InfoTitle>Founder</InfoTitle>
            <InfoDetail>Syed Tabarak</InfoDetail>
          </InfoSection>

          <InfoSection>
            <InfoTitle>Address</InfoTitle>
            <InfoDetail>
              F-27/1C, 16th Main opp. Beside NIE College Kalyani motors,
              Vidyaranyapuram, Mysore, Karnataka 570008
            </InfoDetail>
          </InfoSection>
          <InfoSection>
            <InfoTitle>Contact</InfoTitle>
            <InfoDetail>
            <PhoneNumberLink href="tel:7829073184">7829073184</PhoneNumberLink>
            <PhoneNumberLink href="tel:7406830400">7406830400</PhoneNumberLink>
            </InfoDetail>
          </InfoSection>
        </Content>
      </Right>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-image: url(${bg1});
  background-size: cover;
  background-position: center;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 50%;
  height: auto;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 20px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
`;

const Right = styled.div`
  flex: 1;
  padding-left: 20px;

  @media (max-width: 768px) {
    padding-left: 0;
  }
`;

const Content = styled.div`
  max-width: 600px;
`;

const MainTitle = styled(H1)`
  margin-top: 20px;
  color: #fff;
`;

const InfoSection = styled.div`
  margin-top: 20px;
`;

const InfoTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;

const InfoDetail = styled.p`
  font-size: 16px;
  font-weight: normal;
  color: #ccc;
`;
const PhoneNumberLink = styled.a`
  color: white; /* Set the color to white */
  text-decoration: none; /* Remove underline */
  margin-right: 5px; /* Adjust margin if needed */
`;
