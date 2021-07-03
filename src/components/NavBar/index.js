import React, {useState, useEffect } from 'react'

import {Nav, NavbarContainer, NavLogo, NavMenu, NavLinks, NavItem} from './NavBarElements'

import { animateScroll as scroll } from 'react-scroll'

const NavBar = () => {
    
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true)
        } else{
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav, [])
    })

    const toggleHome = () => {
        scroll.scrollToTop();
    }
    
    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo onClick={toggleHome}>
                    Galaxy
                    </NavLogo>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about'
                             smooth={true} duration={500} spy={true} exact='true' offset={-5} >about</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='nft'
                             smooth={true} duration={600} spy={true} exact='true' offset={-5} >nft</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='collection'
                             smooth={true} duration={700} spy={true} exact='true' offset={-5} >universe</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default NavBar
