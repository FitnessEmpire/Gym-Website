// src/components/StyledLink.js
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default StyledLink;
