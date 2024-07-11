import React from "react";
import styled, { keyframes } from "styled-components";

const glow = keyframes`
  0% {
    box-shadow: 0 0 5px #007bff;
  }
  50% {
    box-shadow: 0 0 20px #007bff;
  }
  100% {
    box-shadow: 0 0 5px #007bff;
  }
`;

export default function Button({ children, style, animation }) {
  return (
    <BTN className="slide" style={style} animation={animation}>
      {children}
    </BTN>
  );
}

const BTN = styled.button`
  outline: none;
  border: none;
  text-transform: uppercase;
  padding: 25px;
  background-color: red;
  color: white;
  cursor: pointer;
  animation: ${(props) => props.animation};
  animation-duration: 2s;
  &:hover {
    animation: ${glow} 1.5s infinite;
  }
`;
