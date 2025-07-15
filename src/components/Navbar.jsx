import React from 'react'
import { useState} from 'react';
import {Link as LinkR} from "react-router-dom"
import styled, { useTheme } from 'styled-components';
import {Bio} from '../data/constants';
import {MenuRounded} from '@mui/icons-material';


const Nav = styled.div`
background-color: ${({theme}) => theme.bg
};
height: 80px;
display: flex;
align-items: center;
justify-content: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 10;
color: white;`;

const NavbarContainer = styled.div`
position: relative;
width: 100%; 
max-width: 1200px;
display: flex;
align-items: center;
justify-content: space-between;

`;

const NavLogo = styled(LinkR)`
  text-decoration: none;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 1.3rem;
  color: inherit;
`;

const NavItems = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 32px;
 @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
color: ${({theme}) => theme.text_primary};
font-weight: 500;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
&:hover {
color: ${({theme}) => theme.primary};}
`;

const ButtonContainer = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
@media screen and (max-width: 768px) {
    display: none;
}
`;  

const GithubButton = styled.a`
border: 1px solid ${({theme}) => theme.primary};
justify-content: center;
display: flex;
align-items: center;
border-radius: 20px;
cursor: pointer;
padding: 10px 20px;
font-size: 16px; 
text-decoration: none;
font-weight: 500;
color: ${({theme}) => theme.primary};
transition: all 0.6s ease-in-out;
&:hover {
background: ${({theme}) => theme.primary};
color: ${({theme}) => theme.text_primary};}
`;

const MobileIcon = styled.div`
display: none;
align-items: center;
cursor: pointer;
@media screen and (max-width: 768px) {
    display: flex;
}
color: ${({theme}) => theme.text_primary};
`;

const MobileMenu = styled.div`
width: 100%;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 16px;
padding: 12px 40px 24px 40px;
cursor: pointer;
list-style: none;
background: ${({theme}) => theme.card_light + 99};
position: absolute;
top: 80px;
left: 0;
transition: all 0.6s ease-in-out;
transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-20%)')};
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  pointer-events: ${({ isOpen }) => (isOpen ? 'auto' : 'none')};
  display: flex;
  border-radius: 0 0 20px 20px;
  box-shadow: 0px 4px 15px rgba(0,0,0,0.1);
  z-index: 999;

  @media screen and (min-width: 769px) {
    display: none;
  }
`;

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const theme = useTheme();
    const handleLinkClick = () => {
        setIsOpen(false); // Close mobile menu when link is clicked
      };
    return (
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">GeeksForgeeks</NavLogo>

            <MobileIcon onClick={() => setIsOpen(!isOpen)}>
                <MenuRounded style={{color: "inherit"}}/>
            </MobileIcon>
            
            <NavItems>
                <NavLink href="#About">About</NavLink>
                <NavLink href="#Skills">Skills</NavLink>
                <NavLink href="#Experience">Experience</NavLink>
                <NavLink href="#Projects">Projects</NavLink>
                <NavLink href="#Education">Education</NavLink>
            </NavItems>

            <ButtonContainer>
                <GithubButton href={Bio.github} target="_Blank" >
                    Github Profile
                </GithubButton>
            </ButtonContainer>

            <MobileMenu isOpen={isOpen}>
                <NavLink href="#About" onClick={handleLinkClick}>About</NavLink>
                <NavLink href="#Skills" onClick={handleLinkClick}>Skills</NavLink>
                <NavLink href="#Experience" onClick={handleLinkClick}>Experience</NavLink>
                <NavLink href="#Projects" onClick={handleLinkClick}>Projects</NavLink>
                <NavLink href="#Education" onClick={handleLinkClick}>Education</NavLink>
                <GithubButton href={Bio.github} 
                target="_Blank" 
                style={{
                    background: theme.primary,
                    color: theme.text_primary
                }}>
                    Github Profile
                </GithubButton>
                </MobileMenu>
                
            
         </NavbarContainer>
        </Nav>
       
    )
}

export default Navbar;