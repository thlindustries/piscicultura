import styled from 'styled-components/native';
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

export const LoginCard = styled.View`
  border: 1px solid #000;
  width: 320px;
  height: 270px;

  border-radius: 15px;

  align-self: center;

  margin-top: 56px;

  background: #02c0fa;
`;

export const LoginCardTitle = styled.Text`
  text-align: center;

  color: #ffffff;
  font-size: 24px;

  margin-top: 12px;
  margin-bottom: 12px;
`;

export const CreateAccountButton = styled.TouchableOpacity`
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
