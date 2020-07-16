import React, { useRef, useCallback } from 'react';
import {
  Image,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';

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
import api from '../../services/api';

import getValidationErrors from '../../utils/getValidationErrors';

interface SignUpFormData {
  name: string;
  email: string;
  passowrd: string;
}

const SignUp: React.FC = () => {
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);
  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const handleSignUp = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um endereço de email válido'),
          senha: Yup.string().min(6, 'Mínimo de 6 caracteres'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/users', data);

        Alert.alert(
          'Cadastro realizado!',
          'Você já pode fazer o seu login na aplicação!',
        );

        navigation.goBack();
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
          return;
        }

        Alert.alert(
          'Erro no cadastro',
          'Ocorreu um erro ao cadastrar, tente novamente!',
        );
      }
    },
    [navigation],
  );

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
                  name="name"
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
                  name="password"
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
