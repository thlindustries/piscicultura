import React, { useState, useCallback } from 'react';
import { Animated, Easing } from 'react-native';

import {
  Container,
  HeaderText,
  SideMenuContainer,
  SideMenuBar,
} from './styles';

import Overlay from '../../atoms/Overlay';

interface HeaderProps {
  children: string;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  const [open, setOpen] = useState(false);

  const spinValue = new Animated.Value(0);
  const degrees = open ? ['0deg', '90deg'] : ['90deg', '0deg'];
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: degrees,
  });

  Animated.timing(spinValue, {
    toValue: 1,
    duration: 1000,
    easing: Easing.linear,
    useNativeDriver: true,
  }).start();

  const handleOpenSideMenu = useCallback(() => {
    setOpen(!open);
  }, [open]);

  return open ? (
    <Container>
      <HeaderText>{children}</HeaderText>
      <SideMenuContainer onPress={handleOpenSideMenu}>
        <SideMenuBar style={{ transform: [{ rotate: spin }] }} open={open} />
        <SideMenuBar style={{ transform: [{ rotate: spin }] }} open={open} />
        <SideMenuBar style={{ transform: [{ rotate: spin }] }} open={open} />
      </SideMenuContainer>
      <Overlay />
    </Container>
  ) : (
      <Container>
        <HeaderText>{children}</HeaderText>
        <SideMenuContainer onPress={handleOpenSideMenu}>
          <SideMenuBar open={open} />
          <SideMenuBar open={open} />
          <SideMenuBar open={open} />
        </SideMenuContainer>
      </Container>
    );
};

export default Header;
