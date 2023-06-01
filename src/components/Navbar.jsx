import "./styles.css";
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom"

const Nav = styled.nav`
    z-index: 4;
  top: 0; 
  width: 100%;
  position: fixed;
    top: 0;
    left: 0;
    translate: 0 -72px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 0 20px;
    width: 100%;
    height: 72px;
    box-shadow: 0 10px 20px rgb(0 0 0 / 10%);
    background: #6b63ff;
    transition: 0.3s;
`

const Heading = styled(Link)`
    color: green;
    font-family: "McLaren", cursive;
    font-weight: 800;
    font-size: 39px;
    text-decoration-line: none;
    margin: auto 0px;
`
const Wallet = styled(Link)`
font-weight: bold;
text-decoration-line: none;
color: green;
font-family: "McLaren", cursive;
background-color: white;
border: 2px solid #4CAF50;
border-radius: 5px;
transition-duration: 0.4s;
padding: 15px 32px;
text-align: center;
display: inline-block;
font-size: 16px;
cursor: pointer;
:hover{
    color: white;
    background-color: green;
}
`

export default function Navbar() {
  const lastScrollTop = useRef(0);

  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        var { pageYOffset } = window;
        if (pageYOffset > lastScrollTop.current) {
          // downward scroll
          setIsNavbarVisible(false);
        } else if (pageYOffset < lastScrollTop.current) {
          // upward scroll
          setIsNavbarVisible(true);
        } // else was horizontal scroll
        lastScrollTop.current = pageYOffset <= 0 ? 0 : pageYOffset;
      },
      { passive: true }
    );
  }, []);

  return (
    <>
      <Nav className={`${isNavbarVisible ? "visible" : ""}`}>
        <Heading to="/" > Title</Heading>
        <Wallet to="/" > Connect Wallet</Wallet>
      </Nav>
    </>
  );
};