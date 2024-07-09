import React from "react";
import styled from "styled-components";
import logoImage from "../assets/gym logo.png";

export default function Logo() {
  return <Image src={logoImage} alt="Fitness Empire Logo" />;
}

const Image = styled.img`
  width: 100px; // Adjust size as needed
  height: auto;
`;
