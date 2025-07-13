import React from 'react';
import styled from 'styled-components';

import { COLORS, WEIGHTS, QUERIES } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <Wrapper>
          <BigHeaderWrapper>
              <SuperHeader />
              <MainHeader>
                <Side>
                  <Logo />
                </Side>
                <Nav>
                  <NavLink href="/sale">Sale</NavLink>
                  <NavLink href="/new">New&nbsp;Releases</NavLink>
                  <NavLink href="/men">Men</NavLink>
                  <NavLink href="/women">Women</NavLink>
                  <NavLink href="/kids">Kids</NavLink>
                  <NavLink href="/collections">Collections</NavLink>
                </Nav>
                <Side />
              </MainHeader>
          </BigHeaderWrapper>

          <MobileWrapper>
              <LogoWrapper>
                <Logo />
              </LogoWrapper>
              <Icon id='shopping-bag' />
              <Icon id='search' />
              <Icon id='menu' />
              <MobileMenu
                isOpen={showMobileMenu}
                onDismiss={() => setShowMobileMenu(false)}
              />
          </MobileWrapper>
      </Wrapper>
    </header>
  );
};

const Wrapper = styled.div`
    border-bottom: 1px solid ${COLORS.gray[300]};
    margin: 0;
    padding: 0;
`;

const LogoWrapper = styled.div`
    margin-right: auto;
`;

const BigHeaderWrapper = styled.div`
    @media (max-width: ${QUERIES.tabletAndDown}) {
        display: none;
    }
`;


const MobileWrapper = styled.div`
    display: none;
    padding: 24px 29px 24px 32px;

    @media (max-width: ${QUERIES.tabletAndDown}) {
        display: flex;
        gap: 34px;
        padding
    }
`;

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};

    @media (max-width: ${QUERIES.tabletAndDown}) {
        display: none;
    }
`;

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0px 48px;
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
