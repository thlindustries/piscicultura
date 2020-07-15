import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 50%;
  height: 40px;
  background: #fff;
  border-radius: 15px;

  margin-top: 16px;
  align-items: center;
  align-self: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: #000;
  font-size: 18px;
`;
