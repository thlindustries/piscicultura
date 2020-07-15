import React, { useRef, useCallback } from 'react';
import { Image, ScrollView, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import {
  Container,
  LogoContainer,
  LoginCard,
  FooterText,
  CreateAccountButton,
  LoginCardTitle,
  FormInput,
  FormButton,
} from './styles';
import Button from '../../components/atoms/Button';

import logoImg from '../../assets/logo.png';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSignIn = useCallback(() => {
    console.log('sign in');
  }, []);

  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <Container>
            <LogoContainer>
              <Image
                source={logoImg}
                style={{ width: 300, height: 250, marginTop: 12 }}
              />
            </LogoContainer>
            <LoginCard>
              <LoginCardTitle>Faça seu logon</LoginCardTitle>
              <Form ref={formRef} onSubmit={handleSignIn}>
                <FormInput />
                <FormInput />
                <Button
                  onPress={() => {
                    console.log('apertou o botão');
                  }}
                >
                  Entrar
                </Button>
              </Form>
            </LoginCard>
          </Container>
        </ScrollView>
      </SafeAreaView>
      <CreateAccountButton>
        <Icon name="log-in" size={20} color="#656565" />
        <FooterText>Criar Conta</FooterText>
      </CreateAccountButton>
    </>
  );
};

export default SignIn;
