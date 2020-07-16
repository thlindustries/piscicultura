import React from 'react';
import { Text } from 'react-native';

import { Container } from './styles';

import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <Container onPress={signOut}>
      <Text>Esta é a página do dashboard</Text>
    </Container>
  );
};

export default Dashboard;
