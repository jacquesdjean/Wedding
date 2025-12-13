import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { weddingConfig } from '../config/weddingConfig';

const Nav = styled.nav<{ $scrolled: boolean; $menuOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  background-color: ${({ $scrolled, $menuOpen, theme }) =>
    $scrolled || $menuOpen ? theme.colors.white : 'transparent'};
  box-shadow: ${({ $scrolled, theme }) => ($scrolled ? theme.shadows.md : 'none')};
  transition: all ${({ theme }) => theme.transitions.normal};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing['2xl']};
  }
`;

const NavContent = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a<{ $scrolled: boolean }>`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  letter-spacing: 0.1em;
  color: ${({ $scrolled, theme }) =>
    $scrolled ? theme.colors.darkCharcoal : theme.colors.white};
  text-decoration: none;
  transition: color ${({ theme }) => theme.transitions.fast};
  text-shadow: ${({ $scrolled }) => ($scrolled ? 'none' : '0 1px 10px rgba(0, 0, 0, 0.3)')};

  &:hover {
    color: ${({ theme }) => theme.colors.gold};
  }
`;

const NavLinks = styled.ul<{ $menuOpen: boolean; $scrolled: boolean }>`
  display: none;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: ${({ $menuOpen }) => ($menuOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: ${({ theme }) => theme.colors.white};
    padding: ${({ theme }) => theme.spacing.lg};
    box-shadow: ${({ theme }) => theme.shadows.lg};
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

const NavLink = styled.a<{ $scrolled: boolean; $inMenu?: boolean }>`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ $scrolled, $inMenu, theme }) =>
    $scrolled || $inMenu ? theme.colors.charcoal : theme.colors.white};
  text-decoration: none;
  transition: color ${({ theme }) => theme.transitions.fast};
  text-shadow: ${({ $scrolled, $inMenu }) =>
    $scrolled || $inMenu ? 'none' : '0 1px 10px rgba(0, 0, 0, 0.3)'};

  &:hover {
    color: ${({ theme }) => theme.colors.gold};
  }
`;

const MenuButton = styled.button<{ $scrolled: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  padding: ${({ theme }) => theme.spacing.sm};
  cursor: pointer;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }

  span {
    display: block;
    width: 24px;
    height: 2px;
    background-color: ${({ $scrolled, theme }) =>
      $scrolled ? theme.colors.charcoal : theme.colors.white};
    transition: all ${({ theme }) => theme.transitions.fast};
  }
`;

const navItems = [
  { label: 'Welcome', href: '#welcome' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Venues', href: '#venues' },
  { label: 'Travel', href: '#travel' },
  { label: 'Stay', href: '#lodging' },
  { label: 'Contact', href: '#contact' },
];

export const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <Nav $scrolled={scrolled} $menuOpen={menuOpen}>
      <NavContent>
        <Logo href="#home" $scrolled={scrolled || menuOpen}>
          {weddingConfig.couple.name}
        </Logo>
        <MenuButton $scrolled={scrolled || menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <span />
          <span />
          <span />
        </MenuButton>
        <NavLinks $menuOpen={menuOpen} $scrolled={scrolled}>
          {navItems.map((item) => (
            <li key={item.href}>
              <NavLink
                href={item.href}
                $scrolled={scrolled}
                $inMenu={menuOpen}
                onClick={handleLinkClick}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </NavLinks>
      </NavContent>
    </Nav>
  );
};
