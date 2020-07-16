import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Tooltip from '../Tooltip';

interface ContainerProps {
  focus: boolean;
  hasError: boolean;
  hasValue: boolean;
}

interface TooltipProps {
  title: string;
  icon: string;
}

export const Container = styled.View<ContainerProps>`
  width: 88%;
  height: 50px;
  padding: 0 16px;
  background: #fdfdfd;

  border-radius: 15px;
  margin-bottom: 8px;
  margin-top: 12px;

  justify-content: center;
  align-items: center;
  align-self: center;
  flex-direction: row;

  border-width: 2px;
  border-color: #fff;

  ${(props) =>
    props.hasError &&
    css`
      border-color: #c53030;
    `}

  ${(props) =>
    props.focus &&
    css`
      border-color: #3478fb;
    `}

  ${(props) =>
    props.hasValue &&
    css`
      border-color: #3478fb;
    `}
`;
export const TextInput = styled.TextInput`
  flex: 1;
  color: #464646;
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';

  margin-right: 20px;
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;

export const Error = styled(Tooltip) <TooltipProps>``;
