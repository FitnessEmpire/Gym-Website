import React from "react";
import styled from "styled-components";

export default function WithBarTitle({ title }) {
  return (
    <Box>
      <Line />
      <Title>{title}</Title>
    </Box>
  );
}

const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  animation: fadeInLeft;
  animation-duration: 2s;
`;

const Line = styled.div`
  width: 60px;
  height: 4px;
  background: linear-gradient(to right, #FF416C, #FF4B2B); /* Gradient colors */
  margin-right: 20px;
  transition: width 0.3s ease-in-out;

  @media (max-width: 768px) {
    width: 40px;
  }
`;

const Title = styled.p`
  color: #ff416c; /* Text color */
  text-transform: uppercase;
  font-weight: 600;
  font-size: 18px;
  letter-spacing: 1.5px;
  margin: 0;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #FF4B2B; /* Hover text color */
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
