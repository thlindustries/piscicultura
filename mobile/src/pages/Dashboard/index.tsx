import React, { useCallback, useState } from 'react';

import { Container } from './styles';

import LineChartTest from './TestChart';
import Button from '../../components/atoms/Button';

import { useAuth } from '../../hooks/auth';

interface iData {
  x: number;
  y: number;
}

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();

  const [data, setData] = useState([
    { x: 1, y: 13000 },
    { x: 2, y: 16500 },
    { x: 3, y: 14250 },
    { x: 4, y: 19000 },
  ]);
  const handleChangeData = useCallback(() => {
    setData([
      { x: 1, y: 13200 },
      { x: 2, y: 16000 },
      { x: 3, y: 14150 },
      { x: 4, y: 15000 },
    ]);
  }, []);

  return (
    <Container>
      {/* <Text>Esta é a página do dashboard</Text> */}
      <LineChartTest data={data} />
      <Button onPress={handleChangeData}>Teste atualização</Button>
    </Container>
  );
};

export default Dashboard;
