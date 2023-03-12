import React, { useState,useEffect } from "react";
import styled from "styled-components";

const Layout = ({ children }) => {
  const [showPopup, setShowPopup] = useState(true);


  const handlePopupClose = () => {
    setShowPopup(false);
  };
  useEffect(() => {
    if (window.innerWidth < 768) { // Check if the screen width is less than 768px
      setShowPopup(true); // Show the popup if the screen is small
    }
  }, []);
  return (
    <Container>
      {showPopup && <Popup onClose={handlePopupClose} />}
      <Nav>
        <Logo>Training HUB</Logo>
        <NavLinks>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </NavLinks>
      </Nav>
      <Main>
        {children}
        <Button onClick={() => setShowPopup(true)}>Show Popup</Button>
      </Main>
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

const Button = styled.button`
  margin-top: 32px;
  padding: 12px 16px;
  background-color: #2f80ed;
  color: #ffffff;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #2569c8;
  }
`;

const Footer = styled.footer`
  background-color: #ffffff;
  padding: 16px;
  text-align: center;
  color: #666666;
  font-size: 14px;
`;

const Popup = ({ onClose }) => {
  return (
    <PopupContainer>
      <PopupContent>
        <PopupHeader>
          <PopupTitle>Important Message</PopupTitle>
          <PopupCloseButton onClick={onClose}>X</PopupCloseButton>
        </PopupHeader>
        <PopupMessage>
          This site is not optimized for mobile viewing. Please visit on a desktop device for the best experience.
        </PopupMessage>
      </PopupContent>
    </PopupContainer>
  );
};

const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;


const PopupContent = styled.div`
  background-color: white;
  border-radius: 4px;
  padding: 24px;
  width: 400px;
  max-width: 90%;
  text-align: center;
`;

const PopupHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const PopupTitle = styled.h3`
  font-size: 24px;
  margin: 0;
`;

const PopupCloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  color: #666666;
  cursor: pointer;

  &:hover {
    color: #2f80ed;
  }
`;

const PopupMessage = styled.p`
  font-size: 16px;
  margin: 0;
  line-height: 1.5;
`;


export default Layout;