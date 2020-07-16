import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;

  align-items: center;
  justify-content: center;

  padding: 0 30px ${Platform.OS === 'android' ? 120 : 40}px;
`;

export const LogoContainer = styled.View`
  align-items: center;
`;

export const FormContainer = styled.View`
  width: 320px;
  margin-top: 36px;
`;

export const BackToSignInButton = styled(RectButton)`
  position: absolute;

  left: 0;
  bottom: 0;
  right: 0;

  background: #dddddd;

  align-items: center;
  justify-content: center;
  flex-direction: row;

  height: 60px;


  /* padding: 48px 10px ${8 + getBottomSpace()}px; */
`;

export const FooterText = styled.Text`
  font-family: 'RobotoSlab-Regular';
  color: #656565;
`;
