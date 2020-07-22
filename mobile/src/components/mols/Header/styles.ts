import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { Animated } from 'react-native';

interface SideMenuProps {
  open: boolean;
  spin: Animated.AnimatedInterpolation;
}

export const Container = styled.View`
  background: #4494cc;

  position: absolute;
  top: 0;

  width: 100%;
  height: 62px;

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const HeaderText = styled.Text`
  font-family: 'RobotoSlab-Medium';

  margin: 0 auto 0 26px;
`;

export const SideMenuContainer = styled(RectButton)`
  /* border: 1px solid black; */

  width: 40px;
  height: 40px;

  margin: 0 26px 0 auto;

  justify-content: center;
`;

export const SideMenuBar = styled(Animated.View) <SideMenuProps>`
  background: #fff;

  height: 1px;

  margin-top: 10px;
  margin-left: 3px;

  /* ${(props) =>
    props.open
      ? css`
          transform: rotate(90deg);
          margin-left: 10px;
        `
      : css`
          transform: rotate(0deg);
        `}; */
`;
