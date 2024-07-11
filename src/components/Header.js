import React from "react";
import styled, { keyframes, css } from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../reusable/Logo";
import Button from "../reusable/Button";

const menusData = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Trainers", path: "/trainers" },
  { id: 5, name: "Gallery", path: "/Gallery" }
];

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

export default function Header() {
  return (
    <Container>
      <Left>
        <Logo />
      </Left>
      <Right>
        <Menus>
          {menusData.map((menu) => (
            <Menu key={menu.id}>
              <StyledLink to={menu.path}>{menu.name}</StyledLink>
            </Menu>
          ))}
        </Menus>
        <Link to="/become-member">
          <Button animation={css`${glow} 1.5s infinite`}>Become a member</Button>
        </Link>
      </Right>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #333;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Left = styled.div``;

const Right = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    margin-top: 10px;
  }
`;

const Menus = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Menu = styled.div`
  margin-right: 30px;

  @media screen and (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 16px;
  margin-right: 10px;

  &:hover {
    color: lightgray;
  }
`;
