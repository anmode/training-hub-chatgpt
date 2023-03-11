import React from "react";
import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <Container>
      <Nav>
        <Logo>Training HUB</Logo>
        <NavLinks>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </NavLinks>
      </Nav>
      <Main>{children}</Main>
      <Footer>© 2023 Training Center</Footer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: "Open Sans", sans-serif;
  background-color: #f8f8f8;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  padding: 16px;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  font-size: 32px;
  font-weight: bold;
  color: #2f80ed;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
`;

const NavLink = styled.a`
  color: #666666;
  font-size: 16px;
  text-decoration: none;
  margin-right: 24px;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #2f80ed;
  }
`;

const Main = styled.div`
  flex: 1;
  padding: 32px;
`;

const Footer = styled.footer`
  background-color: #ffffff;
  padding: 16px;
  text-align: center;
  color: #666666;
  font-size: 14px;
`;

export default Layout;
