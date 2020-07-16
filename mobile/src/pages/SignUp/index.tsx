import React, { useRef, useCallback } from 'react';
import {
  Image,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  LogoContainer,
  FormContainer,
  FooterText,
  BackToSignInButton,
} from './styles';

import logoImg from '../../assets/logo.png';

import Input from '../../components/atoms/Input';
import Button from '../../components/atoms/Button';

// import getValidationErrors from '../../utils/getValidationErrors';

const SignUp: React.FC = () => {
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);
  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const handleSignUp = useCallback(() => {
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
            <FormContainer>
              <Form onSubmit={handleSignUp} ref={formRef}>
                <Input
                  name="nome"
                  icon="user"
                  autoCapitalize="words"
                  placeholder="Nome completo"
                  returnKeyType="next"
                  onSubmitEditing={() => emailInputRef.current?.focus()}
                />

                <Input
                  ref={emailInputRef}
                  name="email"
                  icon="mail"
                  autoCorrect={false}
                  autoCapitalize="none"
                  placeholder="E-mail"
                  keyboardType="email-address"
                  returnKeyType="next"
                  onSubmitEditing={() => passwordInputRef.current?.focus()}
                />

                <Input
                  ref={passwordInputRef}
                  secureTextEntry
                  name="senha"
                  icon="lock"
                  placeholder="Senha"
                  textContentType="newPassword"
                  returnKeyType="send"
                  onSubmitEditing={() => formRef.current?.submitForm()}
                />

                <Button onPress={() => formRef.current?.submitForm()}>
                  Cadastrar
                </Button>
              </Form>
            </FormContainer>
          </Container>
        </ScrollView>
        <BackToSignInButton onPress={() => navigation.navigate('SignIn')}>
          <Icon name="arrow-left" size={20} color="#656565" />
          <FooterText>Voltar para logon</FooterText>
        </BackToSignInButton>
      </KeyboardAvoidingView>
    </>
  );
};

export default SignUp;
