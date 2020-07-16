import React, { useRef, useCallback } from 'react';
import {
  Image,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  LogoContainer,
  LoginCard,
  FooterText,
  CreateAccountButton,
  LoginCardTitle,
} from './styles';

import logoImg from '../../assets/logo.png';

import Input from '../../components/atoms/Input';
import Button from '../../components/atoms/Button';

// import getValidationErrors from '../../utils/getValidationErrors';

const SignIn: React.FC = () => {
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const handleSignIn = useCallback(() => {
    console.log('sign in');
  }, []);

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <LogoContainer>
              <Image
                source={logoImg}
                style={{ width: 300, height: 250, marginTop: 12 }}
              />
            </LogoContainer>
            <LoginCard>
              <View>
                <LoginCardTitle>Faça seu logon</LoginCardTitle>
              </View>
              <Form ref={formRef} onSubmit={handleSignIn}>
                <Input
                  name="email"
                  icon="mail"
                  placeholder="E-mail"
                  autoCorrect={false}
                  autoCapitalize="none"
                  keyboardType="email-address"
                  returnKeyType="next"
                  onSubmitEditing={() => {
                    passwordInputRef.current?.focus();
                  }}
                />
                <Input
                  ref={passwordInputRef}
                  name="password"
                  icon="lock"
                  placeholder="Senha"
                  secureTextEntry
                  returnKeyType="send"
                  onSubmitEditing={() => {
                    formRef.current?.submitForm();
                  }}
                />
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
        <CreateAccountButton onPress={() => navigation.navigate('SignUp')}>
          <Icon name="log-in" size={20} color="#656565" />
          <FooterText>Criar Conta</FooterText>
        </CreateAccountButton>
      </KeyboardAvoidingView>
    </>
  );
};

export default SignIn;
